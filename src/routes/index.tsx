import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: SMILanding,
})

const services = [
  {
    id: 'seguridad-higiene',
    title: 'Seguridad e Higiene Laboral',
    description:
      'Implementación de sistemas de gestión, elaboración de programas preventivos, relevamientos de riesgo y documentación legal obligatoria según la normativa vigente.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M24 4L6 12V24C6 34.5 14.1 44.2 24 47C33.9 44.2 42 34.5 42 24V12L24 4Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M16 24L21 29L32 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 'izaje',
    title: 'Izaje y Movimiento de Cargas',
    description:
      'Capacitación certificada de operadores de grúas, autoelevadores, plumas y equipos de izaje. Formación teórico-práctica con evaluación y acreditación documental.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M8 40V16L24 8L40 16V40" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M24 8V20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M14 20H34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M24 20L14 32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M24 20L34 32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="14" cy="34" r="3" stroke="currentColor" strokeWidth="2"/>
        <circle cx="34" cy="34" r="3" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    id: 'altura',
    title: 'Trabajos en Altura',
    description:
      'Capacitación y evaluación de competencias para tareas en altura conforme a la Resolución SRT 503/14. Uso de EPP, sistemas de detención de caídas y rescate.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="20" y="4" width="8" height="12" rx="1" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M24 16V36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M12 28H36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M8 40L24 28L40 40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 36V44" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M30 36V44" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'electrico',
    title: 'Riesgo Eléctrico',
    description:
      'Formación en trabajos con y sin tensión, distancias de seguridad, uso de herramientas y EPP adecuados. Cumplimiento de la Res. SRT 900/15 y normas IRAM.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M28 4L10 26H22L18 44L38 22H26L28 4Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'asesoramiento',
    title: 'Asesoramiento Técnico',
    description:
      'Asistencia profesional continua en materia de seguridad, higiene y medicina del trabajo. Auditorías internas, gestión de incidentes y acompañamiento ante organismos de contralor.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M24 16V26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="24" cy="33" r="1.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    id: 'inspecciones',
    title: 'Inspecciones',
    description:
      'Relevamiento y evaluación de instalaciones, equipos y procesos. Identificación de no conformidades, elaboración de informes técnicos y planes de acción correctiva.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="21" cy="21" r="13" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M30.5 30.5L42 42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M15 21H27" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M21 15V27" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
]

const stats = [
  { value: '15+', label: 'Años de experiencia' },
  { value: '500+', label: 'Empresas asesoradas' },
  { value: '12.000+', label: 'Operadores capacitados' },
  { value: '100%', label: 'Comprometidos con la prevención' },
]

const certifications = [
  'Res. SRT 503/14 — Trabajos en altura',
  'Res. SRT 900/15 — Riesgo eléctrico',
  'Ley 19.587 — Higiene y Seguridad',
  'Dec. 351/79 — Reglamentación',
  'IRAM-ISO 45001',
  'Normas IRAM aplicables',
]

export default function SMILanding() {
  return (
    <div style={{ background: 'var(--dark-800)', minHeight: '100vh' }}>
      {/* ─── HEADER ─── */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: 'rgba(10,14,20,0.92)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(232,160,32,0.15)',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px',
            height: '70px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            {/* Logo mark */}
            <div
              style={{
                width: '42px',
                height: '42px',
                background: 'var(--amber)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                clipPath: 'polygon(0 0, 100% 0, 100% 75%, 75% 100%, 0 100%)',
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  fontFamily: 'Oswald, sans-serif',
                  fontWeight: 700,
                  fontSize: '16px',
                  color: 'var(--dark-900)',
                  letterSpacing: '-0.02em',
                }}
              >
                SMI
              </span>
            </div>
            <div>
              <div
                style={{
                  fontFamily: 'Oswald, sans-serif',
                  fontWeight: 600,
                  fontSize: '17px',
                  color: 'var(--white)',
                  letterSpacing: '0.04em',
                  lineHeight: 1.1,
                }}
              >
                SMI ARGENTINA
              </div>
              <div
                style={{
                  fontSize: '10px',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  lineHeight: 1,
                }}
              >
                Seguridad y Metodología Integral
              </div>
            </div>
          </div>

          <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            {['Servicios', 'Nosotros', 'Contacto'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{
                  fontFamily: 'Oswald, sans-serif',
                  fontSize: '14px',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--amber)')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--text-secondary)')}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* ─── HERO ─── */}
      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          paddingTop: '70px',
        }}
      >
        {/* Background grid */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(232,160,32,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(232,160,32,0.04) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Diagonal accent */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '280px',
            background: 'var(--dark-700)',
            clipPath: 'polygon(0 60%, 100% 0, 100% 100%, 0 100%)',
          }}
        />

        {/* Amber glow */}
        <div
          style={{
            position: 'absolute',
            top: '20%',
            right: '5%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(232,160,32,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '80px 24px 160px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Tag */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'rgba(232,160,32,0.1)',
              border: '1px solid rgba(232,160,32,0.3)',
              padding: '6px 16px',
              marginBottom: '32px',
              animation: 'fadeIn 0.6s ease forwards',
            }}
          >
            <div
              style={{
                width: '6px',
                height: '6px',
                background: 'var(--amber)',
                borderRadius: '50%',
                animation: 'pulse-amber 2s ease-in-out infinite',
              }}
            />
            <span
              style={{
                fontFamily: 'Oswald, sans-serif',
                fontSize: '12px',
                fontWeight: 500,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--amber)',
              }}
            >
              Profesionales en prevención de riesgos laborales
            </span>
          </div>

          {/* Headline */}
          <div
            style={{
              maxWidth: '820px',
              animation: 'fadeUp 0.7s ease 0.1s both',
            }}
          >
            <h1
              style={{
                fontFamily: 'Oswald, sans-serif',
                fontSize: 'clamp(52px, 8vw, 96px)',
                fontWeight: 700,
                textTransform: 'uppercase',
                lineHeight: 0.95,
                marginBottom: '8px',
                color: 'var(--white)',
              }}
            >
              Seguridad
              <br />
              <span style={{ color: 'var(--amber)' }}>&amp; Metodología</span>
              <br />
              Integral
            </h1>
          </div>

          {/* Divider line */}
          <div
            style={{
              width: '80px',
              height: '3px',
              background: 'var(--amber)',
              margin: '28px 0',
              transformOrigin: 'left',
              animation: 'slideRight 0.6s ease 0.5s both',
            }}
          />

          <p
            style={{
              fontSize: '18px',
              fontWeight: 300,
              color: 'var(--text-secondary)',
              maxWidth: '560px',
              lineHeight: 1.7,
              marginBottom: '44px',
              animation: 'fadeUp 0.7s ease 0.4s both',
            }}
          >
            Servicios especializados en seguridad e higiene laboral, capacitación
            certificada de operadores, asesoramiento técnico e inspecciones para
            empresas de todos los rubros en Argentina.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap',
              animation: 'fadeUp 0.7s ease 0.55s both',
            }}
          >
            <a
              href="#contacto"
              style={{
                display: 'inline-block',
                background: 'var(--amber)',
                color: 'var(--dark-900)',
                fontFamily: 'Oswald, sans-serif',
                fontSize: '15px',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '14px 36px',
                textDecoration: 'none',
                transition: 'background 0.2s, transform 0.2s',
                clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0 100%)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'var(--amber-light)'
                el.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'var(--amber)'
                el.style.transform = 'translateY(0)'
              }}
            >
              Consultar ahora
            </a>
            <a
              href="#servicios"
              style={{
                display: 'inline-block',
                background: 'transparent',
                color: 'var(--text-primary)',
                fontFamily: 'Oswald, sans-serif',
                fontSize: '15px',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '13px 36px',
                textDecoration: 'none',
                border: '1px solid rgba(122,154,184,0.4)',
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'var(--amber)'
                el.style.color = 'var(--amber)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'rgba(122,154,184,0.4)'
                el.style.color = 'var(--text-primary)'
              }}
            >
              Ver servicios
            </a>
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section
        style={{
          background: 'var(--dark-700)',
          borderTop: '1px solid rgba(232,160,32,0.15)',
          borderBottom: '1px solid rgba(232,160,32,0.15)',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '48px 24px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '0',
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                padding: '24px 32px',
                borderRight: i < stats.length - 1 ? '1px solid rgba(232,160,32,0.12)' : 'none',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontFamily: 'Oswald, sans-serif',
                  fontSize: '44px',
                  fontWeight: 700,
                  color: 'var(--amber)',
                  lineHeight: 1,
                  marginBottom: '6px',
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: '13px',
                  color: 'var(--text-secondary)',
                  letterSpacing: '0.04em',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="servicios" style={{ background: 'var(--dark-800)', padding: '100px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          {/* Section header */}
          <div style={{ marginBottom: '64px' }}>
            <div
              style={{
                fontFamily: 'Oswald, sans-serif',
                fontSize: '12px',
                fontWeight: 500,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--amber)',
                marginBottom: '14px',
              }}
            >
              — Lo que hacemos
            </div>
            <h2
              style={{
                fontFamily: 'Oswald, sans-serif',
                fontSize: 'clamp(36px, 5vw, 56px)',
                fontWeight: 700,
                textTransform: 'uppercase',
                color: 'var(--white)',
                maxWidth: '600px',
              }}
            >
              Nuestros
              <span style={{ color: 'var(--amber)' }}> servicios</span>
            </h2>
          </div>

          {/* Services grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '2px',
              background: 'rgba(232,160,32,0.08)',
            }}
          >
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section id="nosotros" style={{ background: 'var(--dark-700)', padding: '100px 0', overflow: 'hidden' }}>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center',
          }}
        >
          {/* Left — text */}
          <div>
            <div
              style={{
                fontFamily: 'Oswald, sans-serif',
                fontSize: '12px',
                fontWeight: 500,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--amber)',
                marginBottom: '14px',
              }}
            >
              — Quiénes somos
            </div>
            <h2
              style={{
                fontFamily: 'Oswald, sans-serif',
                fontSize: 'clamp(32px, 4vw, 48px)',
                fontWeight: 700,
                textTransform: 'uppercase',
                color: 'var(--white)',
                marginBottom: '24px',
              }}
            >
              Experiencia que
              <br />
              <span style={{ color: 'var(--amber)' }}>protege vidas</span>
            </h2>
            <p
              style={{
                fontSize: '16px',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                marginBottom: '20px',
              }}
            >
              SMI Argentina es una empresa especializada en seguridad e higiene
              laboral con presencia en todo el país. Nuestro equipo de
              profesionales certificados brinda soluciones integrales orientadas
              a la prevención, el cumplimiento normativo y la cultura de
              seguridad en el trabajo.
            </p>
            <p
              style={{
                fontSize: '16px',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                marginBottom: '36px',
              }}
            >
              Trabajamos con empresas de los sectores industrial, construcción,
              energía, logística y servicios, adaptando cada solución a los
              riesgos específicos de cada organización.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '12px',
              }}
            >
              {certifications.map((cert) => (
                <div
                  key={cert}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    fontSize: '13px',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.4,
                  }}
                >
                  <div
                    style={{
                      width: '16px',
                      height: '16px',
                      background: 'rgba(232,160,32,0.15)',
                      border: '1px solid var(--amber)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '1px',
                    }}
                  >
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M1 4L3 6L7 2" stroke="#e8a020" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — visual panel */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                background: 'var(--dark-600)',
                border: '1px solid rgba(232,160,32,0.2)',
                padding: '48px 40px',
                position: 'relative',
              }}
            >
              {/* Corner accent */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '60px',
                  height: '60px',
                  background: 'var(--amber)',
                  clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
                }}
              />

              <div
                style={{
                  fontFamily: 'Oswald, sans-serif',
                  fontSize: '13px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--amber)',
                  marginBottom: '32px',
                }}
              >
                Metodología de trabajo
              </div>

              {[
                {
                  num: '01',
                  title: 'Diagnóstico inicial',
                  desc: 'Relevamiento de la situación actual, identificación de riesgos y brechas normativas.',
                },
                {
                  num: '02',
                  title: 'Plan de acción',
                  desc: 'Diseño del programa preventivo con cronograma y responsables definidos.',
                },
                {
                  num: '03',
                  title: 'Implementación',
                  desc: 'Capacitaciones, inspecciones y gestión documental en campo.',
                },
                {
                  num: '04',
                  title: 'Seguimiento continuo',
                  desc: 'Monitoreo de indicadores, auditorías periódicas y mejora continua.',
                },
              ].map((step, i) => (
                <div
                  key={step.num}
                  style={{
                    display: 'flex',
                    gap: '20px',
                    marginBottom: i < 3 ? '28px' : 0,
                    paddingBottom: i < 3 ? '28px' : 0,
                    borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'Oswald, sans-serif',
                      fontSize: '32px',
                      fontWeight: 700,
                      color: 'rgba(232,160,32,0.25)',
                      lineHeight: 1,
                      flexShrink: 0,
                      width: '40px',
                    }}
                  >
                    {step.num}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: 'Oswald, sans-serif',
                        fontSize: '16px',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        marginBottom: '4px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {step.title}
                    </div>
                    <div style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                      {step.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contacto" style={{ background: 'var(--dark-900)', padding: '100px 0' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <div
            style={{
              fontFamily: 'Oswald, sans-serif',
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--amber)',
              marginBottom: '14px',
            }}
          >
            — Contacto
          </div>
          <h2
            style={{
              fontFamily: 'Oswald, sans-serif',
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 700,
              textTransform: 'uppercase',
              color: 'var(--white)',
              marginBottom: '20px',
            }}
          >
            ¿Necesita asesoramiento
            <br />
            <span style={{ color: 'var(--amber)' }}>profesional?</span>
          </h2>
          <p
            style={{
              fontSize: '16px',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              marginBottom: '48px',
            }}
          >
            Contáctenos para una evaluación inicial sin cargo. Nuestros especialistas
            analizarán su situación y propondrán las soluciones más adecuadas para
            su organización.
          </p>

          <ContactForm />
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer
        style={{
          background: 'var(--dark-900)',
          borderTop: '1px solid rgba(232,160,32,0.12)',
          padding: '40px 24px',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                background: 'var(--amber)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                clipPath: 'polygon(0 0, 100% 0, 100% 75%, 75% 100%, 0 100%)',
              }}
            >
              <span
                style={{
                  fontFamily: 'Oswald, sans-serif',
                  fontWeight: 700,
                  fontSize: '12px',
                  color: 'var(--dark-900)',
                }}
              >
                SMI
              </span>
            </div>
            <span
              style={{
                fontFamily: 'Oswald, sans-serif',
                fontSize: '14px',
                color: 'var(--text-muted)',
                letterSpacing: '0.06em',
              }}
            >
              SMI Argentina — Seguridad y Metodología Integral
            </span>
          </div>
          <div
            style={{
              fontSize: '13px',
              color: 'var(--text-muted)',
            }}
          >
            &copy; {new Date().getFullYear()} SMI Argentina. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}

function ServiceCard({
  service,
}: {
  service: (typeof services)[number]
}) {
  return (
    <div
      style={{
        background: 'var(--dark-800)',
        padding: '40px 36px',
        transition: 'background 0.25s',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.background = 'var(--dark-700)'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.background = 'var(--dark-800)'
      }}
    >
      <div
        style={{
          width: '52px',
          height: '52px',
          color: 'var(--amber)',
          marginBottom: '20px',
        }}
      >
        {service.icon}
      </div>
      <h3
        style={{
          fontFamily: 'Oswald, sans-serif',
          fontSize: '20px',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.04em',
          color: 'var(--white)',
          marginBottom: '12px',
        }}
      >
        {service.title}
      </h3>
      <p
        style={{
          fontSize: '14px',
          color: 'var(--text-secondary)',
          lineHeight: 1.7,
          margin: 0,
        }}
      >
        {service.description}
      </p>
    </div>
  )
}

function ContactForm() {
  return (
    <form
      style={{
        background: 'var(--dark-700)',
        border: '1px solid rgba(232,160,32,0.15)',
        padding: '48px 40px',
        textAlign: 'left',
      }}
      onSubmit={(e) => e.preventDefault()}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '20px',
          marginBottom: '20px',
        }}
      >
        <FormField label="Nombre y apellido" type="text" placeholder="Ej. Carlos Rodríguez" />
        <FormField label="Empresa" type="text" placeholder="Nombre de su empresa" />
        <FormField label="Correo electrónico" type="email" placeholder="correo@empresa.com" />
        <FormField label="Teléfono" type="tel" placeholder="+54 11 0000-0000" />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label
          style={{
            display: 'block',
            fontFamily: 'Oswald, sans-serif',
            fontSize: '13px',
            fontWeight: 500,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--text-secondary)',
            marginBottom: '8px',
          }}
        >
          Servicio de interés
        </label>
        <select
          style={{
            width: '100%',
            background: 'var(--dark-800)',
            border: '1px solid rgba(122,154,184,0.25)',
            color: 'var(--text-primary)',
            padding: '12px 16px',
            fontSize: '14px',
            fontFamily: 'Lato, sans-serif',
            outline: 'none',
            cursor: 'pointer',
            appearance: 'none',
          }}
        >
          <option value="">Seleccione un servicio</option>
          {services.map((s) => (
            <option key={s.id} value={s.id}>
              {s.title}
            </option>
          ))}
          <option value="multiple">Múltiples servicios</option>
        </select>
      </div>
      <div style={{ marginBottom: '28px' }}>
        <label
          style={{
            display: 'block',
            fontFamily: 'Oswald, sans-serif',
            fontSize: '13px',
            fontWeight: 500,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--text-secondary)',
            marginBottom: '8px',
          }}
        >
          Mensaje
        </label>
        <textarea
          rows={4}
          placeholder="Cuéntenos brevemente sobre su necesidad..."
          style={{
            width: '100%',
            background: 'var(--dark-800)',
            border: '1px solid rgba(122,154,184,0.25)',
            color: 'var(--text-primary)',
            padding: '12px 16px',
            fontSize: '14px',
            fontFamily: 'Lato, sans-serif',
            outline: 'none',
            resize: 'vertical',
            minHeight: '100px',
            boxSizing: 'border-box',
          }}
        />
      </div>
      <button
        type="submit"
        style={{
          width: '100%',
          background: 'var(--amber)',
          color: 'var(--dark-900)',
          fontFamily: 'Oswald, sans-serif',
          fontSize: '15px',
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          padding: '16px',
          border: 'none',
          cursor: 'pointer',
          transition: 'background 0.2s, transform 0.15s',
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement
          el.style.background = 'var(--amber-light)'
          el.style.transform = 'translateY(-1px)'
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement
          el.style.background = 'var(--amber)'
          el.style.transform = 'translateY(0)'
        }}
      >
        Enviar consulta
      </button>
    </form>
  )
}

function FormField({
  label,
  type,
  placeholder,
}: {
  label: string
  type: string
  placeholder: string
}) {
  return (
    <div>
      <label
        style={{
          display: 'block',
          fontFamily: 'Oswald, sans-serif',
          fontSize: '13px',
          fontWeight: 500,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'var(--text-secondary)',
          marginBottom: '8px',
        }}
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        style={{
          width: '100%',
          background: 'var(--dark-800)',
          border: '1px solid rgba(122,154,184,0.25)',
          color: 'var(--text-primary)',
          padding: '12px 16px',
          fontSize: '14px',
          fontFamily: 'Lato, sans-serif',
          outline: 'none',
          boxSizing: 'border-box',
          transition: 'border-color 0.2s',
        }}
        onFocus={(e) => {
          ;(e.target as HTMLInputElement).style.borderColor = 'var(--amber)'
        }}
        onBlur={(e) => {
          ;(e.target as HTMLInputElement).style.borderColor = 'rgba(122,154,184,0.25)'
        }}
      />
    </div>
  )
}
