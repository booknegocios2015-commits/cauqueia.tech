export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 w-full bg-stone-950 text-white py-16 px-5 sm:px-8 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <a href="#" onClick={scrollToTop} className="inline-flex items-center gap-3 mb-4">
              <span
                className="font-heading text-2xl tracking-tight text-white font-medium"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                CAUQUEIA®
              </span>
              <span className="text-2xl text-white">✳︎</span>
            </a>
            <p className="text-stone-400 text-sm max-w-sm leading-relaxed mb-6">
              Agencia de desarrollo y automatización con Inteligencia Artificial
              en Cauquenes, Región del Maule. Elevando la eficiencia y ventas
              de las empresas locales.
            </p>
            <p className="text-xs text-stone-500 font-mono">
              Cauquenes • Maule • Chile
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-widest text-amber-400 font-mono mb-4">
              Navegación
            </h4>
            <ul className="space-y-2 text-sm text-stone-300">
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Servicios Destacados
                </a>
              </li>
              <li>
                <a href="#testimonios" className="hover:text-white transition-colors">
                  Casos de Éxito & Testimonios
                </a>
              </li>
              <li>
                <a href="#ubicacion" className="hover:text-white transition-colors">
                  Ubicación Cauquenes
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white transition-colors">
                  Contacto & Cotización
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info & Legal */}
          <div className="md:col-span-4">
            <h4 className="text-xs uppercase tracking-widest text-amber-400 font-mono mb-4">
              Contacto Directo
            </h4>
            <p className="text-sm text-stone-300 mb-1">cauqueia.clientes@gmail.com</p>
            <p className="text-sm text-stone-300 mb-4">+56 9 5090 1627</p>

            <div className="flex gap-4 pt-2">
              <a
                href="https://wa.me/56950901627"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-full transition-colors"
              >
                WhatsApp Directo
              </a>
              <button
                type="button"
                onClick={scrollToTop}
                className="text-xs bg-amber-400/20 hover:bg-amber-400/30 text-amber-300 px-3 py-1.5 rounded-full transition-colors cursor-pointer"
              >
                Volver arriba ↑
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} CAUQUEIA®. Todos los derechos reservados.</p>
          <p>Automatización Inteligente para Negocios en Cauquenes, Chile.</p>
        </div>
      </div>
    </footer>
  );
}
