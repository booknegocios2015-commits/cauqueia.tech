import { useState, useEffect } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';

interface HeroSectionProps {
  onShowToast: (msg: string) => void;
  onNavigate: (sectionId: string) => void;
}

export function HeroSection({ onShowToast, onNavigate }: HeroSectionProps) {
  const [showPills, setShowPills] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);

  // Core typewriter prompt
  const typewriterText =
    'Automatización y Optimización para Empresas Medianas y en Crecimiento con IA';

  const { displayed, done } = useTypewriter({
    text: typewriterText,
    speed: 38,
    startDelay: 600,
  });

  useEffect(() => {
    // Action pills appear 400ms after page load
    const timer = setTimeout(() => {
      setShowPills(true);
    }, 400);

    // Intro label starts clear and blurs/pixelates after 1.4s
    const blurTimer = setTimeout(() => {
      setIsBlurred(true);
    }, 1400);

    return () => {
      clearTimeout(timer);
      clearTimeout(blurTimer);
    };
  }, []);

  const handleWhatsApp = () => {
    onShowToast('💬 Contactando por WhatsApp...');
    window.open(
      'https://wa.me/56950901627?text=Hola%20Cauqueia,%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20automatizaciones%20e%20IA%20para%20mi%20negocio',
      '_blank',
      'noopener,noreferrer'
    );
  };

  const whitePills = [
    {
      label: 'Proponer una idea',
      action: () => {
        onNavigate('contacto');
        onShowToast('💡 Cuéntanos tu idea para tu negocio en Cauquenes');
      },
    },
    {
      label: 'Enviar un mensaje',
      action: () => {
        onNavigate('contacto');
        onShowToast('👋 ¡Hola! Completa el formulario y te responderemos de inmediato');
      },
    },
    {
      label: 'Ver cómo trabajamos',
      action: () => {
        onNavigate('testimonios');
        onShowToast('✨ Mira nuestros casos de éxito y testimonios');
      },
    },
  ];

  return (
    <section className="relative z-1 w-full h-screen flex flex-col justify-end pb-12 md:justify-center md:pb-0 px-5 sm:px-8 md:px-10 overflow-hidden pointer-events-none">
      <div className="max-w-3xl relative z-10 pointer-events-auto">
        {/* 1. Blurred Intro Label */}
        <div
          className="pointer-events-none select-none mb-5 sm:mb-6 text-black font-normal transition-all"
          style={{
            fontSize: 'clamp(22px, 4.5vw, 36px)',
            lineHeight: '1.25',
            filter: isBlurred ? 'blur(4px)' : 'blur(0px)',
            opacity: isBlurred ? 0.85 : 1,
            transition: 'filter 1.2s ease-in-out, opacity 1.2s ease-in-out',
          }}
        >
          Hola, conoce a A.R.I.A,
          <br />
          Agente de Respuesta Adaptativa de Cauqueia
        </div>

        {/* 2. Typewriter text H1 for SEO */}
        <h1
          className="text-black mb-4 sm:mb-5 font-medium min-h-[60px] break-words tracking-tight"
          style={{
            fontSize: 'clamp(26px, 5vw, 46px)',
            lineHeight: '1.25',
          }}
        >
          {displayed}
          {!done && (
            <span
              className="inline-block w-[3px] h-[1.1em] bg-black align-middle ml-[3px] animate-blink"
              aria-hidden="true"
            />
          )}
        </h1>

        {/* 2b. Subtitle H2 */}
        <h2 className="text-black/80 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-2xl">
          Implementamos Workflows y agentes de IA, automatización de procesos, atención al cliente 24/7 y soluciones digitales para aumentar la productividad, optimizar operaciones y acelerar el crecimiento de tu empresa.
        </h2>

        {/* 3. Action Pill Buttons */}
        <div
          className={`flex flex-wrap gap-y-1 transition-all duration-400 ${
            showPills
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-[8px]'
          }`}
          style={{
            transitionProperty: 'opacity, transform',
            transitionDuration: '0.4s',
            transitionTimingFunction: 'ease',
          }}
        >
          {/* 4 White Pill Buttons */}
          {whitePills.map((pill) => (
            <button
              key={pill.label}
              type="button"
              onClick={pill.action}
              className="inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer shadow-xs focus:outline-none"
            >
              {pill.label}
            </button>
          ))}

          {/* WhatsApp Pill Button */}
          <button
            type="button"
            onClick={handleWhatsApp}
            className="inline-flex items-center justify-center bg-[#25D366] text-white border border-[#25D366] rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap gap-2 hover:bg-[#20ba5a] transition-colors duration-200 cursor-pointer shadow-xs focus:outline-none font-medium"
          >
            <svg
              className="w-4 h-4 flex-shrink-0 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            <span>WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
}
