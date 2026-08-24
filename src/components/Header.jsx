import React, { useState } from 'react';
import { Car, Menu, X, Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export default function Header({ onOpenBooking }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'About', href: '#about' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#090d16]/90 backdrop-blur-md border-b border-slate-800/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="DR CAR Car Washing Centre Logo"
              className="h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_12px_rgba(6,182,212,0.4)]"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Call & Book CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex flex-col text-right text-xs">
              <a href={`tel:${BUSINESS_INFO.phone}`} className="text-slate-200 hover:text-cyan-400 font-bold flex items-center justify-end gap-1.5 transition-colors">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>
              <a href={`tel:${BUSINESS_INFO.phoneSecondary}`} className="text-slate-400 hover:text-cyan-400 font-medium flex items-center justify-end gap-1.5 transition-colors">
                <span>{BUSINESS_INFO.phoneSecondary}</span>
              </a>
            </div>
            
            <button
              onClick={onOpenBooking}
              className="relative group overflow-hidden rounded-xl p-px font-semibold text-sm shadow-lg shadow-cyan-500/20"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 transition-all duration-300 group-hover:opacity-90"></span>
              <span className="relative block px-5 py-2.5 rounded-[11px] bg-[#090d16] text-white transition-all duration-300 group-hover:bg-transparent">
                Book Now
              </span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="px-3 py-1.5 rounded-lg bg-cyan-500 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/20"
            >
              Book Now
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c121e] border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800/70 hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-800 text-slate-100 font-medium text-sm border border-slate-700"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>Call {BUSINESS_INFO.phone}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20 text-center"
            >
              Book Your Wash Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
