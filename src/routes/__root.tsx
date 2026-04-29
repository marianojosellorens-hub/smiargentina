import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'SMI Argentina — Seguridad y Metodología Integral' },
      {
        name: 'description',
        content:
          'Servicios profesionales de seguridad e higiene laboral, capacitación en izaje y movimiento de cargas, trabajos en altura, riesgo eléctrico, asesoramiento técnico e inspecciones.',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
