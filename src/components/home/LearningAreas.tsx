import React from "react";
import Link from "next/link";
import {
  Globe2,
  Cpu,
  Code,
  Sparkles,
  BarChart3,
  Layers,
  ArrowRight,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const AREAS = [
  {
    title: "Languages",
    description:
      "Spoken and written communication training across modern languages to advance international careers and workplace confidence.",
    icon: Globe2,
    color: "from-blue-600 to-indigo-700",
    link: "/courses?category=languages",
    highlights: ["English Communication", "Business Fluency", "Multilingual Paths"],
  },
  {
    title: "Technology",
    description:
      "Foundational computer skills, productivity software, internet systems, and digital workplace essentials.",
    icon: Cpu,
    color: "from-sky-600 to-blue-700",
    link: "/courses?category=basic-computer-skills",
    highlights: ["Computer Basics", "MS Office Suite", "Cloud Productivity"],
  },
  {
    title: "Programming",
    description:
      "Software development from core algorithms to full-stack web platforms and backend application architectures.",
    icon: Code,
    color: "from-indigo-600 to-purple-700",
    link: "/courses?category=full-stack-web-development",
    highlights: ["Full-Stack Web Dev", "Python & Scripts", "Modern TypeScript"],
  },
  {
    title: "Creative Media",
    description:
      "Visual arts, brand identity creation, motion graphics, video post-production, and studio cinematography.",
    icon: Sparkles,
    color: "from-purple-600 to-pink-700",
    link: "/courses?category=graphics-design",
    highlights: ["Graphic Design", "Video Editing", "Studio Photography"],
  },
  {
    title: "Business",
    description:
      "Modern digital marketing campaigns, performance analytics, computerized accounting, and financial management tools.",
    icon: BarChart3,
    color: "from-amber-600 to-orange-700",
    link: "/courses?category=digital-marketing",
    highlights: ["Digital Marketing", "QuickBooks", "Advanced Financial Excel"],
  },
  {
    title: "Engineering Software",
    description:
      "Computer-aided drafting, 3D Building Information Modeling (BIM), civil infrastructure, and structural design systems.",
    icon: Layers,
    color: "from-blue-700 to-slate-800",
    link: "/courses?category=engineering-software",
    highlights: ["AutoCAD 2D/3D", "Revit BIM", "ETABS & Civil 3D"],
  },
];

export function LearningAreas() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Multidisciplinary Scope"
          title="Major Learning Areas"
          description="Explore our six core disciplines, each designed to develop marketable, practical capabilities for today's dynamic economy."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AREAS.map((area, idx) => {
            const Icon = area.icon;
            return (
              <div
                key={idx}
                className="relative rounded-2xl border border-slate-200/80 p-7 bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group overflow-hidden"
              >
                {/* Subtle Accent Glow on Hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-2xl group-hover:bg-blue-100/60 transition-colors pointer-events-none" />

                <div>
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center text-white mb-5 shadow-sm group-hover:scale-105 transition-transform`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {area.title}
                  </h3>

                  <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                    {area.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <ul className="space-y-1.5">
                      {area.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="text-xs text-slate-600 flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href={area.link}
                    className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 group-hover:text-blue-700"
                  >
                    <span>Browse {area.title} Programs</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
