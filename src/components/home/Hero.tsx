import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-[640px] lg:min-h-[720px] flex items-center justify-center overflow-hidden bg-slate-950 text-white py-24 lg:py-36 border-b border-blue-900/40">
      {/* Full-bleed Background Image: Authentic Top Training Institute Graduates */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/top-training-graduates.jpg"
          alt="Top Training Institute Graduates"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_25%]"
        />
        {/* Dark Overlay with 0.5 opacity */}
        <div className="absolute inset-0 bg-slate-950/80" />
      </div>

      {/* Centered Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Institute Kicker Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/70 border border-blue-400/30 text-blue-200 text-xs sm:text-sm font-medium backdrop-blur-md shadow-lg mb-6">
          <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
          <span>Learn Skills. Build Your Career. Create Your Future.</span>
        </div>

        {/* Main Centered Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-white leading-[1.15] max-w-4xl drop-shadow-md">
          Build Skills for the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-300 to-amber-300">
            Future
          </span>
        </h1>

        {/* Subtitle Paragraph */}
        <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed font-normal drop-shadow-sm">
          Join Top Training Institute to boost your career with practical, expert-led training in languages, computers, software development, creative media, business, and engineering software.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Button
            href="/courses"
            variant="gold"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
            className="w-full sm:w-auto px-8 py-3.5 text-base shadow-xl shadow-amber-500/20"
          >
            Explore Courses
          </Button>
          <Button
            href="/contact"
            variant="outline-white"
            size="lg"
            icon={<PhoneCall className="w-4 h-4" />}
            className="w-full sm:w-auto px-8 py-3.5 text-base backdrop-blur-md bg-white/10 hover:bg-white/20 border-white/30"
          >
            Contact & Enroll
          </Button>
        </div>

        {/* Bottom Key Pillars & Highlights */}
        <div className="mt-12 pt-8 border-t border-white/15 w-full max-w-3xl grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="flex flex-col items-center">
            <span className="text-amber-400 font-extrabold text-xl sm:text-2xl">10+</span>
            <span className="text-xs text-slate-300 mt-0.5">Core Disciplines</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-sky-400 font-extrabold text-xl sm:text-2xl">100%</span>
            <span className="text-xs text-slate-300 mt-0.5">Practical & Hands-on</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-amber-400 font-extrabold text-xl sm:text-2xl">All Levels</span>
            <span className="text-xs text-slate-300 mt-0.5">Beginner to Advanced</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-sky-400 font-extrabold text-xl sm:text-2xl">Flexible</span>
            <span className="text-xs text-slate-300 mt-0.5">Study Options</span>
          </div>
        </div>
      </div>
    </section>
  );
}
