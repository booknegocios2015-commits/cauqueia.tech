import { useState } from 'react';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
  onShowToast: (msg: string) => void;
}

export function ServicesSection({
  onSelectService,
  onShowToast,
}: ServicesSectionProps) {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const services = [
    {
      id: 'agentes-ia',
      title: 'Agentes de IA y Atención 24/7',
      category: 'Inteligencia Artificial',
      badge: 'Más Popular',
      desc: 'Atiende clientes en WhatsApp, Instagram y Web de forma automática, humana y sin interrupciones.',
      details: [
        'Respuesta instantánea a cotizaciones en <3 segundos',
        'Integración nativa con WhatsApp Business API y CRM',
        'Capacitado con la información exacta de tus productos o servicios',
        'Derivación inteligente a un asesor humano cuando se requiere',
      ],
      impact: '+320% en conversión de clientes potenciales',
    },
    {
      id: 'embudo-funnel-ia',
      title: 'Embudo de Venta Funnel IA',
      category: 'Marketing & Conversión',
      badge: 'Búsqueda de Cliente Ideal',
      desc: 'Publicidad en Meta (Facebook, Instagram, Threads) impulsada por IA para atraer, calificar y convertir clientes potenciales de alto valor.',
      details: [
        'Campañas optimizadas en Meta Ads (Facebook, Instagram y Threads)',
        'Segmentación avanzada por IA para encontrar a tu cliente ideal',
        'Captación y calificación automática de leads calificados y convertibles',
        'Conexión directa del embudo de ventas a tu WhatsApp o CRM',
      ],
      impact: 'Flujo constante de leads calificados y aumento en ventas',
    },
    {
      id: 'pos-punto-venta',
      title: 'Sistema POS Punto de Venta para Comercios',
      category: 'Punto de Venta & Gastronomía',
      badge: 'Incluye Kit Tablet + Impresoras',
      desc: 'Sistema POS completo para minimarkets, botillerías, cafeterías, restaurantes y emprendedores gastronómicos. Incluye Kit Tablet + Impresoras térmicas.',
      details: [
        'Incluye KIT Completo: Tablet de alto rendimiento + Impresoras térmicas',
        'Diseñado para Minimarket, Botillería, Cafetería, Restaurantes y Gastronomía',
        'Control de stock en tiempo real, caja diaria y boleta electrónica',
        'Interfaz táctil rápida e intuitiva para atención express al cliente',
      ],
      impact: 'Control total de inventario, ventas rápidas y caja en tiempo real',
    },
    {
      id: 'automatizacion',
      title: 'Automatización de Flujos & Facturación',
      category: 'Eficiencia Operativa',
      badge: 'Ahorro de Tiempo',
      desc: 'Elimina tareas repetitivas conectando tus planillas, facturación electrónica SII, inventario y correos.',
      details: [
        'Sincronización automática de inventario y pedidos',
        'Generación y envío automático de cotizaciones en PDF',
        'Recordatorios de pago y cobranza por WhatsApp',
        'Notificaciones de stock crítico para comercios en Cauquenes',
      ],
      impact: 'Reducción de 15+ horas semanales de trabajo manual',
    },
    {
      id: 'web-seo',
      title: 'Desarrollo Web & SEO Local Cauquenes',
      category: 'Presencia Digital',
      badge: 'Alta Conversión',
      desc: 'Sitios web ultra rápidos, optimizados para Google en Cauquenes y la Región del Maule.',
      details: [
        'Diseño responsive moderno de carga instantánea',
        'Posicionamiento orgánico en Google para búsquedas locales',
        'Botones de llamado a la acción (WhatsApp, Llamadas, Mapa)',
        'Panel de administración amigable sin conocimientos técnicos',
      ],
      impact: '#1 en Google para clientes de Cauquenes y alrededores',
    },
    {
      id: 'crm-analytics',
      title: 'Integración CRM & Business Intelligence',
      category: 'Datos & Decisiones',
      badge: 'Estratégico',
      desc: 'Centraliza tus ventas y consulta el rendimiento de tu negocio usando datos procesados por IA.',
      details: [
        'Dashboard interactivo con métricas clave de venta',
        'Segmentación automática de clientes recurrentes',
        'Pronósticos de demanda para fechas clave del comercio local',
        'Reportes semanales automáticos a tu WhatsApp o Email',
      ],
      impact: 'Claridad total de ingresos y margen en tiempo real',
    },
  ];

  return (
    <section
      id="servicios"
      className="relative z-10 w-full bg-stone-900 text-white py-24 sm:py-32 px-5 sm:px-8 md:px-12 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-amber-400 font-mono block mb-3">
              ✳︎ Soluciones Tecnológicas
            </span>
            <h2
              className="text-3xl sm:text-5xl font-medium tracking-tight text-white font-heading"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Servicios Destacados
            </h2>
          </div>
          <p className="text-stone-400 max-w-md text-base sm:text-lg leading-relaxed">
            Impulsamos la productividad de pequeñas, medianas y grandes empresas
            en Cauquenes con herramientas de Inteligencia Artificial a la
            medida.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s) => (
            <div
              key={s.id}
              className="group relative bg-stone-800/60 hover:bg-stone-800 border border-white/10 hover:border-white/20 rounded-2xl p-8 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-amber-400/90">
                    {s.category}
                  </span>
                  <span className="text-xs font-medium bg-white/10 text-white px-3 py-1 rounded-full border border-white/10">
                    {s.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-medium text-white mb-3 group-hover:text-amber-300 transition-colors">
                  {s.title}
                </h3>
                <p className="text-stone-300 text-base mb-6 leading-relaxed">
                  {s.desc}
                </p>

                <div className="bg-stone-900/50 rounded-xl p-4 mb-6 border border-white/5">
                  <span className="text-xs text-stone-400 block mb-1">
                    Impacto Estimado:
                  </span>
                  <span className="text-sm font-medium text-amber-300">
                    {s.impact}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => {
                    onSelectService(s.title);
                    onShowToast(`Seleccionado: ${s.title}`);
                    const el = document.querySelector('#contacto');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex-1 inline-flex items-center justify-center bg-white text-black hover:bg-amber-300 font-medium text-sm px-5 py-3 rounded-xl transition-colors cursor-pointer"
                >
                  Solicitar Auditoría ➔
                </button>
                <button
                  type="button"
                  onClick={() => setActiveModal(s.id)}
                  className="inline-flex items-center justify-center bg-transparent text-white hover:bg-white/10 border border-white/20 text-sm px-4 py-3 rounded-xl transition-colors cursor-pointer"
                >
                  Ver Detalles
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Global CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-stone-800 via-stone-800 to-amber-950/40 rounded-3xl p-8 sm:p-12 border border-white/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-3xl">
            <h3 className="text-2xl sm:text-3xl font-medium text-white mb-3">
              ¿Tienes un requerimiento específico para tu empresa o sector?
            </h3>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-6">
              Diseñamos e implementamos soluciones a medida para Servicios Industriales, Packing, Agroindustria, Ganadero y Silvícola, Industria Manufacturera, Transporte, Logística y Almacenamiento, Construcción e Inmobiliaria, Turismo, Hotelería y Gastronomía, Energía y Servicios Básicos, Servicios Profesionales y Financieros, y Empresas Exportadoras.
            </p>

            {/* Industry Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                'Servicios Industriales',
                'Packing',
                'Agroindustria',
                'Ganadero y Silvícola',
                'Industria Manufacturera',
                'Transporte, Logística y Almacenamiento',
                'Construcción e Inmobiliaria',
                'Turismo, Hotelería y Gastronomía',
                'Energía y Servicios Básicos',
                'Servicios Profesionales y Financieros',
                'Exportadoras',
              ].map((sector) => (
                <span
                  key={sector}
                  className="bg-white/10 hover:bg-amber-400 hover:text-black transition-colors border border-white/10 text-stone-200 text-xs px-3 py-1.5 rounded-full font-medium"
                >
                  {sector}
                </span>
              ))}
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              onSelectService('Solución Personalizada a Medida');
              const el = document.querySelector('#contacto');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="whitespace-nowrap bg-amber-400 hover:bg-amber-300 text-black font-medium px-8 py-4 rounded-full text-base transition-all transform hover:scale-105 cursor-pointer shadow-lg shrink-0"
          >
            Hablar con un Experto
          </button>
        </div>
      </div>

      {/* Modal for Service Details */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-stone-900 border border-white/20 rounded-2xl max-w-lg w-full p-6 sm:p-8 relative text-white">
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-stone-400 hover:text-white text-xl p-2"
            >
              ✕
            </button>
            {(() => {
              const item = services.find((s) => s.id === activeModal);
              if (!item) return null;
              return (
                <div>
                  <span className="text-xs font-mono uppercase text-amber-400 block mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-2xl font-medium text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-stone-300 text-sm mb-6 leading-relaxed">
                    {item.desc}
                  </p>
                  <h4 className="text-xs uppercase tracking-wider text-stone-400 mb-3 font-mono">
                    ¿Qué incluye este servicio?
                  </h4>
                  <ul className="space-y-2 mb-6 text-sm text-stone-200">
                    {item.details.map((d) => (
                      <li key={d} className="flex items-start gap-2">
                        <span className="text-amber-400">✓</span> {d}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-white/10 flex gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setActiveModal(null);
                        onSelectService(item.title);
                        const el = document.querySelector('#contacto');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full bg-white text-black hover:bg-amber-300 font-medium py-3 rounded-xl transition-colors"
                    >
                      Solicitar Auditoría
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}
    </section>
  );
}
