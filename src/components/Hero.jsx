import React from 'react';
import { Phone, MapPin, Sparkles, CheckCircle2, ShieldCheck, Tag, Bike, Car } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export default function Hero({ onOpenBooking }) {
  const trustHighlights = [
    { title: "Professional Cleaning", icon: Sparkles },
    { title: "Affordable Pricing", icon: Tag },
    { title: "Cars & Bikes", icon: Car },
    { title: "Convenient Local Service", icon: MapPin },
  ];

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-12 pb-20">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=2000"
          alt="Premium Dark Car Washing Service"
          className="w-full h-full object-cover object-center scale-105 opacity-30 blur-[1px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-[#090d16]/80 to-[#090d16]/60"></div>
        <div className="absolute inset-0 bg-radial-glow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Location Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-semibold mb-8 backdrop-blur-md shadow-lg shadow-cyan-950/50 animate-float">
          <MapPin className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span>{BUSINESS_INFO.location}</span>
        </div>

        {/* Hero Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 max-w-4xl mx-auto leading-[1.1]">
          Your Car Deserves a <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">Cleaner Look.</span>
        </h1>

        {/* Supporting Copy */}
        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
          {BUSINESS_INFO.subtagline}
        </p>

        {/* Primary & Secondary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 max-w-md mx-auto">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-slate-950 font-bold text-base shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <span>Book Your Wash</span>
            <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </button>

          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-white font-semibold text-base border border-slate-700/80 backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
          >
            <Phone className="w-5 h-5 text-cyan-400" />
            <span>Call {BUSINESS_INFO.phone}</span>
          </a>
        </div>

        {/* 4 Trust Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-slate-800/80">
          {trustHighlights.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center justify-center gap-2.5 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm text-slate-300 text-xs sm:text-sm font-medium hover:border-cyan-500/40 transition-colors"
              >
                <IconComponent className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="truncate">{item.title}</span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
