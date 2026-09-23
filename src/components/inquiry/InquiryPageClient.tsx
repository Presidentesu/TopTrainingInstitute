"use client";

import React, { useState } from "react";
import { InquiryLogin } from "./InquiryLogin";
import { InquiryDashboard } from "./InquiryDashboard";
import { Inquiry } from "@/types";

interface InquiryPageClientProps {
  initialAuthenticated: boolean;
  adminEmail: string;
  initialInquiries?: Inquiry[];
}

export function InquiryPageClient({
  initialAuthenticated,
  adminEmail,
  initialInquiries = [],
}: InquiryPageClientProps) {
  const [authenticated, setAuthenticated] = useState(initialAuthenticated);
  const [currentEmail, setCurrentEmail] = useState(adminEmail);
  const [inquiries, setInquiries] = useState<Inquiry[]>(initialInquiries);

  const handleLoginSuccess = async (email: string) => {
    setCurrentEmail(email);
    try {
      const res = await fetch("/api/inquiries");
      const data = await res.json();
      if (data.success && Array.isArray(data.inquiries)) {
        setInquiries(data.inquiries);
      }
    } catch {
      // ignore
    }
    setAuthenticated(true);
  };

  const handleLogout = () => {
    setAuthenticated(false);
  };

  if (!authenticated) {
    return <InquiryLogin onLoginSuccess={handleLoginSuccess} defaultEmail={currentEmail} />;
  }

  return (
    <InquiryDashboard
      adminEmail={currentEmail}
      initialInquiries={inquiries}
      onLogout={handleLogout}
    />
  );
}
