import { useState } from 'react';

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote:
        'Implementar el agente de IA de Mainframe transformó nuestra atención al cliente. En Cauquenes la gente busca respuestas rápidas; ahora capturamos consultas a cualquier hora sin perder prospectos.',
      name: 'Matías Sepúlveda',
      role: 'Director de Operaciones',
      company: 'AgroComercial Maule Sur',
      location: 'Cauquenes, Chile',
      metrics: '3x Leads Respondidos',
      rating: 5,
    },
    {
      id: 2,
      quote:
        'Nos automatizaron la emisión de presupuestos e inventarios. Antes pasábamos tardes completas en planillas, hoy todo fluye de forma autónoma con notificaciones a nuestro WhatsApp.',
      name: 'Carolina Arellano',
      role: 'Gerente General',
      company: 'Viña & Turismo Valles del Maule',
      location: 'Cauquenes',
      metrics: '-80% Tiempo Administrativo',
      rating: 5,
    },
    {
      id: 3,
      quote:
        'El desarrollo web con IA y SEO local superó nuestras expectativas. Logramos estar en el primer lugar de Google para servicios profesionales en la provincia de Cauquenes en menos de 60 días.',
      name: 'Gonzalo Muñoz',
      role: 'Socio Fundador',
      company: 'Consultora Integral Cauquenes',
      location: 'Centro de Cauquenes',
      metrics: '+240% Visitas Orgánicas',
      rating: 5,
    },
  ];

  return (
    <section
      id="testimonios"
      className="relative z-10 w-full bg-white text-black py-24 sm:py-32 px-5 sm:px-8 md:px-12 border-t border-black/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-black/50 font-mono block mb-3">
              ✳︎ Casos de Éxito Locales
            </span>
            <h2
              className="text-3xl sm:text-5xl font-medium tracking-tight text-black font-heading"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Testimonios de Clientes
            </h2>
          </div>
          <p className="text-stone-600 max-w-md text-base sm:text-lg">
            Empresas locales en Cauquenes que ya están escalando sus ventas y
            operaciones con Inteligencia Artificial.
          </p>
        </div>

        {/* Highlight Card */}
        <div className="bg-stone-50 border border-black/10 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-sm">
          <div className="absolute top-6 right-8 text-amber-500 font-mono text-sm font-semibold flex items-center gap-1">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Empresa Verificada en Cauquenes
          </div>

          <div className="max-w-3xl">
            <div className="flex gap-1 text-amber-400 mb-6">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <span key={i} className="text-xl">
                  ★
                </span>
              ))}
            </div>

            <p className="text-xl sm:text-3xl text-black font-normal leading-relaxed mb-8">
              "{testimonials[activeIndex].quote}"
            </p>

            <div className="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-black/10">
              <div>
                <h4 className="text-lg font-medium text-black">
                  {testimonials[activeIndex].name}
                </h4>
                <p className="text-sm text-stone-500">
                  {testimonials[activeIndex].role} —{' '}
                  <span className="text-black font-medium">
                    {testimonials[activeIndex].company}
                  </span>{' '}
                  ({testimonials[activeIndex].location})
                </p>
              </div>

              <div className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium">
                {testimonials[activeIndex].metrics}
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 mt-8 pt-6 border-t border-black/5">
            {testimonials.map((t, idx) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === idx ? 'w-10 bg-black' : 'w-2.5 bg-black/20 hover:bg-black/40'
                }`}
                aria-label={`Ver testimonio ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div className="p-6 bg-stone-50 rounded-2xl border border-black/5">
            <span className="block text-3xl font-medium text-black font-heading mb-1">
              99.8%
            </span>
            <span className="text-xs text-stone-500 uppercase tracking-wider font-mono">
              Tiempo de Actividad
            </span>
          </div>
          <div className="p-6 bg-stone-50 rounded-2xl border border-black/5">
            <span className="block text-3xl font-medium text-black font-heading mb-1">
              +45
            </span>
            <span className="text-xs text-stone-500 uppercase tracking-wider font-mono">
              Proyectos Entregados
            </span>
          </div>
          <div className="p-6 bg-stone-50 rounded-2xl border border-black/5">
            <span className="block text-3xl font-medium text-black font-heading mb-1">
              24/7
            </span>
            <span className="text-xs text-stone-500 uppercase tracking-wider font-mono">
              Soporte Dedicado
            </span>
          </div>
          <div className="p-6 bg-stone-50 rounded-2xl border border-black/5">
            <span className="block text-3xl font-medium text-black font-heading mb-1">
              100%
            </span>
            <span className="text-xs text-stone-500 uppercase tracking-wider font-mono">
              Soporte Local Cauquenes
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
