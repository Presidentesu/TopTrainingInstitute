import React from "react";
import { MapPin, Navigation, ExternalLink } from "lucide-react";

interface MapPlaceholderProps {
  /**
   * Optional embed URL for an actual Google Maps iframe.
   * e.g., "https://www.google.com/maps/embed?pb=..."
   */
  embedUrl?: string;
  address?: string;
}

export function MapPlaceholder({
  embedUrl,
  address = "Main Training Campus, Training Institute Plaza, City Center",
}: MapPlaceholderProps) {
  if (embedUrl) {
    return (
      <div className="w-full aspect-16/9 md:aspect-21/9 rounded-2xl overflow-hidden border border-slate-200 shadow-xs">
        <iframe
          src={embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Institute Campus Map Location"
        />
      </div>
    );
  }

  // Polished interactive placeholder visual
  return (
    <div className="relative w-full aspect-16/9 sm:aspect-21/9 rounded-2xl overflow-hidden border border-slate-200/80 bg-slate-100 shadow-xs flex items-center justify-center p-6 text-center">
      {/* Background Stylized Map Pattern */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]" />
      
      {/* Visual Road Lines Simulation */}
      <div className="absolute inset-0 opacity-15">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 200">
          <path d="M-20,100 Q150,50 420,120" stroke="#1e3a8a" strokeWidth="8" fill="none" />
          <path d="M120,-20 L200,220" stroke="#1e3a8a" strokeWidth="6" fill="none" />
          <path d="M280,-20 L250,220" stroke="#f59e0b" strokeWidth="4" fill="none" />
        </svg>
      </div>

      {/* Map Pin Card Overlay */}
      <div className="relative z-10 bg-white/95 backdrop-blur-md rounded-xl p-5 border border-slate-200/80 shadow-lg max-w-sm mx-auto space-y-3">
        <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto shadow-md">
          <MapPin className="w-5 h-5 text-amber-400" />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 text-sm">
            Top Training Institute Campus
          </h4>
          <p className="text-xs text-slate-500 mt-0.5">
            {address}
          </p>
        </div>
        <div className="pt-1">
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition-colors"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>Open in Google Maps</span>
            <ExternalLink className="w-3 h-3 ml-0.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
