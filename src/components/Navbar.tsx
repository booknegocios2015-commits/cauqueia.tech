import { useState, useEffect } from 'react';

interface NavbarProps {
  onNavigate?: (sectionId: string) => void;
}

export function Navbar({ onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Testimonios', href: '#testimonios' },
    { label: 'Ubicación', href: '#ubicacion' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    if (onNavigate) {
      onNavigate(href.replace('#', ''));
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full px-5 sm:px-8 flex justify-between items-center transition-all duration-300 ${
          isScrolled
            ? 'py-3 sm:py-3.5 bg-white/85 backdrop-blur-md border-b border-black/10 shadow-xs'
            : 'py-4 sm:py-5 bg-transparent'
        }`}
      >
        {/* Logo Left */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex flex-row items-center gap-3 group"
        >
          <span
            className="font-heading text-[21px] sm:text-[26px] tracking-tight text-black font-medium leading-none"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            CAUQUEIA®
          </span>
          <span
            className="text-[25px] sm:text-[30px] text-black select-none leading-none inline-block transition-transform group-hover:rotate-45 duration-300"
            style={{ letterSpacing: '-0.02em' }}
          >
            ✳︎
          </span>
        </a>

        {/* Desktop Nav Links (Center, hidden below md) */}
        <nav className="hidden md:flex flex-row items-center text-[21px] lg:text-[23px] text-black tracking-tight font-normal">
          {navItems.map((item, idx) => (
            <span key={item.label} className="inline-flex items-center">
              <button
                type="button"
                onClick={() => handleLinkClick(item.href)}
                className="hover:opacity-60 transition-opacity cursor-pointer focus:outline-none"
              >
                {item.label}
              </button>
              {idx < navItems.length - 1 && <span className="mr-2">, </span>}
            </span>
          ))}
        </nav>

        {/* Desktop CTA (Right, hidden below md) */}
        <div className="hidden md:block">
          <button
            type="button"
            onClick={() => handleLinkClick('#contacto')}
            className="text-[21px] lg:text-[23px] text-black underline underline-offset-2 hover:opacity-60 transition-opacity cursor-pointer focus:outline-none font-normal"
          >
            Contáctanos
          </button>
        </div>

        {/* Mobile Hamburger (Visible below md) */}
        <button
          type="button"
          aria-label="Toggle Menu"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative z-50 flex flex-col justify-center items-center w-8 h-8 gap-[5px] focus:outline-none cursor-pointer"
        >
          <span
            className={`w-6 h-[2px] bg-black transition-all duration-300 transform ${
              isOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-black transition-all duration-300 ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-black transition-all duration-300 transform ${
              isOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </header>

      {/* Mobile Overlay Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-sm flex flex-col justify-center items-start px-8 gap-8 transition-all duration-300 md:hidden ${
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-6 text-left w-full max-w-sm">
          <span className="text-xs uppercase tracking-widest text-black/40 font-mono mb-2">
            Navegación
          </span>
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => handleLinkClick(item.href)}
              className="text-[32px] font-medium text-black text-left hover:opacity-60 transition-opacity"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 border-t border-black/10">
            <button
              type="button"
              onClick={() => handleLinkClick('#contacto')}
              className="text-[32px] font-medium text-black text-left underline underline-offset-4 hover:opacity-60 transition-opacity"
            >
              Contáctanos
            </button>
          </div>
          <p className="text-sm text-black/60 pt-6">
            Cauquenes, Región del Maule, Chile
          </p>
        </div>
      </div>
    </>
  );
}
