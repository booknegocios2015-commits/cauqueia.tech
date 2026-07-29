import { useState } from 'react';
import { BackgroundVideo } from './components/BackgroundVideo';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';

export default function App() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string>(
    'Agentes de IA y Atención 24/7'
  );

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 4000);
  };

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-white text-black font-body selection:bg-amber-300 selection:text-black">
      {/* Background Video with Mouse Scrubbing */}
      <BackgroundVideo />

      {/* Navigation Header */}
      <Navbar onNavigate={handleNavigate} />

      {/* Hero Section */}
      <HeroSection onShowToast={showToast} onNavigate={handleNavigate} />

      {/* Additional High-Converting Landing Page Sections */}
      <main className="relative z-10">
        <ServicesSection
          onSelectService={(service) => setSelectedService(service)}
          onShowToast={showToast}
        />

        <TestimonialsSection />

        <LocationSection onShowToast={showToast} />

        <ContactSection
          selectedService={selectedService}
          onShowToast={showToast}
        />
      </main>

      {/* Professional Footer */}
      <Footer />

      {/* Toast Notification */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}
