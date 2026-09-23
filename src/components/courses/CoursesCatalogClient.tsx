"use client";

import React, { useState, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Course, FilterState, StudyMode } from "@/types";
import { CourseFilters } from "./CourseFilters";
import { CourseGrid } from "./CourseGrid";
import { EmptyState } from "@/components/ui/EmptyState";

interface CoursesCatalogClientProps {
  initialCourses: Course[];
}

export function CoursesCatalogClient({ initialCourses }: CoursesCatalogClientProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const urlCategory = searchParams.get("category") || "";
  const urlSearch = searchParams.get("search") || "";
  const urlLevel = searchParams.get("level") || "";
  const urlMode = searchParams.get("mode") || "";

  // Initialize filters from search parameters if present
  const [filters, setFilters] = useState<FilterState>({
    search: urlSearch,
    category: urlCategory,
    level: urlLevel,
    mode: urlMode,
  });

  const [prevParams, setPrevParams] = useState({ urlCategory, urlSearch, urlLevel, urlMode });
  if (
    prevParams.urlCategory !== urlCategory ||
    prevParams.urlSearch !== urlSearch ||
    prevParams.urlLevel !== urlLevel ||
    prevParams.urlMode !== urlMode
  ) {
    setPrevParams({ urlCategory, urlSearch, urlLevel, urlMode });
    setFilters({
      category: urlCategory,
      search: urlSearch,
      level: urlLevel,
      mode: urlMode,
    });
  }

  // Update URL query parameters on filter changes without full reload
  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
    const params = new URLSearchParams();
    if (newFilters.search) params.set("search", newFilters.search);
    if (newFilters.category) params.set("category", newFilters.category);
    if (newFilters.level && newFilters.level !== "All Levels") params.set("level", newFilters.level);
    if (newFilters.mode && newFilters.mode !== "All Modes") params.set("mode", newFilters.mode);

    const queryString = params.toString();
    router.replace(queryString ? `/courses?${queryString}` : "/courses", {
      scroll: false,
    });
  };

  const handleReset = () => {
    const resetState: FilterState = {
      search: "",
      category: "",
      level: "",
      mode: "",
    };
    setFilters(resetState);
    router.replace("/courses", { scroll: false });
  };

  // Filter computation
  const filteredCourses = useMemo(() => {
    return initialCourses.filter((course) => {
      // Search filter (title, description, category, modules)
      if (filters.search) {
        const query = filters.search.toLowerCase();
        const matchesTitle = course.title.toLowerCase().includes(query);
        const matchesDesc = course.shortDescription.toLowerCase().includes(query);
        const matchesCat = course.category.toLowerCase().includes(query);
        const matchesModules = course.modules.some((m) =>
          m.toLowerCase().includes(query)
        );
        if (!matchesTitle && !matchesDesc && !matchesCat && !matchesModules) {
          return false;
        }
      }

      // Category filter (by slug or name)
      if (filters.category) {
        const target = filters.category.toLowerCase();
        const matchesCategory =
          course.categorySlug.toLowerCase() === target ||
          course.category.toLowerCase() === target;
        if (!matchesCategory) return false;
      }

      // Level filter
      if (filters.level && filters.level !== "All Levels" && filters.level !== "All Level") {
        if (
          (course.level as string) !== filters.level &&
          (course.level as string) !== "All Levels" &&
          (course.level as string) !== "All Level"
        ) {
          return false;
        }
      }

      // Mode filter
      if (filters.mode && filters.mode !== "All Modes") {
        if (!course.mode.includes(filters.mode as StudyMode)) {
          return false;
        }
      }

      return true;
    });
  }, [initialCourses, filters]);

  return (
    <div className="space-y-8">
      {/* Interactive Filters Panel */}
      <CourseFilters
        filters={filters}
        onFilterChange={handleFilterChange}
        onReset={handleReset}
        totalResults={filteredCourses.length}
      />

      {/* Results Grid or Empty State */}
      {filteredCourses.length > 0 ? (
        <CourseGrid courses={filteredCourses} />
      ) : (
        <EmptyState
          title="No courses match your criteria"
          description="We couldn't find any courses matching your specific search keywords and filters. Try clearing or expanding your selection."
          actionText="Reset All Filters"
          onAction={handleReset}
        />
      )}
    </div>
  );
}
