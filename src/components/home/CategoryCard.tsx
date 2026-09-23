import React from "react";
import Link from "next/link";
import {
  Globe,
  Monitor,
  Code2,
  Terminal,
  Palette,
  Film,
  TrendingUp,
  Camera,
  Calculator,
  Cpu,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { CourseCategory } from "@/types";

interface CategoryCardProps {
  category: CourseCategory;
}

export function CategoryCard({ category }: CategoryCardProps) {
  // Dynamic icon mapper
  const renderIcon = () => {
    const iconClass = "w-6 h-6 text-blue-600 group-hover:text-amber-500 transition-colors";
    switch (category.iconName) {
      case "Globe":
        return <Globe className={iconClass} />;
      case "Monitor":
        return <Monitor className={iconClass} />;
      case "Code2":
        return <Code2 className={iconClass} />;
      case "Terminal":
        return <Terminal className={iconClass} />;
      case "Palette":
        return <Palette className={iconClass} />;
      case "Film":
        return <Film className={iconClass} />;
      case "TrendingUp":
        return <TrendingUp className={iconClass} />;
      case "Camera":
        return <Camera className={iconClass} />;
      case "Calculator":
        return <Calculator className={iconClass} />;
      case "Cpu":
        return <Cpu className={iconClass} />;
      default:
        return <BookOpen className={iconClass} />;
    }
  };

  return (
    <div className="group relative bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Top Icon and Badge */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-amber-50 border border-blue-100 group-hover:border-amber-200 flex items-center justify-center transition-colors">
            {renderIcon()}
          </div>
          <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider group-hover:text-blue-600">
            Field of Study
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
          <Link href={`/courses?category=${category.slug}`}>
            {category.name}
          </Link>
        </h3>

        {/* Description */}
        <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
          {category.description}
        </p>

        {/* Topics Checklist */}
        <div className="mt-4 pt-4 border-t border-slate-100">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            Key Topics & Tools:
          </p>
          <div className="flex flex-wrap gap-1.5">
            {category.topics.slice(0, 4).map((topic, i) => (
              <span
                key={i}
                className="inline-block text-[11px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md"
              >
                {topic}
              </span>
            ))}
            {category.topics.length > 4 && (
              <span className="inline-block text-[11px] font-medium text-blue-600 px-1 py-0.5">
                +{category.topics.length - 4} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Explore Button */}
      <div className="mt-6 pt-4 border-t border-slate-100">
        <Link
          href={`/courses?category=${category.slug}`}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-600 group-hover:text-blue-700 transition-colors"
        >
          <span>Explore Courses</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
