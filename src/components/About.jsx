import React from 'react';
import { ShieldCheck, Award, Sparkles, Check } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-[#0a0f1d]/80 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Box / Official DR CAR Wash Bay Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden border border-cyan-500/40 shadow-2xl shadow-cyan-950/50 group h-[380px]">
              <img
                src="/drcar-washing-bay-studio.jpg"
                alt="DR CAR Premium Car Wash & Detailing Center Bay"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent opacity-80"></div>
              
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-slate-950/90 border border-slate-700/80 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-cyan-500/20 text-cyan-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">Local Nipania Favorite</h4>
                    <p className="text-slate-400 text-xs">Trusted Car & Bike Wash Near D Mart</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Glowing Accent Ring */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"></div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>
          </div>

          {/* About Copy Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Us</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              About <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">DR Car Washing</span>
            </h2>

            <div className="space-y-4 text-slate-300 text-base leading-relaxed">
              <p>
                At DR Car Washing, we believe a clean vehicle is more than just about appearance. Regular cleaning helps maintain your vehicle's fresh look and gives you a better driving experience.
              </p>
              <p>
                We provide convenient and affordable washing services for cars and bikes in Nipania, Indore, with options designed for different vehicle types and cleaning needs.
              </p>
              <p>
                Whether you need a quick exterior wash or a more complete inside-and-out cleaning, DR Car Washing offers straightforward services at competitive prices.
              </p>
            </div>

            {/* Slogan Banner */}
            <div className="pt-4">
              <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/60 to-slate-900 border border-cyan-500/40 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <p className="text-cyan-300 font-extrabold text-sm sm:text-base tracking-wide">
                    {BUSINESS_INFO.slogan}
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
