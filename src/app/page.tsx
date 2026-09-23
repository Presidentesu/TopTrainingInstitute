import React from "react";
import { Hero } from "@/components/home/Hero";
import { CategoryCard } from "@/components/home/CategoryCard";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { FeaturedCourses } from "@/components/home/FeaturedCourses";
import { LearningAreas } from "@/components/home/LearningAreas";
import { GallerySection } from "@/components/home/GallerySection";
import { CTASection } from "@/components/home/CTASection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { COURSE_CATEGORIES } from "@/data/categories";
import { getFeaturedCourses } from "@/lib/firebase/firestore";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function HomePage() {
  const featuredCourses = await getFeaturedCourses();

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Course Categories Section */}
      <section className="py-20 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Course Catalog"
            title="Explore Our Course Categories"
            description="From language fluency and software engineering to creative media and engineering CAD, discover practical training tailored to your ambitions."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {COURSE_CATEGORIES.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why Choose Top Training Institute */}
      <WhyChooseUs />

      {/* 4. Featured Courses Section */}
      <FeaturedCourses courses={featuredCourses} />

      {/* 5. Learning Areas Section */}
      <LearningAreas />

      {/* 6. Gallery Section */}
      <GallerySection />

      {/* 7. Call-to-Action Section */}
      <CTASection />
    </div>
  );
}
