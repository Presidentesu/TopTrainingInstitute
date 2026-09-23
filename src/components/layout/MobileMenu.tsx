"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { label: string; href: string }[];
  pathname: string;
}

export function MobileMenu({ isOpen, onClose, links, pathname }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden bg-slate-900/60 backdrop-blur-xs transition-opacity duration-200">
      <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center p-1 border border-slate-200 shadow-xs">
                <Image
                  src="/images/logo.png"
                  alt="Top Training Institute Logo"
                  width={36}
                  height={36}
                  className="object-contain w-full h-full"
                />
              </div>
              <span className="font-extrabold text-base tracking-tight text-slate-900">
                TOP TRAINING
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="mt-6 flex flex-col space-y-1">
            {links.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={cn(
                    "flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors",
                    isActive
                      ? "bg-blue-50 text-blue-700 font-bold"
                      : "text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                  )}
                >
                  <span>{link.label}</span>
                  {isActive && <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Action Button & Contact Info */}
        <div className="pt-6 border-t border-slate-100 space-y-4">
          <Button
            href="/contact?course=General+Enrollment"
            variant="gold"
            size="lg"
            className="w-full"
            icon={<ArrowRight className="w-4 h-4" />}
            onClick={onClose}
          >
            Apply Now
          </Button>

          <div className="text-center text-xs text-slate-500">
            <p className="font-semibold text-slate-700">Top Training Institute</p>
            <p className="mt-0.5">Learn Skills. Build Your Career. Create Your Future.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
