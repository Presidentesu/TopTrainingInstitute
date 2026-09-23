import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-950 to-slate-900 py-20 text-white">
      {/* Decorative Blur Circles */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-semibold">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Take the Next Step in Your Career</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
          Ready to Build Your Skills?
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Choose the course that matches your goals and start developing practical skills for your future with industry-experienced mentors.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Button
            href="/courses"
            variant="gold"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
            className="w-full sm:w-auto"
          >
            Browse Courses
          </Button>
          <Button
            href="/contact"
            variant="outline-white"
            size="lg"
            className="w-full sm:w-auto"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
