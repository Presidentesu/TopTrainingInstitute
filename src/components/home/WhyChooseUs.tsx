import React from "react";
import {
  Wrench,
  FolderGit2,
  Users,
  Briefcase,
  GraduationCap,
  CalendarCheck,
  Zap,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const REASONS = [
  {
    icon: Wrench,
    title: "Practical Learning",
    description:
      "We prioritize direct, actionable knowledge that you can immediately apply to real-world tasks and workplace challenges.",
  },
  {
    icon: FolderGit2,
    title: "Hands-on Projects",
    description:
      "Every module integrates realistic assignments and capstone projects so you graduate with a tangible portfolio of work.",
  },
  {
    icon: Users,
    title: "Beginner-Friendly Programs",
    description:
      "Structured learning progressions guide you step-by-step from core fundamentals to confident mastery without assumptions.",
  },
  {
    icon: Briefcase,
    title: "Career-Focused Skills",
    description:
      "Our curricula reflect contemporary industry demands across engineering, creative production, software, and administration.",
  },
  {
    icon: GraduationCap,
    title: "Experienced Instructors",
    description:
      "Learn under the guidance of active practitioners who bring practical industry context, mentorship, and feedback to the classroom.",
  },
  {
    icon: CalendarCheck,
    title: "Flexible Learning Options",
    description:
      "Choose from in-person, online, or hybrid schedules tailored to accommodate students, busy professionals, and career switchers.",
  },
  {
    icon: Zap,
    title: "Modern Training Approach",
    description:
      "Up-to-date tools, software suites, and collaborative environments designed to prepare you for current technological workflows.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-24 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Why Choose Us"
          badgeVariant="gold"
          title="Designed for Real-World Competence"
          description="At Top Training Institute, our educational philosophy centers on practical competence, guided mentorship, and relevant technical capabilities."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REASONS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/70 hover:bg-blue-50/40 hover:border-blue-200 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-5 group-hover:bg-blue-700 transition-colors shadow-xs">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
