import React from "react";
import { Metadata } from "next";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { MapPlaceholder } from "@/components/contact/MapPlaceholder";

export const metadata: Metadata = {
  title: "Contact & Admissions | Top Training Institute",
  description:
    "Get in touch with Top Training Institute in Addis Ababa. Visit our Megenagna, Mexico, or Jemo 1 branches, or call our direct admissions hotlines.",
};

interface ContactPageProps {
  searchParams: Promise<{ course?: string }>;
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { course } = await searchParams;

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white py-16 lg:py-20 border-b border-blue-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/80 border border-blue-700/60 text-blue-200 text-xs font-semibold backdrop-blur-xs">
            <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
            <span>Admissions & Information Desk</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Connect with Our Team
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Have questions about course curricula, branch schedules, or enrollment? Reach out to our admissions advisors or visit our campuses across Addis Ababa.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Branch Locations & Contacts */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-100 text-blue-900 border border-blue-200 mb-2">
                  <MapPin className="w-3.5 h-3.5 text-amber-500" />
                  Addis Ababa Campuses
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  Our Branch Locations (አድራሻችን)
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Visit any of our 3 branch offices or call our direct admissions counselors.
                </p>
              </div>

              {/* 3 Branches List */}
              <div className="space-y-4">
                {/* Branch 1: Megenagna */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2 hover:border-blue-300 transition-colors">
                  <div className="flex items-center justify-between">
                    <h4 className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">1</span>
                      <span>Megenagna Branch (መገናኛ)</span>
                    </h4>
                    <span className="text-[11px] font-semibold text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full">Office #14</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-8">
                    Metebaber Building, 2nd Floor, Office #14<br />
                    <span className="text-slate-500 font-normal">መገናኛ መተባበር ህንፃ 2ኛ ፎቅ 14</span>
                  </p>
                  <div className="pl-8 pt-1">
                    <a
                      href="tel:0991929303"
                      className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 hover:text-blue-900 bg-white px-3 py-1.5 rounded-lg border border-blue-200 shadow-2xs hover:shadow-xs transition-all"
                    >
                      <Phone className="w-3.5 h-3.5 text-amber-500" />
                      <span>0991929303</span>
                    </a>
                  </div>
                </div>

                {/* Branch 2: Mexico */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2 hover:border-blue-300 transition-colors">
                  <div className="flex items-center justify-between">
                    <h4 className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">2</span>
                      <span>Mexico Branch (ሜክሲኮ)</span>
                    </h4>
                    <span className="text-[11px] font-semibold text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full">Office #319</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-8">
                    KKare Building, 3rd Floor, Office #319<br />
                    <span className="text-slate-500 font-normal">ሜክሲኮ ኬኬር ህንፃ 3ኛ ፎቅ 319</span>
                  </p>
                  <div className="pl-8 pt-1">
                    <a
                      href="tel:0991929304"
                      className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 hover:text-blue-900 bg-white px-3 py-1.5 rounded-lg border border-blue-200 shadow-2xs hover:shadow-xs transition-all"
                    >
                      <Phone className="w-3.5 h-3.5 text-amber-500" />
                      <span>0991929304</span>
                    </a>
                  </div>
                </div>

                {/* Branch 3: Jemo 1 */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2 hover:border-blue-300 transition-colors">
                  <div className="flex items-center justify-between">
                    <h4 className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">3</span>
                      <span>Jemo 1 Branch (ጀሞ 1)</span>
                    </h4>
                    <span className="text-[11px] font-semibold text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full">3rd Floor</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-8">
                    Kaku Business Center, 1st Gate, 3rd Floor<br />
                    <span className="text-slate-500 font-normal">ጀሞ 1 አንደኛ በር ካኩ ቢዝነስ ሴንተር 3ኛ ፎቅ</span>
                  </p>
                  <div className="pl-8 pt-1">
                    <a
                      href="tel:0991926707"
                      className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 hover:text-blue-900 bg-white px-3 py-1.5 rounded-lg border border-blue-200 shadow-2xs hover:shadow-xs transition-all"
                    >
                      <Phone className="w-3.5 h-3.5 text-amber-500" />
                      <span>0991926707</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* General Inquiries, Email & Hours */}
              <div className="pt-4 border-t border-slate-100 space-y-3 text-xs text-slate-600">
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                  <a href="mailto:toptrainings2020@gmail.com" className="font-medium hover:text-blue-700">
                    toptrainings2020@gmail.com
                  </a>
                </div>
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Monday – Friday: 8:30 AM – 6:30 PM | Saturday: 9:00 AM – 4:00 PM</span>
                </div>
              </div>

              {/* Fast response guarantee note */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
                <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Inquiries submitted online are usually answered within one business day.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Inquiry Form */}
          <div className="lg:col-span-7">
            <ContactForm initialCourse={course} />
          </div>
        </div>

        {/* Campus Map Locator Section */}
        <div className="mt-14 pt-10 border-t border-slate-200">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-slate-900">
              Campus Locations in Addis Ababa
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Visit our convenient branches in Megenagna, Mexico, and Jemo 1.
            </p>
          </div>

          <MapPlaceholder />
        </div>
      </section>
    </div>
  );
}
