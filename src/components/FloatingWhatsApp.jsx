import React from 'react';
import { MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hi%20DR%20Car%20Washing,%20I%20would%20like%20to%20book%20a%20vehicle%20wash.%20Please%20share%20the%20available%20time%20and%20service%20options.`;

  return (
    <div className="fixed bottom-20 md:bottom-8 right-6 z-40 flex items-center gap-3">
      {/* Tooltip badge */}
      <span className="hidden sm:inline-block px-3 py-1.5 rounded-xl bg-slate-900/90 text-emerald-400 text-xs font-bold border border-emerald-500/30 shadow-xl backdrop-blur-md animate-pulse">
        💬 WhatsApp Booking Available
      </span>
      
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with DR Car Washing"
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-400 text-slate-950 flex items-center justify-center shadow-2xl shadow-emerald-500/40 hover:scale-110 transition-transform duration-300 border-2 border-emerald-300/40 group"
      >
        <MessageSquare className="w-7 h-7 text-slate-950 group-hover:rotate-12 transition-transform" />
      </a>
    </div>
  );
}
