import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export default function MobileBottomBar({ onOpenBooking }) {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hi%20DR%20Car%20Washing,%20I%20would%20like%20to%20book%20a%20vehicle%20wash.%20Please%20share%20the%20available%20time%20and%20service%20options.`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#090d16]/95 backdrop-blur-lg border-t border-slate-800 px-4 py-3 shadow-2xl">
      <div className="grid grid-cols-3 gap-2">
        
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-800 text-slate-200 border border-slate-700/80 active:bg-slate-700"
        >
          <Phone className="w-4 h-4 text-cyan-400 mb-0.5" />
          <span className="text-[11px] font-bold">Call</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 active:bg-emerald-900"
        >
          <MessageSquare className="w-4 h-4 text-emerald-400 mb-0.5" />
          <span className="text-[11px] font-bold">WhatsApp</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold active:opacity-90 shadow-md shadow-cyan-500/20"
        >
          <Calendar className="w-4 h-4 text-slate-950 mb-0.5" />
          <span className="text-[11px] font-extrabold">Book Wash</span>
        </button>

      </div>
    </div>
  );
}
