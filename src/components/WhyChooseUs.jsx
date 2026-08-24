import React from 'react';
import { Tag, MapPin, Layers, CheckCircle2, Sparkles, PhoneCall } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/businessData';

export default function WhyChooseUs() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Tag': return <Tag className="w-6 h-6 text-cyan-400" />;
      case 'MapPin': return <MapPin className="w-6 h-6 text-cyan-400" />;
      case 'Layers': return <Layers className="w-6 h-6 text-cyan-400" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-6 h-6 text-cyan-400" />;
      case 'PhoneCall': return <PhoneCall className="w-6 h-6 text-cyan-400" />;
      default: return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="why-us" className="py-24 relative bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why DR Car Washing</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Why Vehicle Owners <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">Choose Us</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Built on quality cleaning, honest pricing, and local convenience in Nipania, Indore.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800 flex items-start gap-4 group"
            >
              <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 shrink-0 group-hover:scale-110 transition-transform duration-300">
                {getIcon(item.icon)}
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
