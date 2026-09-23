import React from "react";
import { Course } from "@/types";
import { CourseCard } from "./CourseCard";

interface CourseGridProps {
  courses: Course[];
}

export function CourseGrid({ courses }: CourseGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {courses.map((course) => (
        <CourseCard key={course.id || course.slug} course={course} />
      ))}
    </div>
  );
}
