import { useState } from 'react';

interface LocationSectionProps {
  onShowToast: (msg: string) => void;
}

export function LocationSection({ onShowToast }: LocationSectionProps) {
  const [activeTab, setActiveTab] = useState<'map' | 'details'>('map');

  return (
    <section
      id="ubicacion"
      className="relative z-10 w-full bg-white text-black py-24 sm:py-32 px-5 sm:px-8 md:px-12 border-t border-black/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-black/50 font-mono block mb-3">
              ✳︎ Presencia Local
            </span>
            <h2
              className="text-3xl sm:text-5xl font-medium tracking-tight text-black font-heading"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Ubicación en Cauquenes
            </h2>
          </div>
          <p className="text-stone-600 max-w-md text-base sm:text-lg">
            Estamos ubicados en el corazón de la Región del Maule. Ofrecemos
            atención presencial y consultoría tecnológica a empresas locales.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Info Column */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-stone-50 border border-black/10 rounded-3xl p-8 sm:p-10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-xs font-mono uppercase tracking-wider text-black/60">
                  Oficina Central — Cauquenes, Chile
                </span>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-mono uppercase text-stone-500 mb-1">
                    Dirección
                  </h4>
                  <p className="text-lg font-medium text-black">
                    Centro Histórico / Plaza de Armas
                  </p>
                  <p className="text-sm text-stone-600">
                    Cauquenes, Región del Maule, Chile
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase text-stone-500 mb-1">
                    Atención Telefónica / WhatsApp
                  </h4>
                  <p className="text-lg font-medium text-black">
                    +56 9 5090 1627
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase text-stone-500 mb-1">
                    Horario de Atención
                  </h4>
                  <p className="text-base text-black font-medium">
                    Lunes a Viernes: 09:00 – 19:00 hrs
                  </p>
                  <p className="text-xs text-stone-500">
                    Sábados (Soporte IA Automatizado 24/7)
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase text-stone-500 mb-1">
                    Correo Oficial
                  </h4>
                  <p className="text-base font-medium text-black underline">
                    cauqueia.clientes@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-8 border-t border-black/10 mt-8 flex flex-wrap gap-3">
              <a
                href="https://maps.google.com/?q=Cauquenes+Chile"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => onShowToast('Abriendo Google Maps en Cauquenes...')}
                className="flex-1 inline-flex items-center justify-center bg-black hover:bg-stone-800 text-white font-medium px-5 py-3 rounded-xl text-sm transition-colors text-center cursor-pointer"
              >
                Ver en Google Maps ↗
              </a>
              <button
                type="button"
                onClick={() => {
                  window.open('tel:+56950901627');
                  onShowToast('Iniciando llamada telefónica...');
                }}
                className="inline-flex items-center justify-center bg-stone-200 hover:bg-stone-300 text-black font-medium px-5 py-3 rounded-xl text-sm transition-colors cursor-pointer"
              >
                📞 Llamar
              </button>
            </div>
          </div>

          {/* Map Column */}
          <div className="lg:col-span-7 bg-stone-100 border border-black/10 rounded-3xl overflow-hidden min-h-[400px] relative flex flex-col">
            <div className="p-4 bg-white border-b border-black/5 flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-black/60">
                Mapa Interactivo — Comuna de Cauquenes
              </span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setActiveTab('map')}
                  className={`text-xs font-medium px-3 py-1 rounded-full ${
                    activeTab === 'map'
                      ? 'bg-black text-white'
                      : 'bg-stone-200 text-black'
                  }`}
                >
                  Vista Mapa
                </button>
              </div>
            </div>

            <div className="w-full h-full min-h-[380px] flex-1 relative">
              <iframe
                title="Mapa de Ubicación Cauquenes Chile"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51624.43729384594!2d-72.3556098!3d-35.9678887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9668470a1608ebed%3A0x8e5fbd6e60b13853!2sCauquenes%2C%20Maule%2C%20Chile!5e0!3m2!1ses-419!2scl!4v1700000000000!5m2!1ses-419!2scl"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
