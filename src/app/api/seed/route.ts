import { NextResponse } from "next/server";
import { seedCoursesToFirestore } from "@/lib/firebase/firestore";
import { isFirebaseConfigured } from "@/lib/firebase/config";

export async function POST() {
  if (!isFirebaseConfigured) {
    return NextResponse.json(
      {
        success: false,
        error: "Firebase is not configured. Please verify your environment variables.",
      },
      { status: 400 }
    );
  }

  try {
    const result = await seedCoursesToFirestore();
    return NextResponse.json({
      success: true,
      message: `Successfully seeded ${result.count} courses into Firestore!`,
      count: result.count,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error during seeding";
    return NextResponse.json(
      {
        success: false,
        error: message,
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return POST();
}
