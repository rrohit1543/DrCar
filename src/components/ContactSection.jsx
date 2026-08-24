import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Sparkles, Send, Calendar, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export default function ContactSection({ prefilledService }) {
  const todayStr = new Date().toISOString().split('T')[0];

  const [vehicleType, setVehicleType] = useState('Hatchback Car');
  const [serviceOption, setServiceOption] = useState('Inside + Outside Cleaning');
  const [bookingDate, setBookingDate] = useState(todayStr);
  const [timeSlot, setTimeSlot] = useState('10:00 AM - 11:00 AM');

  const timeSlots = [
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '12:00 PM - 01:00 PM',
    '01:00 PM - 02:00 PM',
    '02:00 PM - 03:00 PM',
    '03:00 PM - 04:00 PM',
    '04:00 PM - 05:00 PM',
    '05:00 PM - 06:00 PM',
    '06:00 PM - 07:00 PM',
    '07:00 PM - 08:00 PM',
  ];

  const generateWhatsAppUrl = () => {
    const text = `Hi DR Car Washing, I would like to book a vehicle wash. Please share the available time and service options.%0A%0A*Booking Details:*%0A- *Vehicle:* ${vehicleType}%0A- *Service:* ${serviceOption}%0A- *Date:* ${bookingDate}%0A- *Time Slot:* ${timeSlot}`;
    return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${text}`;
  };

  return (
    <section id="contact" className="py-24 relative bg-[#060a12] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Direct Phone & WhatsApp CTA Box */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Instant Contact</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ready to Give Your Vehicle a <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">Fresh Look?</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Book your car or bike wash today. Contact DR Car Washing for service availability and booking.
            </p>

            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium block">Phone Number</span>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="text-2xl font-extrabold text-white hover:text-cyan-400 transition-colors">
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                <div className="p-3.5 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium block">Location</span>
                  <span className="text-sm font-semibold text-slate-200">
                    {BUSINESS_INFO.location}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-base border border-slate-700 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg"
              >
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>Call Now</span>
              </a>

              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-extrabold text-base shadow-xl shadow-emerald-500/20 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <MessageSquare className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Interactive Booking Generator Form */}
          <div className="lg:col-span-6">
            <div className="glass-card rounded-2xl p-8 border border-slate-800 shadow-2xl relative space-y-4">
              
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Send className="w-5 h-5 text-cyan-400" />
                  Quick WhatsApp Booking
                </h3>
                <p className="text-slate-400 text-xs">
                  Select your vehicle, preferred date, and 10 AM - 8 PM time slot to generate your instant WhatsApp message.
                </p>
              </div>

              {/* Vehicle Selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Vehicle Category
                </label>
                <select
                  value={vehicleType}
                  onChange={(e) => setVehicleType(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-cyan-500"
                >
                  <option value="Hatchback Car">Hatchback Car</option>
                  <option value="Sedan Car">Sedan Car</option>
                  <option value="SUV / XUV Car">SUV / XUV Car</option>
                  <option value="Premium Luxury Car">Premium Luxury Car</option>
                  <option value="Standard Bike">Standard Bike / Scooter</option>
                  <option value="Premium Bike">Premium Sports Bike</option>
                </select>
              </div>

              {/* Service Selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Desired Wash Service
                </label>
                <select
                  value={serviceOption}
                  onChange={(e) => setServiceOption(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-cyan-500"
                >
                  <option value="Outer Wash Only">Outer Wash Only</option>
                  <option value="Inside + Outside Cleaning">Inside + Outside Cleaning</option>
                  <option value="Standard Bike Wash">Standard Bike Wash</option>
                  <option value="Bike Wash + Polish">Bike Wash + Polish</option>
                  <option value="Premium Bike Service">Premium Bike Service</option>
                </select>
              </div>

              {/* Date & Time Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Select Date</span>
                  </label>
                  <input
                    type="date"
                    min={todayStr}
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Time Slot (10 AM - 8 PM)</span>
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-cyan-500"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Submit to WhatsApp */}
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-4 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-slate-950 font-bold text-sm shadow-xl shadow-cyan-500/25 hover:opacity-95 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Send Booking Request via WhatsApp</span>
              </a>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
