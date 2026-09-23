import { Metadata } from "next";
import { cookies } from "next/headers";
import { verifySessionToken, ADMIN_COOKIE_NAME, INQUIRY_ADMIN_EMAIL } from "@/lib/auth";
import { getInquiries } from "@/lib/firebase/firestore";
import { InquiryPageClient } from "@/components/inquiry/InquiryPageClient";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Admin Inquiries | Top Training Institute",
  description: "Secure administrative inquiries management for Top Training Institute.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default async function InquiryPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
  const session = verifySessionToken(token);

  const initialInquiries = session.valid ? await getInquiries() : [];

  return (
    <div className="bg-slate-50 min-h-screen">
      <InquiryPageClient
        initialAuthenticated={session.valid}
        adminEmail={session.email || INQUIRY_ADMIN_EMAIL}
        initialInquiries={initialInquiries}
      />
    </div>
  );
}
