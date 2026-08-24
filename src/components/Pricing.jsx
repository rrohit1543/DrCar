import React, { useState } from 'react';
import { Car, Bike, Sparkles, Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { CAR_PRICING, BIKE_PRICING } from '../data/businessData';

export default function Pricing({ onBookService }) {
  const [activeTab, setActiveTab] = useState('cars');

  return (
    <section id="pricing" className="py-24 relative bg-[#060a12] border-y border-slate-800/80">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full bg-radial-glow pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Honest Local Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Transparent <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">Pricing Packages</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            No hidden charges. Clear, competitive prices for all vehicle types in Nipania, Indore.
          </p>

          {/* Cars / Bikes Tab Toggle */}
          <div className="pt-6 inline-flex p-1.5 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl">
            <button
              onClick={() => setActiveTab('cars')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                activeTab === 'cars'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-lg shadow-cyan-500/25'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Car className="w-4 h-4" />
              <span>Car Washing Prices</span>
            </button>
            <button
              onClick={() => setActiveTab('bikes')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                activeTab === 'bikes'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-lg shadow-cyan-500/25'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Bike className="w-4 h-4" />
              <span>Bike Washing Prices</span>
            </button>
          </div>
        </div>

        {/* CAR PRICING SECTION */}
        {activeTab === 'cars' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fadeIn">
            {CAR_PRICING.map((car, idx) => (
              <div
                key={idx}
                className={`glass-card rounded-2xl p-6 relative flex flex-col justify-between border transition-all duration-300 hover:-translate-y-1 ${
                  car.popular 
                    ? 'border-cyan-500/70 shadow-2xl shadow-cyan-500/20 bg-slate-900/90' 
                    : 'border-slate-800 hover:border-cyan-500/30'
                }`}
              >
                {car.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 text-[11px] font-extrabold uppercase tracking-wider shadow-md">
                    Featured Choice
                  </div>
                )}

                <div>
                  {/* Category Image Header - Full Frame Car Focus */}
                  <div className="h-48 sm:h-52 rounded-xl overflow-hidden mb-5 relative group border border-slate-700/50 shadow-lg">
                    <img
                      src={car.image}
                      alt={car.category}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>
                    
                    {/* Floating Title Pill */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-950/80 border border-cyan-500/40 backdrop-blur-md">
                        <Car className="w-4 h-4 text-cyan-400" />
                        <span className="text-white font-extrabold text-base tracking-wide">{car.category}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-300 text-xs mb-6 min-h-[32px] leading-relaxed">
                    {car.description}
                  </p>

                  {/* Pricing Breakdown Cards */}
                  <div className="space-y-3 mb-8">
                    
                    {/* Outer Wash */}
                    <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                      <div>
                        <span className="text-xs text-slate-400 font-medium block">Outer Wash</span>
                        <span className="text-xl font-extrabold text-white">₹{car.outerWashPrice}</span>
                      </div>
                      <button
                        onClick={() => onBookService(`${car.category} - Outer Wash (₹${car.outerWashPrice})`)}
                        className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-cyan-400 text-xs font-bold transition-colors"
                      >
                        Select
                      </button>
                    </div>

                    {/* Inside + Outside */}
                    <div className="p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-500/40 flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-1">
                          <span className="text-xs text-cyan-300 font-semibold block">Inside + Outside</span>
                        </div>
                        <span className="text-2xl font-extrabold text-cyan-400">₹{car.insideOutsidePrice}</span>
                      </div>
                      <button
                        onClick={() => onBookService(`${car.category} - Inside + Outside (₹${car.insideOutsidePrice})`)}
                        className="px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition-colors shadow-md shadow-cyan-500/20"
                      >
                        Select
                      </button>
                    </div>

                  </div>
                </div>

                <button
                  onClick={() => onBookService(`${car.category} Cleaning`)}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-slate-800 to-slate-900 hover:from-cyan-500 hover:to-blue-600 text-slate-200 hover:text-slate-950 font-bold text-sm border border-slate-700 hover:border-cyan-400 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>Book This Service</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

              </div>
            ))}
          </div>
        )}

        {/* BIKE PRICING SECTION */}
        {activeTab === 'bikes' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto animate-fadeIn">
            {BIKE_PRICING.map((bike, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 flex flex-col justify-between border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <div className="h-52 rounded-xl overflow-hidden mb-6 relative group border border-slate-700/50 shadow-lg">
                    <img
                      src={bike.image}
                      alt={bike.category}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-950/80 border border-cyan-500/40 backdrop-blur-md">
                      <Bike className="w-5 h-5 text-cyan-400" />
                      <span className="text-white font-extrabold text-lg">{bike.category}</span>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm mb-6">
                    {bike.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    
                    {/* Standard Wash */}
                    <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-center space-y-1">
                      <span className="text-xs text-slate-400 font-medium block">Standard Wash</span>
                      <span className="text-3xl font-extrabold text-white">₹{bike.washPrice}</span>
                      <button
                        onClick={() => onBookService(`${bike.category} - Wash (₹${bike.washPrice})`)}
                        className="w-full mt-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-colors"
                      >
                        Book Wash
                      </button>
                    </div>

                    {/* Wash + Polish */}
                    <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/40 text-center space-y-1">
                      <span className="text-xs text-cyan-300 font-semibold block">With Polish</span>
                      <span className="text-3xl font-extrabold text-cyan-400">₹{bike.withPolishPrice}</span>
                      <button
                        onClick={() => onBookService(`${bike.category} - With Polish (₹${bike.withPolishPrice})`)}
                        className="w-full mt-3 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition-colors shadow-md shadow-cyan-500/20"
                      >
                        Book Polish
                      </button>
                    </div>

                  </div>
                </div>

                <button
                  onClick={() => onBookService(`${bike.category} Service`)}
                  className="w-full py-3 rounded-xl bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-slate-200 font-bold text-sm border border-slate-700 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>Book This Service</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

              </div>
            ))}
          </div>
        )}

        {/* Pricing Bottom Call to Action */}
        <div className="mt-16 text-center">
          <button
            onClick={() => onBookService()}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-slate-950 font-bold text-base shadow-xl shadow-cyan-500/20 hover:scale-105 transition-all duration-300"
          >
            <span>Choose Your Service → Book Now</span>
          </button>
        </div>

      </div>
    </section>
  );
}
