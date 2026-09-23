export type CourseLevel = "All Level";
export type StudyMode = "In Person" | "Online" | "Hybrid";

export interface Course {
  id: string;
  title: string;
  slug: string;
  category: string;
  categorySlug: string;
  shortDescription: string;
  description: string;
  imageUrl: string;
  duration: string;
  level: CourseLevel;
  mode: StudyMode[];
  modules: string[];
  learningOutcomes: string[];
  requirements: string[];
  schedule?: string;
  fee?: number;
  currency?: string;
  featured: boolean;
  published: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface CourseCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  iconName: string;
  topics: string[];
  featured?: boolean;
}

export type InquiryStatus = "new" | "contacted" | "enrolled" | "archived";

export interface Inquiry {
  id?: string;
  fullName: string;
  email: string;
  phone: string;
  courseInterest: string;
  subject: string;
  message: string;
  status?: InquiryStatus;
  createdAt?: string | Date | Record<string, unknown>;
  updatedAt?: string | Date | Record<string, unknown>;
}


export interface FilterState {
  search: string;
  category: string;
  level: string;
  mode: string;
}
