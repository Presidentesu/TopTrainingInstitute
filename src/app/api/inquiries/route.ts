import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { submitInquiry, getInquiries } from "@/lib/firebase/firestore";
import { sendInquiryNotificationEmail } from "@/lib/email";
import { verifySessionToken, ADMIN_COOKIE_NAME } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = await submitInquiry(body);
    if (!result.success) {
      return NextResponse.json({ success: false, error: result.error }, { status: 400 });
    }

    // Send email notification to toptrainings2020@gmail.com (non-blocking)
    sendInquiryNotificationEmail({
      fullName: body.fullName,
      email: body.email,
      phone: body.phone,
      courseInterest: body.courseInterest,
      subject: body.subject,
      message: body.message,
      id: result.id,
    }).catch((emailErr) => {
      console.error("Non-blocking email dispatch failure:", emailErr);
    });

    return NextResponse.json({ success: true, id: result.id });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to process inquiry";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
    const session = verifySessionToken(sessionToken);

    if (!session.valid) {
      return NextResponse.json(
        { success: false, error: "Unauthorized. Please log in to view inquiries." },
        { status: 401 }
      );
    }

    const inquiries = await getInquiries();
    return NextResponse.json({ success: true, inquiries });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to fetch inquiries";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
