import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  addDoc,
  serverTimestamp,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
  Timestamp,
} from "firebase/firestore";
import { db, isFirebaseConfigured } from "./config";
import { Course, Inquiry, InquiryStatus } from "@/types";
import { FALLBACK_COURSES } from "@/data/fallback-courses";


export interface CreateInquiryInput {
  fullName: string;
  email: string;
  phone: string;
  courseInterest: string;
  subject: string;
  message: string;
}

/**
 * Fetch all published courses.
 * Falls back to FALLBACK_COURSES if Firebase is unconfigured, unreachable, or empty.
 */
export async function getPublishedCourses(): Promise<Course[]> {
  if (!db || !isFirebaseConfigured) {
    return FALLBACK_COURSES;
  }

  try {
    const coursesRef = collection(db, "courses");
    const q = query(coursesRef, where("published", "==", true));
    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      return FALLBACK_COURSES;
    }

    const courses: Course[] = [];
    snapshot.forEach((docSnap) => {
      const data = docSnap.data();
      courses.push({
        id: docSnap.id,
        title: data.title || "",
        slug: data.slug || docSnap.id,
        category: data.category || "",
        categorySlug: data.categorySlug || "",
        shortDescription: data.shortDescription || "",
        description: data.description || "",
        imageUrl: data.imageUrl || "",
        duration: data.duration || "",
        level: "All Level",
        mode: Array.isArray(data.mode) ? data.mode : ["In Person"],
        modules: Array.isArray(data.modules) ? data.modules : [],
        learningOutcomes: Array.isArray(data.learningOutcomes) ? data.learningOutcomes : [],
        requirements: Array.isArray(data.requirements) ? data.requirements : [],
        schedule: data.schedule,
        fee: data.fee,
        currency: data.currency || "USD",
        featured: Boolean(data.featured),
        published: Boolean(data.published),
        createdAt: data.createdAt instanceof Timestamp ? data.createdAt.toDate().toISOString() : data.createdAt,
        updatedAt: data.updatedAt instanceof Timestamp ? data.updatedAt.toDate().toISOString() : data.updatedAt,
      });
    });

    return courses.length > 0 ? courses : FALLBACK_COURSES;
  } catch (error) {
    console.warn("Error fetching courses from Firestore, using fallback catalog:", error);
    return FALLBACK_COURSES;
  }
}

/**
 * Fetch featured courses for the homepage.
 */
export async function getFeaturedCourses(): Promise<Course[]> {
  const allCourses = await getPublishedCourses();
  const featured = allCourses.filter((course) => course.featured);
  return featured.length > 0 ? featured : allCourses.slice(0, 6);
}

/**
 * Fetch a course by its URL slug.
 */
export async function getCourseBySlug(slug: string): Promise<Course | null> {
  if (!slug) return null;

  if (db && isFirebaseConfigured) {
    try {
      const coursesRef = collection(db, "courses");
      const q = query(coursesRef, where("slug", "==", slug));
      const snapshot = await getDocs(q);

      if (!snapshot.empty) {
        const docSnap = snapshot.docs[0];
        const data = docSnap.data();
        return {
          id: docSnap.id,
          title: data.title || "",
          slug: data.slug || docSnap.id,
          category: data.category || "",
          categorySlug: data.categorySlug || "",
          shortDescription: data.shortDescription || "",
          description: data.description || "",
          imageUrl: data.imageUrl || "",
          duration: data.duration || "",
          level: "All Level",
          mode: Array.isArray(data.mode) ? data.mode : ["In Person"],
          modules: Array.isArray(data.modules) ? data.modules : [],
          learningOutcomes: Array.isArray(data.learningOutcomes) ? data.learningOutcomes : [],
          requirements: Array.isArray(data.requirements) ? data.requirements : [],
          schedule: data.schedule,
          fee: data.fee,
          currency: data.currency || "USD",
          featured: Boolean(data.featured),
          published: Boolean(data.published),
          createdAt: data.createdAt instanceof Timestamp ? data.createdAt.toDate().toISOString() : data.createdAt,
          updatedAt: data.updatedAt instanceof Timestamp ? data.updatedAt.toDate().toISOString() : data.updatedAt,
        };
      }
    } catch (error) {
      console.warn(`Error fetching course ${slug} from Firestore:`, error);
    }
  }

  // Fallback lookup
  const found = FALLBACK_COURSES.find(
    (c) => c.slug.toLowerCase() === slug.toLowerCase() || c.id === slug
  );
  return found || null;
}

/**
 * Submit an inquiry/contact form to Firestore.
 */
export async function submitInquiry(
  input: CreateInquiryInput
): Promise<{ success: boolean; id?: string; error?: string }> {
  // Input validation
  const cleanName = input.fullName?.trim();
  const cleanEmail = input.email?.trim().toLowerCase();
  const cleanPhone = input.phone?.trim();
  const cleanCourse = input.courseInterest?.trim();
  const cleanSubject = input.subject?.trim();
  const cleanMessage = input.message?.trim();

  if (!cleanName || cleanName.length < 2) {
    return { success: false, error: "Please enter your full name." };
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!cleanEmail || !emailRegex.test(cleanEmail)) {
    return { success: false, error: "Please provide a valid email address." };
  }
  if (!cleanPhone || cleanPhone.length < 5) {
    return { success: false, error: "Please provide a valid contact phone number." };
  }
  if (!cleanSubject || cleanSubject.length < 3) {
    return { success: false, error: "Please specify a subject for your inquiry." };
  }
  if (!cleanMessage || cleanMessage.length < 10) {
    return { success: false, error: "Please enter a message of at least 10 characters." };
  }

  if (!db || !isFirebaseConfigured) {
    // Graceful offline/demo mode: simulates successful submission
    console.info("Firestore unconfigured: inquiry recorded locally in demo mode:", {
      ...input,
      status: "new",
      createdAt: new Date().toISOString(),
    });
    return {
      success: true,
      id: `demo-${Date.now()}`,
    };
  }

  try {
    const inquiriesRef = collection(db, "inquiries");
    const docRef = await addDoc(inquiriesRef, {
      fullName: cleanName,
      email: cleanEmail,
      phone: cleanPhone,
      courseInterest: cleanCourse || "General Inquiry",
      subject: cleanSubject,
      message: cleanMessage,
      status: "new",
      createdAt: serverTimestamp(),
    });

    return { success: true, id: docRef.id };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to submit inquiry. Please try again or reach out by phone/email.";
    console.error("Firestore inquiry submission error:", err);
    return {
      success: false,
      error: message,
    };
  }
}

/**
 * Helper to seed initial courses into Firestore if empty
 */
export async function seedCoursesToFirestore(): Promise<{ count: number }> {
  if (!db || !isFirebaseConfigured) {
    throw new Error("Firebase is not configured. Please supply environment variables in .env.local.");
  }

  let count = 0;
  for (const course of FALLBACK_COURSES) {
    const docRef = doc(db, "courses", course.slug);
    await setDoc(docRef, {
      ...course,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    }, { merge: true });
    count++;
  }

  return { count };
}

// In-memory store for demo inquiries if Firestore is unconfigured
const DEMO_INQUIRIES: Inquiry[] = [
  {
    id: "demo-inq-1",
    fullName: "Abebe Bikila",
    email: "abebe.bikila@gmail.com",
    phone: "0911223344",
    courseInterest: "Full-Stack Website Development",
    subject: "Class schedule & weekend batches",
    message: "Hello Top Training, I am interested in joining the upcoming weekend batch for Full-Stack Website Development. Are seats available at the Megenagna branch?",
    status: "new",
    createdAt: new Date(Date.now() - 3600000 * 4).toISOString(),
  },
  {
    id: "demo-inq-2",
    fullName: "Sara Tadesse",
    email: "sara.t@yahoo.com",
    phone: "0922446688",
    courseInterest: "Graphics Design Masterclass",
    subject: "Enrollment at Mexico branch",
    message: "I would like to enroll in Photoshop & Illustrator. Could someone please call me to confirm the timing?",
    status: "contacted",
    createdAt: new Date(Date.now() - 3600000 * 26).toISOString(),
  },
];

/**
 * Fetch all student inquiries from Firestore ordered by creation date descending.
 */
export async function getInquiries(): Promise<Inquiry[]> {
  if (!db || !isFirebaseConfigured) {
    return DEMO_INQUIRIES;
  }

  try {
    const inquiriesRef = collection(db, "inquiries");
    // Order by createdAt desc; fallback to unordered if index is building
    let snapshot;
    try {
      const q = query(inquiriesRef, orderBy("createdAt", "desc"));
      snapshot = await getDocs(q);
    } catch {
      snapshot = await getDocs(inquiriesRef);
    }

    if (snapshot.empty) {
      return [];
    }

    const inquiries: Inquiry[] = [];
    snapshot.forEach((docSnap) => {
      const data = docSnap.data();
      let createdAtStr: string;
      if (data.createdAt instanceof Timestamp) {
        createdAtStr = data.createdAt.toDate().toISOString();
      } else if (typeof data.createdAt === "string") {
        createdAtStr = data.createdAt;
      } else {
        createdAtStr = new Date().toISOString();
      }

      inquiries.push({
        id: docSnap.id,
        fullName: data.fullName || "Anonymous",
        email: data.email || "",
        phone: data.phone || "",
        courseInterest: data.courseInterest || "General Inquiry",
        subject: data.subject || "No Subject",
        message: data.message || "",
        status: (data.status as InquiryStatus) || "new",
        createdAt: createdAtStr,
      });
    });

    // Sort manually if unordered
    return inquiries.sort((a, b) => {
      const timeA = typeof a.createdAt === "string" ? new Date(a.createdAt).getTime() : 0;
      const timeB = typeof b.createdAt === "string" ? new Date(b.createdAt).getTime() : 0;
      return timeB - timeA;
    });
  } catch (error) {
    console.error("Error fetching inquiries from Firestore:", error);
    return DEMO_INQUIRIES;
  }
}

/**
 * Update an inquiry's status (new, contacted, enrolled, archived).
 */
export async function updateInquiryStatus(
  id: string,
  status: InquiryStatus
): Promise<{ success: boolean; error?: string }> {
  if (!id) return { success: false, error: "Missing inquiry ID" };

  if (!db || !isFirebaseConfigured) {
    const item = DEMO_INQUIRIES.find((i) => i.id === id);
    if (item) item.status = status;
    return { success: true };
  }

  try {
    const docRef = doc(db, "inquiries", id);
    await updateDoc(docRef, {
      status,
      updatedAt: serverTimestamp(),
    });
    return { success: true };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Failed to update inquiry status";
    return { success: false, error: msg };
  }
}

/**
 * Delete an inquiry from Firestore.
 */
export async function deleteInquiry(id: string): Promise<{ success: boolean; error?: string }> {
  if (!id) return { success: false, error: "Missing inquiry ID" };

  if (!db || !isFirebaseConfigured) {
    const idx = DEMO_INQUIRIES.findIndex((i) => i.id === id);
    if (idx !== -1) DEMO_INQUIRIES.splice(idx, 1);
    return { success: true };
  }

  try {
    const docRef = doc(db, "inquiries", id);
    await deleteDoc(docRef);
    return { success: true };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Failed to delete inquiry";
    return { success: false, error: msg };
  }
}

