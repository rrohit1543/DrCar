import React, { useState } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle } from 'lucide-react';

export default function BeforeAfterSection({ onOpenBooking }) {
  const transformations = [
    {
      id: "bmw-sedan",
      title: "BMW Sedan Deep Cleaning & Paint Restoration",
      category: "Car Exterior Wash",
      image: "/before-after-bmw.png",
      tag: "Mud & Grime Removal",
      description: "Restored heavy caked-on road mud into a deep glossy finish."
    },
    {
      id: "foam-split",
      title: "Snow Foam Bath & Mud Stripping",
      category: "Full Foam Wash",
      image: "/before-after-foam.png",
      tag: "Active Foam Wash",
      description: "Heavy snow foam lifts stubborn dirt without scratching the car surface."
    },
    {
      id: "suv-wash",
      title: "SUV Wheel & Lower Body De-Grime",
      category: "SUV Washing",
      image: "/before-after-suv.png",
      tag: "Wheel & Body Wash",
      description: "Thorough pressure cleaning removes mud splatters from wheels and rocker panels."
    },
    {
      id: "car-split",
      title: "50/50 Complete Vehicle Restoration",
      category: "Full Vehicle Care",
      image: "/before-after-car-split.png",
      tag: "50/50 Transformation",
      description: "Clear contrast showing before dirt build-up vs after fresh clean shine."
    }
  ];

  const [activeItem, setActiveItem] = useState(transformations[0]);

  return (
    <section id="before-after" className="py-24 relative bg-[#060913] border-y border-slate-800/80">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full bg-radial-glow pointer-events-none opacity-40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proven Results</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Before & After <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">Transformations</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            See the real cleaning results achieved at DR Car Washing near D Mart, Nipania, Indore.
          </p>
        </div>

        {/* Featured Large Transformation Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          
          {/* Main Showcase Image Frame */}
          <div className="lg:col-span-8">
            <div className="relative rounded-2xl overflow-hidden border border-cyan-500/40 shadow-2xl bg-slate-950 group">
              
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="w-full h-[360px] sm:h-[480px] object-contain object-center bg-[#0d1322] p-2 transition-all duration-500"
              />

              {/* Floating Badges */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-slate-950/90 border border-cyan-500/40 text-cyan-400 text-xs font-extrabold uppercase tracking-wider backdrop-blur-md shadow-lg">
                  {activeItem.tag}
                </span>
              </div>

              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-cyan-400 text-xs font-bold uppercase tracking-wider block mb-1">
                      {activeItem.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {activeItem.title}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-xl">
                      {activeItem.description}
                    </p>
                  </div>

                  <button
                    onClick={onOpenBooking}
                    className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 shrink-0 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Book This Wash</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Transformation Selector Cards Grid */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Select Transformation</span>
            </h4>

            {transformations.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                className={`p-3.5 rounded-xl cursor-pointer transition-all duration-300 border flex items-center gap-4 ${
                  activeItem.id === item.id
                    ? 'bg-slate-900 border-cyan-500/80 shadow-lg shadow-cyan-500/10'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/40'
                }`}
              >
                <div className="w-20 h-16 rounded-lg overflow-hidden shrink-0 border border-slate-700/60 bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h5 className={`text-xs font-bold truncate ${activeItem.id === item.id ? 'text-cyan-400' : 'text-white'}`}>
                    {item.title}
                  </h5>
                  <span className="text-[11px] text-slate-400 block mt-0.5">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
