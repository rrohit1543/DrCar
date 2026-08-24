import React from 'react';
import { Car, Bike, Sparkles, Shield, Zap, ArrowRight } from 'lucide-react';
import { SERVICES_LIST } from '../data/businessData';

export default function Services({ onSelectService }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Car': return <Car className="w-6 h-6 text-cyan-400" />;
      case 'Bike': return <Bike className="w-6 h-6 text-cyan-400" />;
      case 'Shield': return <Shield className="w-6 h-6 text-cyan-400" />;
      case 'Zap': return <Zap className="w-6 h-6 text-cyan-400" />;
      default: return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="services" className="py-24 relative bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Offerings</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Professional <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">Vehicle Washing Services</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Choose from specialized exterior and interior washing solutions for your cars and bikes in Nipania, Indore.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.map((service) => {
            const isCar = service.type === 'Car Service';
            return (
              <div
                key={service.id}
                className="glass-card glass-card-hover rounded-2xl p-6 relative flex flex-col justify-between group overflow-hidden border border-slate-800"
              >
                {/* Visual Category Pill */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 rounded-xl ${isCar ? 'bg-cyan-500/15 border border-cyan-500/30' : 'bg-blue-500/15 border border-blue-500/30'}`}>
                    {getIcon(service.icon)}
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    isCar 
                      ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-500/30' 
                      : 'bg-indigo-950/80 text-indigo-300 border border-indigo-500/30'
                  }`}>
                    {service.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-3 mb-8">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* CTA Action */}
                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-800/80 hover:bg-cyan-600 hover:text-slate-950 text-slate-200 text-sm font-semibold border border-slate-700/80 transition-all duration-300 flex items-center justify-center gap-2 group-hover:border-cyan-500/50"
                >
                  <span>Book Service</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
