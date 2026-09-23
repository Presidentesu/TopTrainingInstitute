"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, Send } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { COURSE_CATEGORIES } from "@/data/categories";
import { FALLBACK_COURSES } from "@/data/fallback-courses";


interface FormState {
  fullName: string;
  email: string;
  phone: string;
  courseInterest: string;
  subject: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  courseInterest?: string;
  subject?: string;
  message?: string;
}

interface ContactFormProps {
  initialCourse?: string;
}

export function ContactForm({ initialCourse = "" }: ContactFormProps) {
  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    email: "",
    phone: "",
    courseInterest: initialCourse,
    subject: initialCourse ? `Inquiry regarding ${initialCourse}` : "",
    message: "",
  });

  const [prevCourse, setPrevCourse] = useState(initialCourse);
  if (prevCourse !== initialCourse) {
    setPrevCourse(initialCourse);
    setFormData((prev) => ({
      ...prev,
      courseInterest: initialCourse,
      subject: prev.subject || (initialCourse ? `Inquiry regarding ${initialCourse}` : ""),
    }));
  }

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  // Options for course selection dropdown
  const courseOptions = [
    { value: "General Enrollment", label: "General Enrollment / Admissions" },
    ...FALLBACK_COURSES.map((c) => ({
      value: c.title,
      label: `${c.title} (${c.category})`,
    })),
    ...COURSE_CATEGORIES.map((cat) => ({
      value: `${cat.name} General`,
      label: `Field: ${cat.name}`,
    })),
  ];

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Name must be at least 2 characters.";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!emailPattern.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (formData.phone.trim().length < 5) {
      newErrors.phone = "Please provide a valid phone number.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please enter an inquiry subject.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please write a message explaining your inquiry.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Your message must contain at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus({ type: null, message: "" });

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          courseInterest: formData.courseInterest || "General Enrollment",
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await res.json();


      if (result.success) {
        setSubmitStatus({
          type: "success",
          message:
            "Thank you for contacting Top Training Institute! Your inquiry has been received. Our admissions team will get in touch with you shortly.",
        });
        // Reset form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          courseInterest: "",
          subject: "",
          message: "",
        });
        setErrors({});
      } else {
        setSubmitStatus({
          type: "error",
          message:
            result.error ||
            "Unable to submit inquiry at this moment. Please call or email us directly.",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "An unexpected error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-slate-900">
          Send Us an Inquiry
        </h3>
        <p className="text-sm text-slate-500 mt-1">
          Fill out the details below and our program advisors will provide syllabus information, batch timings, and enrollment guidance.
        </p>
      </div>

      {/* Success Notification */}
      {submitStatus.type === "success" && (
        <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-emerald-900">
              Inquiry Sent Successfully!
            </p>
            <p className="text-xs text-emerald-700 mt-1 leading-relaxed">
              {submitStatus.message}
            </p>
          </div>
        </div>
      )}

      {/* Error Notification */}
      {submitStatus.type === "error" && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-red-900">
              Submission Notice
            </p>
            <p className="text-xs text-red-700 mt-1 leading-relaxed">
              {submitStatus.message}
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {/* Full Name */}
        <Input
          label="Full Name"
          name="fullName"
          id="fullName"
          placeholder="e.g. Alex Morgan"
          value={formData.fullName}
          onChange={handleChange}
          error={errors.fullName}
          required
        />

        {/* Email & Phone Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="Email Address"
            type="email"
            name="email"
            id="email"
            placeholder="alex@example.com"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            required
          />

          <Input
            label="Phone Number"
            type="tel"
            name="phone"
            id="phone"
            placeholder="+1 (555) 000-0000"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
            required
          />
        </div>

        {/* Course of Interest */}
        <Select
          label="Course or Program of Interest"
          name="courseInterest"
          id="courseInterest"
          options={courseOptions}
          value={formData.courseInterest}
          onChange={handleChange}
          placeholder="Select a Course or Discipline"
        />

        {/* Subject */}
        <Input
          label="Subject"
          name="subject"
          id="subject"
          placeholder="e.g. Inquiring about weekend batches"
          value={formData.subject}
          onChange={handleChange}
          error={errors.subject}
          required
        />

        {/* Message */}
        <Textarea
          label="Message"
          name="message"
          id="message"
          rows={4}
          placeholder="Please let us know your educational goals, preferred study mode, or any questions..."
          value={formData.message}
          onChange={handleChange}
          error={errors.message}
          required
        />

        {/* Submit Button */}
        <div className="pt-2">
          <Button
            type="submit"
            variant="gold"
            size="lg"
            className="w-full"
            loading={isSubmitting}
            icon={<Send className="w-4 h-4" />}
          >
            {isSubmitting ? "Submitting Inquiry..." : "Submit Inquiry"}
          </Button>
        </div>

        <p className="text-[11px] text-slate-400 text-center pt-2">
          Your information is kept strictly confidential and used solely for admissions assistance.
        </p>
      </form>
    </div>
  );
}
