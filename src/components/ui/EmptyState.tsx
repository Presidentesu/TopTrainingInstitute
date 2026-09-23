import React from "react";
import { FolderSearch } from "lucide-react";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

export interface EmptyStateProps {
  title?: string;
  description?: string;
  actionText?: string;
  onAction?: () => void;
  actionHref?: string;
  className?: string;
}

export function EmptyState({
  title = "No matching courses found",
  description = "Try adjusting your search terms or clearing your filters to discover other available programs.",
  actionText = "Clear Filters",
  onAction,
  actionHref,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center p-12 text-center rounded-2xl border-2 border-dashed border-slate-200 bg-white/50 max-w-lg mx-auto my-8",
        className
      )}
    >
      <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-4 ring-8 ring-blue-50/50">
        <FolderSearch className="w-8 h-8" />
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-600 mb-6 max-w-sm">{description}</p>
      {(onAction || actionHref) && (
        <Button
          variant="secondary"
          size="sm"
          onClick={onAction}
          href={actionHref}
        >
          {actionText}
        </Button>
      )}
    </div>
  );
}
