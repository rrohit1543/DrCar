import React from 'react';
import { Car, MapPin, Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export default function Footer({ onOpenBooking }) {
  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#050810] text-slate-400 border-t border-slate-800/80 pt-16 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="DR CAR Car Washing Centre Logo"
                className="h-14 w-auto object-contain drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]"
              />
            </div>

            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Professional Car & Bike Washing service located near D Mart, Nipania, Indore. Giving your vehicles a fresh, clean look at honest local prices.
            </p>

            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{BUSINESS_INFO.location}</span>
              </div>
              <div className="flex flex-col gap-1.5 text-xs text-slate-300">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-cyan-400 font-bold transition-colors">
                    {BUSINESS_INFO.phoneFormatted}
                  </a>
                  <span className="text-slate-600">|</span>
                  <a href={`tel:${BUSINESS_INFO.phoneSecondary}`} className="hover:text-cyan-400 font-bold transition-colors">
                    {BUSINESS_INFO.phoneSecondaryFormatted}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs font-medium text-slate-400 hover:text-cyan-400 transition-colors inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Box */}
          <div className="lg:col-span-4 space-y-4 p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <h4 className="text-white font-bold text-base">
              Ready for a Clean Drive?
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Contact us today or book your car or bike wash service online via WhatsApp.
            </p>

            <button
              onClick={onOpenBooking}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
            >
              <span>Book Your Wash</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 DR Car Washing. All Rights Reserved.</p>
          <p className="text-[11px] text-slate-600">Nipania, Indore • Vehicle Cleaning Services</p>
        </div>

      </div>
    </footer>
  );
}
