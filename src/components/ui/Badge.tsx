import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "blue" | "gold" | "green" | "purple" | "slate" | "outline";
  size?: "sm" | "md";
}

export function Badge({
  className,
  variant = "blue",
  size = "md",
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    blue: "bg-blue-50 text-blue-700 border-blue-200/60",
    gold: "bg-amber-50 text-amber-800 border-amber-300/80 font-medium",
    green: "bg-emerald-50 text-emerald-700 border-emerald-200/60",
    purple: "bg-purple-50 text-purple-700 border-purple-200/60",
    slate: "bg-slate-100 text-slate-700 border-slate-200",
    outline: "bg-transparent text-slate-600 border-slate-300",
  };

  const sizeStyles = {
    sm: "text-xs px-2 py-0.5 rounded",
    md: "text-xs font-medium px-2.5 py-1 rounded-full border",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 leading-none transition-colors",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
