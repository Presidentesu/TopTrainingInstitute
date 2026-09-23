import React, { Suspense } from "react";
import { Metadata } from "next";
import { BookOpen } from "lucide-react";
import { getPublishedCourses } from "@/lib/firebase/firestore";
import { CoursesCatalogClient } from "@/components/courses/CoursesCatalogClient";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";

export const metadata: Metadata = {
  title: "Course Catalog | Practical Training Programs",
  description:
    "Explore our complete multidisciplinary catalog of practical courses in software development, languages, graphic design, video editing, accounting, and engineering software.",
};

export const revalidate = 60;

export default async function CoursesPage() {
  const courses = await getPublishedCourses();

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white py-16 lg:py-20 border-b border-blue-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/80 border border-blue-700/60 text-blue-200 text-xs font-semibold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            <span>Comprehensive Curriculum</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Course Catalog
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Browse our career-focused courses across technology, creative arts, business software, and engineering. Select a program to view curriculum details and schedules.
          </p>
        </div>
      </section>

      {/* Main Catalog Area */}
      <section className="py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <Suspense fallback={<LoadingSpinner size="lg" text="Loading course catalog..." />}>
          <CoursesCatalogClient initialCourses={courses} />
        </Suspense>
      </section>
    </div>
  );
}
