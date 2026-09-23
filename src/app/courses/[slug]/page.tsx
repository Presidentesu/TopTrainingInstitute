import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  Clock,
  Globe,
  Calendar,
  CheckCircle2,
  BookOpen,
  ArrowRight,
  Sparkles,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import { getCourseBySlug, getPublishedCourses } from "@/lib/firebase/firestore";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CourseCard } from "@/components/courses/CourseCard";

interface CourseDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: CourseDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = await getCourseBySlug(slug);

  if (!course) {
    return {
      title: "Course Not Found | Top Training Institute",
    };
  }

  return {
    title: `${course.title} | Top Training Institute`,
    description: course.shortDescription,
    openGraph: {
      title: `${course.title} | Top Training Institute`,
      description: course.shortDescription,
      images: [
        {
          url: course.imageUrl,
          alt: course.title,
        },
      ],
    },
  };
}

export const revalidate = 60;

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const { slug } = await params;
  const course = await getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  // Fetch all courses to calculate related courses
  const allCourses = await getPublishedCourses();
  const relatedCourses = allCourses
    .filter(
      (c) =>
        c.slug !== course.slug &&
        (c.categorySlug === course.categorySlug || c.category === course.category)
    )
    .slice(0, 3);

  const fallbackRelated =
    relatedCourses.length > 0
      ? relatedCourses
      : allCourses.filter((c) => c.slug !== course.slug).slice(0, 3);

  const levelVariant =
    (course.level as string) === "Beginner"
      ? "blue"
      : (course.level as string) === "Intermediate"
      ? "gold"
      : (course.level as string) === "Advanced"
      ? "purple"
      : "blue";

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 pb-24">
      {/* Top Breadcrumb & Hero Header */}
      <section className="bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white pt-10 pb-16 border-b border-blue-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6 flex-wrap">
            <Link href="/" className="hover:text-amber-400 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <Link href="/courses" className="hover:text-amber-400 transition-colors">
              Courses
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <Link
              href={`/courses?category=${course.categorySlug}`}
              className="hover:text-amber-400 transition-colors"
            >
              {course.category}
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-slate-300 font-medium truncate max-w-xs sm:max-w-md">
              {course.title}
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <Badge variant="blue" size="md" className="bg-blue-600/90 text-white border-blue-400 font-semibold">
                  {course.category}
                </Badge>
                <Badge variant={levelVariant} size="md" className="bg-slate-800 text-slate-200 border-slate-700">
                  {course.level}
                </Badge>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                {course.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
                {course.shortDescription}
              </p>
            </div>

            {/* Quick Apply Card in Hero */}
            <div className="lg:col-span-4">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15 text-white space-y-4">
                <div className="flex items-baseline justify-between border-b border-white/10 pb-4">
                  <span className="text-xs uppercase tracking-wider text-slate-300 font-bold">
                    Admissions
                  </span>
                  <span className="text-sm font-bold text-amber-400">
                    Open for Enrollment
                  </span>
                </div>

                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-blue-400" /> Duration:
                    </span>
                    <span className="font-semibold text-white">{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5 text-blue-400" /> Mode:
                    </span>
                    <span className="font-semibold text-white">{course.mode.join(", ")}</span>
                  </div>
                  {course.schedule && (
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-blue-400" /> Schedule:
                      </span>
                      <span className="font-semibold text-white text-right">{course.schedule}</span>
                    </div>
                  )}
                </div>

                <Button
                  href={`/contact?course=${encodeURIComponent(course.title)}`}
                  variant="gold"
                  size="lg"
                  className="w-full"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Enroll / Inquire Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Body Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left / Main Column */}
          <div className="lg:col-span-8 space-y-8">
            {/* Course Featured Banner Image */}
            <div className="relative aspect-16/9 rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-slate-100">
              <Image
                src={course.imageUrl}
                alt={course.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover"
              />
            </div>

            {/* Overview Section */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-blue-600" />
                <span>Course Overview</span>
              </h2>
              <p className="text-base text-slate-600 leading-relaxed whitespace-pre-line">
                {course.description}
              </p>
            </div>

            {/* What You Will Learn */}
            {course.learningOutcomes && course.learningOutcomes.length > 0 && (
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-5">
                <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-amber-500" />
                  <span>What You Will Learn</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {course.learningOutcomes.map((outcome, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-blue-50/50 border border-blue-100/80 text-sm text-slate-800"
                    >
                      <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Curriculum Modules */}
            {course.modules && course.modules.length > 0 && (
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    Curriculum & Modules
                  </h2>
                  <p className="text-sm text-slate-500 mt-1">
                    Structured syllabus broken down into step-by-step practical units.
                  </p>
                </div>

                <div className="space-y-3">
                  {course.modules.map((moduleItem, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/60 hover:bg-white hover:border-blue-300 transition-colors flex items-start gap-4"
                    >
                      <span className="w-7 h-7 rounded-lg bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <p className="text-sm font-semibold text-slate-800">
                        {moduleItem}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Course Requirements / Prerequisites */}
            {course.requirements && course.requirements.length > 0 && (
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-4">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-blue-600" />
                  <span>Requirements & Prerequisites</span>
                </h2>
                <ul className="space-y-2 text-sm text-slate-600">
                  {course.requirements.map((req, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Sticky Card for Desktop */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs space-y-6 sticky top-28">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                Course Summary
              </h3>

              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                    Category
                  </span>
                  <p className="font-medium text-slate-800 mt-0.5">{course.category}</p>
                </div>

                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                    Skill Level
                  </span>
                  <p className="font-medium text-slate-800 mt-0.5">{course.level}</p>
                </div>

                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                    Estimated Duration
                  </span>
                  <p className="font-medium text-slate-800 mt-0.5">{course.duration}</p>
                </div>

                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                    Available Modes
                  </span>
                  <p className="font-medium text-slate-800 mt-0.5">
                    {course.mode.join(", ")}
                  </p>
                </div>

                {course.schedule && (
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      Schedule
                    </span>
                    <p className="font-medium text-slate-800 mt-0.5">
                      {course.schedule}
                    </p>
                  </div>
                )}

                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                    Admissions
                  </span>
                  <p className="font-bold text-sm text-emerald-600 mt-0.5">
                    Open for Registration
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  href={`/contact?course=${encodeURIComponent(course.title)}`}
                  variant="gold"
                  size="lg"
                  className="w-full"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Inquire / Apply
                </Button>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-500 leading-relaxed">
                Have questions about schedule flexibility or custom corporate training? Reach out to our admissions advisors directly.
              </div>
            </div>
          </div>
        </div>

        {/* Related Courses Section */}
        {fallbackRelated.length > 0 && (
          <div className="mt-20 pt-12 border-t border-slate-200">
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Continue Exploring
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">
                Related Training Programs
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {fallbackRelated.map((relCourse) => (
                <CourseCard key={relCourse.id || relCourse.slug} course={relCourse} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
