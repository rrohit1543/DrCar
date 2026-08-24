import React from 'react';
import { HOW_IT_WORKS } from '../data/businessData';
import { Sparkles, Phone, CheckCircle } from 'lucide-react';

export default function HowItWorks({ onOpenBooking }) {
  return (
    <section className="py-20 relative bg-[#070b14] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Simple Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How It <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">Works</span>
          </h2>
          <p className="text-slate-400 text-base">
            Get your car or bike washed in 3 easy steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {HOW_IT_WORKS.map((step, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-8 border border-slate-800 relative group flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300"
            >
              <div>
                <div className="text-5xl font-black text-cyan-500/30 mb-6 font-mono group-hover:text-cyan-400/50 transition-colors">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {step.desc}
                </p>
              </div>

              {idx === 1 && (
                <button
                  onClick={onOpenBooking}
                  className="w-full py-2.5 px-4 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500 hover:text-slate-950 text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Contact 6260601543</span>
                </button>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
