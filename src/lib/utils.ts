/**
 * Simple conditional class merger
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Format currency with fallback
 */
export function formatCurrency(amount?: number, currency: string = "USD"): string {
  if (amount === undefined || amount === null) return "Contact for pricing";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
    maximumFractionDigits: 0,
  }).format(amount);
}
