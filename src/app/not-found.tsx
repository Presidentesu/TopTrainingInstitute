import React from "react";
import { GraduationCap, Home, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mx-auto shadow-xs">
          <GraduationCap className="w-8 h-8 text-amber-500" />
        </div>

        <div className="space-y-2">
          <p className="text-sm font-bold text-amber-600 uppercase tracking-widest">
            Error 404
          </p>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900">
            Page Not Found
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            The page you are looking for might have been moved, renamed, or is temporarily unavailable. Let us help you find what you need.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Button
            href="/"
            variant="primary"
            size="md"
            icon={<Home className="w-4 h-4" />}
            className="w-full sm:w-auto"
          >
            Go to Homepage
          </Button>
          <Button
            href="/courses"
            variant="secondary"
            size="md"
            icon={<BookOpen className="w-4 h-4" />}
            className="w-full sm:w-auto"
          >
            Browse Courses
          </Button>
        </div>
      </div>
    </div>
  );
}
