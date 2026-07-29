import React, { useState } from 'react';

interface ContactSectionProps {
  selectedService: string;
  onShowToast: (msg: string) => void;
}

export function ContactSection({
  selectedService,
  onShowToast,
}: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    service: selectedService || 'Agentes de IA y Atención 24/7',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      onShowToast('Por favor completa tu nombre y correo electrónico.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      onShowToast('✓ Redirigiendo a WhatsApp...');

      const messageText = `Hola Cauqueia! Me gustaría solicitar información / cotización.

📌 *Nombre:* ${formData.name}
✉️ *Correo:* ${formData.email}
📞 *Teléfono/WhatsApp:* ${formData.phone || 'No especificado'}
🏢 *Empresa/Negocio:* ${formData.businessName || 'No especificado'}
🎯 *Servicio Requerido:* ${formData.service}
💬 *Mensaje:* ${formData.message || 'Sin mensaje adicional'}`;

      const whatsappUrl = `https://wa.me/56950901627?text=${encodeURIComponent(messageText)}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }, 500);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hola Cauqueia! Soy ${formData.name || 'un cliente'}. Me interesa consultar sobre: ${
        formData.service
      }. ${formData.message ? `Detalles: ${formData.message}` : ''}`
    );
    window.open(`https://wa.me/56950901627?text=${text}`, '_blank');
    onShowToast('Abriendo WhatsApp directo con Cauqueia...');
  };

  return (
    <section
      id="contacto"
      className="relative z-10 w-full bg-stone-900 text-white py-24 sm:py-32 px-5 sm:px-8 md:px-12 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Heading & Value Prop */}
        <div className="lg:col-span-5">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-mono block mb-3">
            ✳︎ Formulario de Contacto Directo
          </span>
          <h2
            className="text-3xl sm:text-5xl font-medium tracking-tight text-white mb-6 font-heading"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Automatiza tu Negocio Hoy
          </h2>
          <p className="text-stone-300 text-base sm:text-lg leading-relaxed mb-8">
            Cuéntanos sobre tu negocio en Cauquenes y te enviaremos una propuesta
            personalizada con demostración en vivo de agentes de IA y
            automatizaciones.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-2xl">⚡</span>
              <div>
                <h4 className="text-white font-medium text-base mb-1">
                  Respuesta Inmediata
                </h4>
                <p className="text-stone-400 text-sm">
                  Procesamos tu solicitud con A.R.I.A para agendar tu demo en el
                  horario que más te acomode.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-2xl">📍</span>
              <div>
                <h4 className="text-white font-medium text-base mb-1">
                  Atención Presencial o Remota
                </h4>
                <p className="text-stone-400 text-sm">
                  Atendemos directamente en la Comuna de Cauquenes y Región del
                  Maule.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-col gap-3">
            <span className="text-xs text-stone-400 font-mono uppercase">
              ¿Prefieres WhatsApp directo?
            </span>
            <button
              type="button"
              onClick={handleWhatsAppDirect}
              className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-6 py-3.5 rounded-xl transition-colors gap-2 cursor-pointer w-fit"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
              </svg>
              Escribir a WhatsApp
            </button>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="lg:col-span-7 bg-stone-800/80 border border-white/10 rounded-3xl p-8 sm:p-10 relative">
          {submitted ? (
            <div className="text-center py-12">
              <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 text-3xl mb-4">
                ✓
              </span>
              <h3 className="text-2xl font-medium text-white mb-2">
                ¡Solicitud Lista para WhatsApp!
              </h3>
              <p className="text-stone-300 text-sm max-w-md mx-auto mb-6 leading-relaxed">
                Hemos preparado tu mensaje con toda la información ingresada. Si WhatsApp no se abrió automáticamente, haz clic abajo para contactar a <strong>+569 5090 1627</strong>.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-6 py-3 rounded-xl text-sm transition-colors cursor-pointer flex items-center gap-2"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                  </svg>
                  Abrir WhatsApp (+569 5090 1627)
                </button>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-3 rounded-xl text-sm transition-colors cursor-pointer"
                >
                  Enviar Otro Mensaje
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-300 font-mono mb-2">
                    Tu Nombre *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. María González"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-stone-900 border border-white/15 focus:border-amber-400 rounded-xl px-4 py-3 text-white placeholder-stone-500 text-sm focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-300 font-mono mb-2">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="maria@empresa.cl"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-stone-900 border border-white/15 focus:border-amber-400 rounded-xl px-4 py-3 text-white placeholder-stone-500 text-sm focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-300 font-mono mb-2">
                    Teléfono / WhatsApp
                  </label>
                  <input
                    type="tel"
                    placeholder="+56 9 1234 5678"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full bg-stone-900 border border-white/15 focus:border-amber-400 rounded-xl px-4 py-3 text-white placeholder-stone-500 text-sm focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-300 font-mono mb-2">
                    Nombre del Negocio
                  </label>
                  <input
                    type="text"
                    placeholder="Ej. Comercial Cauquenes"
                    value={formData.businessName}
                    onChange={(e) =>
                      setFormData({ ...formData, businessName: e.target.value })
                    }
                    className="w-full bg-stone-900 border border-white/15 focus:border-amber-400 rounded-xl px-4 py-3 text-white placeholder-stone-500 text-sm focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-stone-300 font-mono mb-2">
                  Servicio Requerido
                </label>
                <select
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  className="w-full bg-stone-900 border border-white/15 focus:border-amber-400 rounded-xl px-4 py-3 text-white text-sm focus:outline-none transition-colors"
                >
                  <option value="Agentes de IA y Atención 24/7">
                    Agentes de IA y Atención 24/7
                  </option>
                  <option value="Embudo de Venta Funnel IA">
                    Embudo de Venta Funnel IA (Meta Ads + IA)
                  </option>
                  <option value="Sistema POS Punto de Venta para Comercios">
                    Sistema POS Punto de Venta (Kit Tablet + Impresoras)
                  </option>
                  <option value="Automatización de Flujos & Facturación">
                    Automatización de Flujos & Facturación
                  </option>
                  <option value="Desarrollo Web & SEO Local Cauquenes">
                    Desarrollo Web & SEO Local Cauquenes
                  </option>
                  <option value="Integración CRM & Business Intelligence">
                    Integración CRM & Business Intelligence
                  </option>
                  <option value="Solución Personalizada a Medida">
                    Solución Personalizada a Medida
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-stone-300 font-mono mb-2">
                  ¿En qué podemos ayudarte?
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe brevemente tus objetivos o procesos actuales..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-stone-900 border border-white/15 focus:border-amber-400 rounded-xl px-4 py-3 text-white placeholder-stone-500 text-sm focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-white font-medium py-4 rounded-xl transition-all cursor-pointer text-base shadow-lg disabled:opacity-50 flex items-center justify-center gap-2.5"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Procesando datos...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                    </svg>
                    <span>Enviar Solicitud por WhatsApp (+569 5090 1627)</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
