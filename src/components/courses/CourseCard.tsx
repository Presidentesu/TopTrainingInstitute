import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, Globe, ArrowRight } from "lucide-react";
import { Course } from "@/types";
import { Badge } from "@/components/ui/Badge";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  // Map level to badge variant
  const levelVariant =
    (course.level as string) === "Beginner"
      ? "blue"
      : (course.level as string) === "Intermediate"
        ? "gold"
        : (course.level as string) === "Advanced"
          ? "purple"
          : "blue";

  const contactUrl = `/contact?course=${encodeURIComponent(course.title)}`;

  return (
    <Link
      href={contactUrl}
      className="group flex flex-col bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-blue-400 transition-all duration-300 overflow-hidden cursor-pointer"
    >
      {/* Course Image Header */}
      <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100">
        <Image
          src={course.imageUrl}
          alt={course.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/10" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
          <Badge variant="blue" size="md" className="bg-white/95 text-blue-800 backdrop-blur-xs font-semibold shadow-xs">
            {course.category}
          </Badge>
          <Badge variant={levelVariant} size="md" className="bg-slate-900/80 text-white border-white/20 backdrop-blur-xs">
            All Level
          </Badge>
        </div>
      </div>

      {/* Card Body */}
      <div className="flex-1 p-5 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
            {course.title}
          </h3>
          <p className="mt-2.5 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
            {course.shortDescription}
          </p>
        </div>

        {/* Metadata & Direct Contact / Enroll CTA */}
        <div className="mt-6 pt-4 border-t border-slate-100 space-y-4">
          {/* Key Attributes */}
          <div className="flex items-center justify-between text-xs text-slate-500">
            <div className="flex items-center gap-1.5" title="Duration">
              <Clock className="w-3.5 h-3.5 text-blue-600" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-1.5" title="Study Mode">
              <Globe className="w-3.5 h-3.5 text-amber-500" />
              <span>{course.mode.join(", ")}</span>
            </div>
          </div>

          {/* Button Link to Contact Page */}
          <div className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-blue-50 text-blue-700 font-semibold text-xs transition-all duration-200 group-hover:bg-blue-600 group-hover:text-white">
            <span>Inquire & Enroll</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}
