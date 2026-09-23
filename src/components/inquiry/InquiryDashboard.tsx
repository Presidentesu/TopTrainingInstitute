"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import {
  Search,
  RefreshCw,
  LogOut,
  Phone,
  Mail,
  Calendar,

  BookOpen,
  CheckCircle2,
  Clock,
  Archive,
  Download,
  Trash2,
  X,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Inquiry, InquiryStatus } from "@/types";

interface InquiryDashboardProps {
  adminEmail: string;
  initialInquiries?: Inquiry[];
  onLogout: () => void;
}

export function InquiryDashboard({
  adminEmail,
  initialInquiries = [],
  onLogout,
}: InquiryDashboardProps) {
  const [inquiries, setInquiries] = useState<Inquiry[]>(initialInquiries);
  const [prevInitial, setPrevInitial] = useState(initialInquiries);
  if (prevInitial !== initialInquiries) {
    setPrevInitial(initialInquiries);
    setInquiries(initialInquiries);
  }

  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
  const [actionError, setActionError] = useState<string | null>(null);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  // Fetch inquiries from server
  const fetchInquiries = async (isManualRefresh = false) => {
    if (isManualRefresh) setRefreshing(true);
    else setLoading(true);
    setActionError(null);

    try {
      const res = await fetch("/api/inquiries", { cache: "no-store" });
      if (res.status === 401) {
        onLogout();
        return;
      }
      const data = await res.json();
      if (data.success && Array.isArray(data.inquiries)) {
        setInquiries(data.inquiries);
      } else {
        setActionError(data.error || "Failed to load inquiries");
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Error fetching inquiries";
      setActionError(msg);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  // Status update handler
  const handleStatusChange = async (id: string, newStatus: InquiryStatus) => {
    setUpdatingId(id);
    try {
      const res = await fetch(`/api/inquiries/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      const data = await res.json();
      if (data.success) {
        setInquiries((prev) =>
          prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
        );
        if (selectedInquiry?.id === id) {
          setSelectedInquiry((prev) => (prev ? { ...prev, status: newStatus } : null));
        }
      } else {
        alert(data.error || "Failed to update status");
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Update failed";
      alert(msg);
    } finally {
      setUpdatingId(null);
    }
  };

  // Delete handler
  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to delete inquiry from "${name}"?`)) return;

    setUpdatingId(id);
    try {
      const res = await fetch(`/api/inquiries/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        setInquiries((prev) => prev.filter((item) => item.id !== id));
        if (selectedInquiry?.id === id) setSelectedInquiry(null);
      } else {
        alert(data.error || "Failed to delete inquiry");
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Delete failed";
      alert(msg);
    } finally {
      setUpdatingId(null);
    }
  };

  // Logout handler
  const handleLogoutClick = async () => {
    try {
      await fetch("/api/auth/inquiry-logout", { method: "POST" });
    } catch {
      // ignore
    }
    onLogout();
  };

  // Filtered inquiries
  const filteredInquiries = useMemo(() => {
    return inquiries.filter((item) => {
      const matchesStatus = statusFilter === "all" || (item.status || "new") === statusFilter;
      const term = search.toLowerCase().trim();
      const matchesSearch =
        !term ||
        item.fullName?.toLowerCase().includes(term) ||
        item.email?.toLowerCase().includes(term) ||
        item.phone?.toLowerCase().includes(term) ||
        item.courseInterest?.toLowerCase().includes(term) ||
        item.subject?.toLowerCase().includes(term) ||
        item.message?.toLowerCase().includes(term);

      return matchesStatus && matchesSearch;
    });
  }, [inquiries, statusFilter, search]);

  // Counts
  const counts = useMemo(() => {
    return {
      all: inquiries.length,
      new: inquiries.filter((i) => (i.status || "new") === "new").length,
      contacted: inquiries.filter((i) => i.status === "contacted").length,
      enrolled: inquiries.filter((i) => i.status === "enrolled").length,
      archived: inquiries.filter((i) => i.status === "archived").length,
    };
  }, [inquiries]);

  // Export to CSV
  const handleExportCSV = () => {
    if (filteredInquiries.length === 0) {
      alert("No inquiries to export.");
      return;
    }

    const headers = ["Date", "Status", "Full Name", "Phone", "Email", "Course Interest", "Subject", "Message"];
    const rows = filteredInquiries.map((inq) => [
      formatDate(inq.createdAt),
      inq.status || "new",
      `"${(inq.fullName || "").replace(/"/g, '""')}"`,
      `"${(inq.phone || "").replace(/"/g, '""')}"`,
      `"${(inq.email || "").replace(/"/g, '""')}"`,
      `"${(inq.courseInterest || "").replace(/"/g, '""')}"`,
      `"${(inq.subject || "").replace(/"/g, '""')}"`,
      `"${(inq.message || "").replace(/"/g, '""').replace(/\n/g, " ")}"`,
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `top_training_inquiries_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* Top Navigation Bar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center p-1.5 shadow-xs border border-slate-200">
                <Image
                  src="/images/logo.png"
                  alt="Top Training Institute Logo"
                  width={40}
                  height={40}
                  className="object-contain w-full h-full"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-lg tracking-tight text-slate-900">TOP TRAINING</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-blue-100 text-blue-800 tracking-wider">
                    Admin Portal
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-medium">Inquiry Management Dashboard</p>
              </div>
            </div>


            {/* Controls */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-lg text-xs font-medium text-slate-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{adminEmail}</span>
              </div>

              <button
                type="button"
                onClick={() => fetchInquiries(true)}
                disabled={refreshing || loading}
                className="p-2 sm:px-3 sm:py-2 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center gap-1.5 transition-colors"
                title="Refresh inquiries"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${refreshing ? "animate-spin text-blue-600" : ""}`} />
                <span className="hidden sm:inline">Refresh</span>
              </button>

              <button
                type="button"
                onClick={handleExportCSV}
                className="p-2 sm:px-3 sm:py-2 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center gap-1.5 transition-colors"
                title="Export CSV"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Export CSV</span>
              </button>

              <button
                type="button"
                onClick={handleLogoutClick}
                className="p-2 sm:px-3 sm:py-2 text-xs font-semibold rounded-lg bg-red-50 hover:bg-red-100 text-red-700 flex items-center gap-1.5 transition-colors"
                title="Sign out"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {actionError && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm flex items-center justify-between">
            <span>{actionError}</span>
            <button type="button" onClick={() => setActionError(null)} className="text-red-500 hover:text-red-700">
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
            <div className="flex items-center justify-between text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">
              <span>Total Inquiries</span>
              <BookOpen className="w-4 h-4 text-slate-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900">{counts.all}</div>
            <p className="text-[11px] text-slate-500 mt-1">All time received</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-blue-200/80 shadow-xs bg-gradient-to-br from-blue-50/50 to-white">
            <div className="flex items-center justify-between text-blue-700 text-xs font-semibold uppercase tracking-wider mb-2">
              <span>New / Unread</span>
              <Sparkles className="w-4 h-4 text-blue-600" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-blue-900">{counts.new}</div>
            <p className="text-[11px] text-blue-600 mt-1">Requires follow-up</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-amber-200/80 shadow-xs bg-gradient-to-br from-amber-50/50 to-white">
            <div className="flex items-center justify-between text-amber-700 text-xs font-semibold uppercase tracking-wider mb-2">
              <span>Contacted</span>
              <Clock className="w-4 h-4 text-amber-600" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-amber-900">{counts.contacted}</div>
            <p className="text-[11px] text-amber-600 mt-1">In communication</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-emerald-200/80 shadow-xs bg-gradient-to-br from-emerald-50/50 to-white">
            <div className="flex items-center justify-between text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-2">
              <span>Enrolled</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-900">{counts.enrolled}</div>
            <p className="text-[11px] text-emerald-600 mt-1">Confirmed students</p>
          </div>
        </div>

        {/* Toolbar & Filter Tabs */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-xs mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Status Tabs */}
            <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              {(
                [
                  { id: "all", label: "All", count: counts.all },
                  { id: "new", label: "New", count: counts.new, alert: counts.new > 0 },
                  { id: "contacted", label: "Contacted", count: counts.contacted },
                  { id: "enrolled", label: "Enrolled", count: counts.enrolled },
                  { id: "archived", label: "Archived", count: counts.archived },
                ] as const
              ).map((tab) => {
                const active = statusFilter === tab.id;
                const hasAlert = "alert" in tab && Boolean(tab.alert);
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setStatusFilter(tab.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
                      active
                        ? "bg-blue-900 text-white shadow-xs"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span
                      className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                        active
                          ? "bg-blue-800 text-white"
                          : hasAlert
                          ? "bg-blue-100 text-blue-800"
                          : "bg-slate-200 text-slate-700"
                      }`}
                    >
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Search Box */}
            <div className="relative w-full lg:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search name, phone, course..."
                className="w-full pl-10 pr-8 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
              />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Inquiries Content */}
        {loading ? (
          <div className="bg-white rounded-2xl border border-slate-200/80 p-12 text-center">
            <RefreshCw className="w-8 h-8 text-blue-600 animate-spin mx-auto mb-3" />
            <p className="text-sm font-semibold text-slate-700">Loading student inquiries...</p>
            <p className="text-xs text-slate-400 mt-1">Connecting to Cloud Firestore database</p>
          </div>
        ) : filteredInquiries.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200/80 p-12 text-center">
            <MessageSquare className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800">No inquiries found</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              {search
                ? `No inquiries match your search "${search}". Try adjusting keywords.`
                : `No inquiries currently categorized under "${statusFilter}".`}
            </p>
            {search && (
              <Button variant="outline" size="sm" onClick={() => setSearch("")} className="mt-4">
                Clear Search
              </Button>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredInquiries.map((inq) => {
              const status = inq.status || "new";
              const isUpdating = updatingId === inq.id;

              return (
                <div
                  key={inq.id}
                  className={`bg-white rounded-2xl border p-5 sm:p-6 transition-all shadow-xs hover:shadow-md ${
                    status === "new"
                      ? "border-blue-300 ring-1 ring-blue-100"
                      : "border-slate-200/80"
                  }`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                    {/* Student Info & Details */}
                    <div className="space-y-2.5 flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h4 className="text-base font-bold text-slate-900 tracking-tight">
                          {inq.fullName}
                        </h4>
                        <StatusBadge status={status} />
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-100">
                          <BookOpen className="w-3 h-3 text-blue-600" />
                          {inq.courseInterest || "General Inquiry"}
                        </span>
                      </div>

                      {/* Contact Info Chips */}
                      <div className="flex flex-wrap items-center gap-y-1.5 gap-x-4 text-xs text-slate-600 font-medium">
                        <a
                          href={`tel:${inq.phone}`}
                          className="inline-flex items-center gap-1.5 text-blue-700 font-bold hover:underline"
                        >
                          <Phone className="w-3.5 h-3.5 text-blue-600" />
                          {inq.phone}
                        </a>
                        <a
                          href={`mailto:${inq.email}`}
                          className="inline-flex items-center gap-1.5 text-slate-600 hover:text-blue-700"
                        >
                          <Mail className="w-3.5 h-3.5 text-slate-400" />
                          {inq.email}
                        </a>
                        <div className="inline-flex items-center gap-1.5 text-slate-400">
                          <Calendar className="w-3.5 h-3.5" />
                          {formatDate(inq.createdAt)}
                        </div>
                      </div>

                      {/* Subject & Message snippet */}
                      <div className="pt-1">
                        <div className="text-xs font-bold text-slate-800 mb-1">
                          Subject: <span className="font-semibold text-slate-700">{inq.subject}</span>
                        </div>
                        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                          {inq.message}
                        </p>
                      </div>
                    </div>

                    {/* Actions & Status Dropdown */}
                    <div className="flex flex-wrap lg:flex-col items-end gap-2 shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-slate-100">
                      <div className="flex items-center gap-2">
                        <a
                          href={`tel:${inq.phone}`}
                          className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-colors shadow-xs"
                        >
                          <Phone className="w-3 h-3" />
                          <span>Call</span>
                        </a>
                        <a
                          href={`mailto:${inq.email}?subject=Regarding your inquiry at Top Training Institute: ${encodeURIComponent(
                            inq.courseInterest
                          )}`}
                          className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-colors shadow-xs"
                        >
                          <Mail className="w-3 h-3" />
                          <span>Email</span>
                        </a>
                        <button
                          type="button"
                          onClick={() => setSelectedInquiry(inq)}
                          className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
                        >
                          Details
                        </button>
                      </div>

                      {/* Status Selector */}
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[11px] font-medium text-slate-400">Status:</span>
                        <select
                          disabled={isUpdating}
                          value={status}
                          onChange={(e) =>
                            inq.id && handleStatusChange(inq.id, e.target.value as InquiryStatus)
                          }
                          className="text-xs font-semibold bg-slate-100 border border-slate-200 rounded-lg px-2 py-1 text-slate-800 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                        >
                          <option value="new">New</option>
                          <option value="contacted">Contacted</option>
                          <option value="enrolled">Enrolled</option>
                          <option value="archived">Archived</option>
                        </select>

                        {inq.id && (
                          <button
                            type="button"
                            disabled={isUpdating}
                            onClick={() => handleDelete(inq.id!, inq.fullName)}
                            className="p-1 text-slate-400 hover:text-red-600 rounded-md transition-colors"
                            title="Delete Inquiry"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>

      {/* Inquiry Detail Modal */}
      {selectedInquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
            {/* Modal Header */}
            <div className="bg-slate-900 text-white p-6 rounded-t-2xl flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold tracking-wider text-amber-400 uppercase">
                  Student Inquiry Details
                </span>
                <h3 className="text-xl font-bold mt-1">{selectedInquiry.fullName}</h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedInquiry(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5">
              {/* Quick Contacts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`tel:${selectedInquiry.phone}`}
                  className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3 hover:bg-emerald-100 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-emerald-700 uppercase">Phone (Click to Call)</div>
                    <div className="text-xs font-extrabold text-emerald-900">{selectedInquiry.phone}</div>
                  </div>
                </a>

                <a
                  href={`mailto:${selectedInquiry.email}`}
                  className="p-3 bg-blue-50 border border-blue-200 rounded-xl flex items-center gap-3 hover:bg-blue-100 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[10px] font-bold text-blue-700 uppercase">Email (Click to Mail)</div>
                    <div className="text-xs font-bold text-blue-900 truncate">{selectedInquiry.email}</div>
                  </div>
                </a>
              </div>

              {/* Course Info */}
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-1.5">
                <div className="flex justify-between">
                  <span className="font-semibold text-slate-500">Course of Interest:</span>
                  <span className="font-bold text-blue-900">{selectedInquiry.courseInterest || "General Inquiry"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-slate-500">Subject:</span>
                  <span className="font-bold text-slate-800">{selectedInquiry.subject}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-slate-500">Received Date:</span>
                  <span className="text-slate-700">{formatDate(selectedInquiry.createdAt)}</span>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Full Student Message:
                </label>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 whitespace-pre-wrap leading-relaxed">
                  {selectedInquiry.message}
                </div>
              </div>

              {/* Change Status in Modal */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-slate-600">Update Status:</span>
                  <select
                    value={selectedInquiry.status || "new"}
                    onChange={(e) =>
                      selectedInquiry.id &&
                      handleStatusChange(selectedInquiry.id, e.target.value as InquiryStatus)
                    }
                    className="text-xs font-semibold bg-slate-100 border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-800"
                  >
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="enrolled">Enrolled</option>
                    <option value="archived">Archived</option>
                  </select>
                </div>

                {selectedInquiry.id && (
                  <button
                    type="button"
                    onClick={() => handleDelete(selectedInquiry.id!, selectedInquiry.fullName)}
                    className="text-xs font-semibold text-red-600 hover:text-red-800 flex items-center gap-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    Delete
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  switch (status) {
    case "new":
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
          New
        </span>
      );
    case "contacted":
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-100 text-amber-800 border border-amber-200">
          <Clock className="w-3 h-3 text-amber-600" />
          Contacted
        </span>
      );
    case "enrolled":
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-purple-100 text-purple-800 border border-purple-200">
          <CheckCircle2 className="w-3 h-3 text-purple-600" />
          Enrolled
        </span>
      );
    case "archived":
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
          <Archive className="w-3 h-3 text-slate-500" />
          Archived
        </span>
      );
    default:
      return <Badge variant="slate">{status}</Badge>;
  }
}

function formatDate(dateValue?: string | Date | Record<string, unknown>): string {
  if (!dateValue) return "Recently";
  try {
    const d = typeof dateValue === "string" ? new Date(dateValue) : new Date();
    if (isNaN(d.getTime())) return "Recently";
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  } catch {
    return "Recently";
  }
}
