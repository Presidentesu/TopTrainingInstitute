"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn, Award, Sparkles, Camera, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

type GalleryCategory = "All" | "Graduation" | "Classroom" | "Practical";

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: "Graduation" | "Classroom" | "Practical";
  description: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    src: "/images/gallery/IMG_6205.PNG",
    alt: "Top Training Institute Class of 2025 Video & Creative Media Graduates celebrating together",
    title: "Class of 2025 Media & Video Graduates",
    category: "Graduation",
    description: "Celebrating milestone achievements, graduation sashes, and career readiness with instructors.",
  },
  {
    id: "g2",
    src: "/images/gallery/1R3A7000.JPG",
    alt: "Top Training Institute instructor handing diploma certificate to Fullstack Development graduate",
    title: "Fullstack Development Graduation",
    category: "Graduation",
    description: "Director congratulating and presenting the official diploma to a certified software developer.",
  },
  {
    id: "g3",
    src: "/images/gallery/IMG_7450.PNG",
    alt: "Graduating student proudly holding her Top Training Institute Certificate of Completion with instructors",
    title: "Certificate of Completion Award",
    category: "Graduation",
    description: "Honoring academic excellence and successful practical project defense with trainers.",
  },
  {
    id: "g4",
    src: "/images/gallery/photo_2025-07-08_21-05-33.jpg",
    alt: "Students operating professional DSLR camera on a tripod during outdoor practical training session",
    title: "Hands-on Night Cinematography Lab",
    category: "Practical",
    description: "Students mastering camera exposures, low-light apertures, and tripod stability in the field.",
  },
  {
    id: "g5",
    src: "/images/gallery/photo_2025-08-15_08-49-33.jpg",
    alt: "Top Training Institute trainees in branded safety vests smiling during practical fieldwork",
    title: "Field Work & Applied Practical Skills",
    category: "Practical",
    description: "Trainees equipped with branded safety vests during immersive real-world technical fieldwork.",
  },
  {
    id: "g6",
    src: "/images/gallery/photo_2025-05-26_11-44-39.jpg",
    alt: "Students taking notes and participating in an interactive lecture in our modern training classroom",
    title: "Modern Interactive Classroom",
    category: "Classroom",
    description: "Focused learning atmosphere with instructor guidance, theoretical foundations, and active discussions.",
  },
  {
    id: "g7",
    src: "/images/gallery/photo_2025-05-26_11-44-41.jpg",
    alt: "Trainees engaged in classroom training session at Top Training Institute",
    title: "In-Depth Study & Evaluations",
    category: "Classroom",
    description: "Rigorous curriculum and regular practical assessments ensuring every student masters their craft.",
  },
  {
    id: "g8",
    src: "/images/gallery/IMG_6201.PNG",
    alt: "Graduate holding professional Canon camera with speedlite flash alongside mentors",
    title: "Professional Camera & Lighting",
    category: "Graduation",
    description: "Graduate showcasing hands-on mastery with industry-grade DSLR and studio lighting equipment.",
  },
  {
    id: "g9",
    src: "/images/gallery/IMG_6202.PNG",
    alt: "Graduate in cap and gown holding camera equipment with smiling trainers",
    title: "Cinematography & Video Editing Honors",
    category: "Graduation",
    description: "Mentors and successful trainee celebrating creative storytelling and technical editing milestones.",
  },
  {
    id: "g10",
    src: "/images/gallery/IMG_6203.PNG",
    alt: "Certified media production graduate in sash and graduation cap with course instructors",
    title: "Media Production Certification",
    category: "Graduation",
    description: "Proud graduate honored for completing comprehensive video, audio, and visual production training.",
  },
  {
    id: "g11",
    src: "/images/gallery/photo_2025-11-11_12-33-07.jpg",
    alt: "Top Training Institute instructional series covering Graphic Design, Web Development, and Camera",
    title: "Multimedia Digital Curriculum",
    category: "Classroom",
    description: "Structured video lessons and digital guides spanning graphic design, frontend/backend, and camera work.",
  },
];

const CATEGORIES: { label: string; value: GalleryCategory; icon: React.ElementType }[] = [
  { label: "All Moments", value: "All", icon: Sparkles },
  { label: "Graduations & Awards", value: "Graduation", icon: Award },
  { label: "Classrooms & Learning", value: "Classroom", icon: BookOpen },
  { label: "Practical & Fieldwork", value: "Practical", icon: Camera },
];

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const showNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % filteredItems.length);
  }, [selectedIndex, filteredItems.length]);

  const showPrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + filteredItems.length) % filteredItems.length);
  }, [selectedIndex, filteredItems.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, showNext, showPrev]);

  return (
    <section className="py-20 lg:py-24 bg-[#edf6fb] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <p className="text-sky-600 font-semibold text-sm sm:text-base tracking-wide uppercase">
            Life at Top Training Institute
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Explore Our Gallery
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            Take a glimpse into our real graduation ceremonies, vibrant classrooms, and hands-on practical training sessions.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => {
                  setActiveCategory(cat.value);
                  setSelectedIndex(null);
                }}
                className={cn(
                  "inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-xs",
                  isActive
                    ? "bg-sky-600 text-white shadow-md shadow-sky-600/20 scale-105"
                    : "bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200"
                )}
              >
                <Icon className={cn("w-3.5 h-3.5", isActive ? "text-white" : "text-sky-600")} />
                <span>{cat.label}</span>
                <span
                  className={cn(
                    "text-[10px] px-1.5 py-0.2 rounded-full",
                    isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                  )}
                >
                  {cat.value === "All"
                    ? GALLERY_ITEMS.length
                    : GALLERY_ITEMS.filter((i) => i.category === cat.value).length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className={cn(
                "group relative aspect-4/3 overflow-hidden rounded-2xl lg:rounded-3xl cursor-pointer",
                "bg-slate-900 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80"
              )}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-500"
              />

              {/* Category pill on card */}
              <div className="absolute top-3.5 left-3.5 z-10">
                <span className="inline-block px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider rounded-full bg-slate-950/70 text-white backdrop-blur-md border border-white/20 shadow-xs">
                  {item.category}
                </span>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <div className="flex items-end justify-between gap-3">
                  <div>
                    <h3 className="text-base font-bold text-white drop-shadow-sm leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-200 line-clamp-2 mt-1">
                      {item.description}
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/25 backdrop-blur-xs flex items-center justify-center text-white shrink-0">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && filteredItems[selectedIndex] && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-60 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close gallery preview"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="absolute left-3 sm:left-6 z-60 p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-3 sm:right-6 z-60 p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Content */}
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[62vh] sm:h-[72vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-950 flex items-center justify-center">
              <Image
                src={filteredItems[selectedIndex].src}
                alt={filteredItems[selectedIndex].alt}
                fill
                priority
                sizes="(max-width: 1200px) 95vw, 1200px"
                className="object-contain"
              />
            </div>

            {/* Caption */}
            <div className="mt-4 text-center text-white max-w-2xl px-4">
              <div className="inline-block mb-1.5">
                <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30">
                  {filteredItems[selectedIndex].category}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold">
                {filteredItems[selectedIndex].title}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-300">
                {filteredItems[selectedIndex].description}
              </p>
              <p className="mt-2 text-xs text-sky-400 font-medium">
                {selectedIndex + 1} of {filteredItems.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

