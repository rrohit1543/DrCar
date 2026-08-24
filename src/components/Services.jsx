import React from 'react';
import { Car, Bike, Sparkles, Shield, Zap, ArrowRight } from 'lucide-react';
import { SERVICES_LIST } from '../data/businessData';

export default function Services({ onSelectService }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Car': return <Car className="w-5 h-5 text-cyan-400" />;
      case 'Bike': return <Bike className="w-5 h-5 text-cyan-400" />;
      case 'Shield': return <Shield className="w-5 h-5 text-cyan-400" />;
      case 'Zap': return <Zap className="w-5 h-5 text-cyan-400" />;
      default: return <Sparkles className="w-5 h-5 text-cyan-400" />;
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
            Choose from specialized exterior foam wash and interior dashboard polishing solutions for your cars and bikes in Nipania, Indore.
          </p>
        </div>

        {/* Services Grid (2 Car Services + 2 Bike Services) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_LIST.map((service) => {
            const isCar = service.type === 'Car Service';
            return (
              <div
                key={service.id}
                className="glass-card rounded-2xl relative flex flex-col justify-between group overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-1 shadow-xl"
              >
                <div>
                  {/* Top Image Preview Frame */}
                  <div className="h-48 relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-transparent"></div>

                    {/* Badge Pill */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <div className={`p-2.5 rounded-xl backdrop-blur-md ${isCar ? 'bg-cyan-950/80 border border-cyan-500/40 text-cyan-300' : 'bg-indigo-950/80 border border-indigo-500/40 text-indigo-300'}`}>
                        {getIcon(service.icon)}
                      </div>
                      <span className={`text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-md ${
                        isCar 
                          ? 'bg-cyan-950/90 text-cyan-300 border border-cyan-500/40' 
                          : 'bg-indigo-950/90 text-indigo-300 border border-indigo-500/40'
                      }`}>
                        {service.badge}
                      </span>
                    </div>
                  </div>

                  {/* Content Padding */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed min-h-[60px]">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* CTA Action */}
                <div className="px-6 pb-6 pt-2">
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="w-full py-3 px-4 rounded-xl bg-slate-800/90 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 hover:text-slate-950 text-slate-200 text-sm font-bold border border-slate-700/80 transition-all duration-300 flex items-center justify-center gap-2 group-hover:border-cyan-400/50"
                  >
                    <span>Book Service</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
