import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { updateInquiryStatus, deleteInquiry } from "@/lib/firebase/firestore";
import { verifySessionToken, ADMIN_COOKIE_NAME } from "@/lib/auth";
import { InquiryStatus } from "@/types";

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function PATCH(request: Request, context: RouteParams) {
  try {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
    const session = verifySessionToken(sessionToken);

    if (!session.valid) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await context.params;
    const body = await request.json();
    const status = body.status as InquiryStatus;

    if (!status || !["new", "contacted", "enrolled", "archived"].includes(status)) {
      return NextResponse.json({ success: false, error: "Invalid status value" }, { status: 400 });
    }

    const result = await updateInquiryStatus(id, status);
    if (!result.success) {
      return NextResponse.json({ success: false, error: result.error }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Failed to update inquiry";
    return NextResponse.json({ success: false, error: msg }, { status: 500 });
  }
}

export async function DELETE(request: Request, context: RouteParams) {
  try {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
    const session = verifySessionToken(sessionToken);

    if (!session.valid) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await context.params;
    const result = await deleteInquiry(id);
    if (!result.success) {
      return NextResponse.json({ success: false, error: result.error }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Failed to delete inquiry";
    return NextResponse.json({ success: false, error: msg }, { status: 500 });
  }
}
