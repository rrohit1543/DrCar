import React, { useState } from 'react';
import { FAQS } from '../data/businessData';
import { ChevronDown, Sparkles, HelpCircle } from 'lucide-react';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative bg-[#090d16]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">Questions</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Everything you need to know about DR Car Washing services and pricing.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl border border-slate-800 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-white hover:text-cyan-400 transition-colors"
                >
                  <span className="text-base sm:text-lg">{faq.q}</span>
                  <div className={`p-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 transition-transform duration-300 ${isOpen ? 'rotate-180 text-cyan-400 border-cyan-500/40' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-slate-300 text-sm leading-relaxed border-t border-slate-800/60 mt-1 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
