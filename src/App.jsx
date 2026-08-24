import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import VehicleCategories from './components/VehicleCategories';
import WhyChooseUs from './components/WhyChooseUs';
import HowItWorks from './components/HowItWorks';
import SpecialBanner from './components/SpecialBanner';
import Gallery from './components/Gallery';
import LocationSection from './components/LocationSection';
import FAQSection from './components/FAQSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import MobileBottomBar from './components/MobileBottomBar';
import BookingModal from './components/BookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleOpenBooking = (serviceName = '') => {
    setSelectedService(serviceName);
    setIsBookingOpen(true);
  };

  const handleSelectCategory = (categoryTitle) => {
    setSelectedService(`${categoryTitle} Wash`);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 selection:bg-cyan-500 selection:text-slate-950 font-sans">
      
      {/* Sticky Header Navbar */}
      <Header onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenBooking={() => handleOpenBooking()} />
        <About />
        <Services onSelectService={(service) => handleOpenBooking(service)} />
        <Pricing onBookService={(service) => handleOpenBooking(service)} />
        <VehicleCategories onSelectCategory={handleSelectCategory} />
        <WhyChooseUs />
        <HowItWorks onOpenBooking={() => handleOpenBooking()} />
        <SpecialBanner onOpenBooking={() => handleOpenBooking()} />
        <Gallery />
        <LocationSection />
        <FAQSection />
        <TestimonialsSection />
        <ContactSection prefilledService={selectedService} />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Sticky Mobile Bottom Bar */}
      <MobileBottomBar onOpenBooking={() => handleOpenBooking()} />

      {/* Booking Dialog Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={selectedService}
      />

    </div>
  );
}
