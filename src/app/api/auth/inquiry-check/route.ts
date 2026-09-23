import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifySessionToken, ADMIN_COOKIE_NAME } from "@/lib/auth";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
    const session = verifySessionToken(token);

    return NextResponse.json({
      authenticated: session.valid,
      email: session.email || null,
    });
  } catch {
    return NextResponse.json({ authenticated: false });
  }
}
