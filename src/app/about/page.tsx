import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  Target,
  Eye,
  CheckCircle2,
  GraduationCap,
  ArrowRight,
  BookOpen,
  Phone,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { COURSE_CATEGORIES } from "@/data/categories";

export const metadata: Metadata = {
  title: "About Us | Multidisciplinary Career Education",
  description:
    "Learn about Top Training Institute, our multidisciplinary training philosophy, mission, vision, and project-based approach to career skills.",
};

export default function AboutPage() {
  const approaches = [
    {
      title: "Practical Learning",
      description:
        "Every concept is taught in the context of how it is actually applied in industry workflows and professional environments.",
    },
    {
      title: "Hands-on Exercises",
      description:
        "Students spend the majority of class time interacting directly with tools, writing code, designing layouts, or modeling drawings.",
    },
    {
      title: "Project-Based Learning",
      description:
        "Courses culminate in comprehensive, portfolio-ready projects that demonstrate real-world proficiency to prospective employers.",
    },
    {
      title: "Beginner-to-Advanced Pathways",
      description:
        "Structured step-by-step curricula ensure complete novices build solid foundations before progressing to advanced specializations.",
    },
    {
      title: "Continuous Skill Development",
      description:
        "We emphasize problem-solving, self-sufficiency, and analytical habits that enable lifelong adaptation as technology evolves.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <section className="bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white py-20 lg:py-24 border-b border-blue-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/80 border border-blue-700/60 text-blue-200 text-xs sm:text-sm font-medium">
            <GraduationCap className="w-4 h-4 text-amber-400" />
            <span>Empowering Practical Competence</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
            About <span className="text-amber-400">Top Training Institute</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Top Training Institute provides practical learning opportunities across technology, languages, creative skills, business applications, and engineering software.
          </p>
        </div>
      </section>

      {/* 2. Who We Are */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image Showcase */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 aspect-4/3">
                <Image
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80"
                  alt="Students collaborating at Top Training Institute"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                A Multidisciplinary Center for Applied Skills
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Top Training Institute was founded with a singular conviction: genuine career development happens when conceptual instruction is paired with hands-on practice.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Our multidisciplinary catalog brings together modern computing, software engineering, digital media arts, languages, computerized accounting, and engineering design. Whether you are entering the workforce, sharpening your workplace capabilities, or pivoting into an entirely new trade, our courses provide the structure and guidance you need.
              </p>
              <div className="pt-2 flex items-center gap-4 text-sm font-semibold text-slate-900">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-amber-500" />
                  Practical Curriculum
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-amber-500" />
                  Real Projects
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-amber-500" />
                  Flexible Paths
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200/80 shadow-xs hover:border-blue-300 transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Our Mission
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mt-2 mb-4">
                Practical Education for Useful Skills
              </h3>
              <p className="text-base text-slate-600 leading-relaxed">
                To provide accessible, practical, career-focused education that helps learners develop useful modern skills for immediate employment, entrepreneurial ventures, and lifelong progression.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200/80 shadow-xs hover:border-amber-300 transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                Our Vision
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mt-2 mb-4">
                A Trusted Center for Lifelong Learning
              </h3>
              <p className="text-base text-slate-600 leading-relaxed">
                To become a trusted center for practical skills development and lifelong learning, recognized for preparing adaptive, competent individuals equipped to succeed in an evolving technological landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Training Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Methodology"
            title="Our Training Approach"
            description="How we structure our classroom and lab environments to maximize your retention and real-world competence."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {approaches.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/70 hover:shadow-md transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-600 text-white font-bold text-sm flex items-center justify-center mb-4">
                  {index + 1}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Areas of Training */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Multidisciplinary Programs"
            title="Areas of Training"
            description="Explore our ten key categories spanning language fluency, digital skills, software engineering, and technical drafting."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {COURSE_CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                href={`/courses?category=${cat.slug}`}
                className="p-5 rounded-xl bg-white border border-slate-200/80 hover:border-blue-400 hover:shadow-md transition-all group flex flex-col justify-between text-center"
              >
                <div className="mx-auto w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3 group-hover:bg-amber-50 group-hover:text-amber-600 transition-colors">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {cat.name}
                </h4>
                <span className="text-[11px] text-slate-400 mt-2">
                  {cat.topics.length} topics
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Button
              href="/courses"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Explore Full Course Catalog
            </Button>
          </div>
        </div>
      </section>

      {/* 6. Addis Ababa Campuses */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Campuses (አድራሻችን)"
            title="Our Branches Across Addis Ababa"
            description="Visit any of our three accessible campuses in person or call our admissions desk."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-400 hover:shadow-md transition-all">
              <span className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm flex items-center justify-center mb-3">1</span>
              <h4 className="text-lg font-bold text-slate-900">Megenagna Branch (መገናኛ)</h4>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Metebaber Building, 2nd Floor, Office #14<br />
                <span className="text-slate-500 text-xs">መገናኛ መተባበር ህንፃ 2ኛ ፎቅ 14</span>
              </p>
              <a
                href="tel:0991929303"
                className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900"
              >
                <Phone className="w-4 h-4 text-amber-500" />
                <span>0991929303</span>
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-400 hover:shadow-md transition-all">
              <span className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm flex items-center justify-center mb-3">2</span>
              <h4 className="text-lg font-bold text-slate-900">Mexico Branch (ሜክሲኮ)</h4>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                KKare Building, 3rd Floor, Office #319<br />
                <span className="text-slate-500 text-xs">ሜክሲኮ ኬኬር ህንፃ 3ኛ ፎቅ 319</span>
              </p>
              <a
                href="tel:0991929304"
                className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900"
              >
                <Phone className="w-4 h-4 text-amber-500" />
                <span>0991929304</span>
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-400 hover:shadow-md transition-all">
              <span className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm flex items-center justify-center mb-3">3</span>
              <h4 className="text-lg font-bold text-slate-900">Jemo 1 Branch (ጀሞ 1)</h4>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Kaku Business Center, 1st Gate, 3rd Floor<br />
                <span className="text-slate-500 text-xs">ጀሞ 1 አንደኛ በር ካኩ ቢዝነስ ሴንተር 3ኛ ፎቅ</span>
              </p>
              <a
                href="tel:0991926707"
                className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900"
              >
                <Phone className="w-4 h-4 text-amber-500" />
                <span>0991926707</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
