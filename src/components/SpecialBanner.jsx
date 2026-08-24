import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export default function SpecialBanner({ onOpenBooking }) {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-r from-cyan-950/40 via-[#0a0f1d] to-indigo-950/40 border-y border-cyan-500/20">
      
      {/* Background Decorative Glow */}
      <div className="absolute inset-0 bg-radial-glow opacity-60 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Drive With Confidence</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Clean Car. <span className="text-cyan-400">Fresh Look.</span> Better Drive.
            </h2>

            <p className="text-slate-300 text-base sm:text-lg max-w-xl">
              Give your car or bike the deep shine and refreshing clean it deserves. Located right near D Mart in Nipania, Indore.
            </p>

            <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenBooking}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-base shadow-xl shadow-cyan-500/25 hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <span>Book Service Today</span>
                <Sparkles className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl group border border-cyan-500/40">
              <img
                src="/foam-spray-mustang.png"
                alt="High Pressure Foam Spray Car Wash Bay Action"
                className="w-full h-[320px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent opacity-60"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
