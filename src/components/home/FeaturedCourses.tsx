import React from "react";
import { ArrowRight } from "lucide-react";
import { Course } from "@/types";
import { CourseCard } from "@/components/courses/CourseCard";
import { Button } from "@/components/ui/Button";

interface FeaturedCoursesProps {
  courses: Course[];
}

export function FeaturedCourses({ courses }: FeaturedCoursesProps) {
  return (
    <section className="py-20 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-100 text-blue-900 border border-blue-200 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              Featured Programs
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Popular Career Pathways
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl">
              Explore in-demand courses curated for high practical impact across software development, creative media, engineering, and professional skills.
            </p>
          </div>

          <Button
            href="/courses"
            variant="outline"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
            className="self-start md:self-auto shrink-0"
          >
            View All Courses
          </Button>
        </div>

        {courses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.slice(0, 6).map((course) => (
              <CourseCard key={course.id || course.slug} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-slate-500">
            No featured courses currently available.
          </div>
        )}
      </div>
    </section>
  );
}
