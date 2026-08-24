import React, { useState, useEffect } from 'react';
import { X, MessageSquare, Phone, Car, Bike, Sparkles, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export default function BookingModal({ isOpen, onClose, initialService = '' }) {
  const [vehicleCategory, setVehicleCategory] = useState('Hatchback');
  const [serviceType, setServiceType] = useState('Inside + Outside Washing');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (initialService) {
      setServiceType(initialService);
    }
  }, [initialService]);

  if (!isOpen) return null;

  const handleWhatsAppBooking = () => {
    const message = `Hi DR Car Washing, I would like to book a vehicle wash.%0A%0A*Booking Request Details:*%0A- *Vehicle Category:* ${vehicleCategory}%0A- *Service Selected:* ${serviceType}${notes ? `%0A- *Notes/Time:* ${notes}` : ''}%0A%0APlease confirm availability and location directions.`;
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${message}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#0c121e] rounded-2xl border border-slate-700 shadow-2xl p-6 sm:p-8 space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fast Booking</span>
          </div>
          <h3 className="text-2xl font-extrabold text-white">
            Book Your Wash Service
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm">
            DR Car Washing • Near D Mart, Nipania, Indore
          </p>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
              Select Vehicle Type
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: 'Hatchback', icon: Car },
                { label: 'Sedan', icon: Car },
                { label: 'SUV / XUV', icon: Car },
                { label: 'Premium Car', icon: Car },
                { label: 'Bike', icon: Bike },
                { label: 'Premium Bike', icon: Bike },
              ].map((v) => {
                const IconComp = v.icon;
                const isSelected = vehicleCategory === v.label;
                return (
                  <button
                    key={v.label}
                    type="button"
                    onClick={() => setVehicleCategory(v.label)}
                    className={`p-2.5 rounded-xl border text-xs font-bold flex items-center gap-2 transition-all ${
                      isSelected
                        ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <IconComp className="w-4 h-4 shrink-0" />
                    <span className="truncate">{v.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
              Cleaning Package
            </label>
            <select
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-cyan-500"
            >
              <option value="Outer Wash">Outer Wash Only</option>
              <option value="Inside + Outside Cleaning">Inside + Outside Cleaning</option>
              <option value="Bike Wash">Bike Wash</option>
              <option value="Bike Wash + Polish">Bike Wash + Polish</option>
              <option value="Premium Bike Wash">Premium Bike Wash</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
              Preferred Date / Time (Optional)
            </label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Today around 3 PM"
              className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-cyan-500"
            />
          </div>

        </div>

        {/* Modal CTAs */}
        <div className="space-y-3 pt-2">
          <button
            onClick={handleWhatsAppBooking}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-extrabold text-sm shadow-xl shadow-emerald-500/20 hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Confirm Booking on WhatsApp</span>
          </button>

          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="w-full py-3 rounded-xl bg-slate-800 text-slate-300 font-semibold text-xs border border-slate-700 hover:text-white flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-cyan-400" />
            <span>Or Call Direct: {BUSINESS_INFO.phone}</span>
          </a>
        </div>

      </div>
    </div>
  );
}
