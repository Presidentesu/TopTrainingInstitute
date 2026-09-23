"use client";

import React from "react";
import { Search, X } from "lucide-react";
import { COURSE_CATEGORIES } from "@/data/categories";
import { FilterState } from "@/types";
import { cn } from "@/lib/utils";

interface CourseFiltersProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  onReset: () => void;
  totalResults: number;
}

export function CourseFilters({
  filters,
  onFilterChange,
  onReset,
  totalResults,
}: CourseFiltersProps) {
  const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];
  const studyModes = ["All Modes", "In Person", "Online", "Hybrid"];

  const hasActiveFilters =
    Boolean(filters.search) ||
    Boolean(filters.category) ||
    (filters.level !== "" && filters.level !== "All Levels") ||
    (filters.mode !== "" && filters.mode !== "All Modes");

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs space-y-6">
      {/* Top Bar: Search + Quick Stats */}
      <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={filters.search}
            onChange={(e) =>
              onFilterChange({ ...filters, search: e.target.value })
            }
            placeholder="Search by course name, topic, or keyword..."
            className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          />
          {filters.search && (
            <button
              type="button"
              onClick={() => onFilterChange({ ...filters, search: "" })}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Filter Indicators and Reset */}
        <div className="flex items-center justify-between sm:justify-end gap-3 text-sm">
          <span className="text-slate-600 font-medium text-xs sm:text-sm">
            Showing <strong className="text-slate-900">{totalResults}</strong> {totalResults === 1 ? "course" : "courses"}
          </span>

          {hasActiveFilters && (
            <button
              onClick={onReset}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 bg-amber-50 hover:bg-amber-100 border border-amber-200 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-3 h-3" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>
      </div>

      {/* Category Pills Slider/List */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
          Category
        </label>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => onFilterChange({ ...filters, category: "" })}
            className={cn(
              "px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer",
              !filters.category
                ? "bg-blue-600 text-white shadow-xs font-semibold"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            )}
          >
            All Categories
          </button>
          {COURSE_CATEGORIES.map((cat) => {
            const isSelected =
              filters.category.toLowerCase() === cat.slug.toLowerCase() ||
              filters.category.toLowerCase() === cat.name.toLowerCase();

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() =>
                  onFilterChange({
                    ...filters,
                    category: isSelected ? "" : cat.slug,
                  })
                }
                className={cn(
                  "px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer",
                  isSelected
                    ? "bg-blue-600 text-white shadow-xs font-semibold"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                )}
              >
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Level and Mode Dropdowns/Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100">
        {/* Level Filter */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
            Course Level
          </label>
          <select
            value={filters.level}
            onChange={(e) =>
              onFilterChange({ ...filters, level: e.target.value })
            }
            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs sm:text-sm text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {levels.map((lvl) => (
              <option key={lvl} value={lvl === "All Levels" ? "" : lvl}>
                {lvl}
              </option>
            ))}
          </select>
        </div>

        {/* Study Mode Filter */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
            Study Mode
          </label>
          <select
            value={filters.mode}
            onChange={(e) =>
              onFilterChange({ ...filters, mode: e.target.value })
            }
            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs sm:text-sm text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {studyModes.map((m) => (
              <option key={m} value={m === "All Modes" ? "" : m}>
                {m}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
