import React from 'react';
import { MapPin, Phone, Navigation, ExternalLink, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export default function LocationSection() {
  return (
    <section id="location" className="py-24 relative bg-[#070b14] border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Location Info Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Easy Access</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Find <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">DR Car Washing</span>
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              Conveniently located near D Mart and Amrit Palace in Nipania, Indore. Drop by for a quick exterior or complete inside-out wash.
            </p>

            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base">Location Address</h4>
                  <p className="text-slate-300 text-sm mt-1">{BUSINESS_INFO.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-slate-800">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base">Call / WhatsApp</h4>
                  <p className="text-slate-300 text-sm mt-1">{BUSINESS_INFO.phoneFormatted}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Embedded Map Frame */}
          <div className="lg:col-span-7 h-[420px] rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative">
            <iframe
              title="DR Car Washing Location Map"
              src="https://maps.google.com/maps?q=D%20Mart%20Nipania%20Indore&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 filter grayscale invert contrast-125 opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 left-4 bg-slate-950/90 hover:bg-slate-900 border border-slate-700 hover:border-cyan-500/50 px-4 py-2 rounded-xl text-xs text-slate-200 hover:text-cyan-400 font-semibold backdrop-blur-md transition-all flex items-center gap-1.5 shadow-lg"
            >
              <span>📍 Near D Mart, Nipania, Indore</span>
              <ExternalLink className="w-3 h-3 text-cyan-400" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
