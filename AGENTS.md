# AGENTS.md — SMI Argentina

Guía de arquitectura para agentes de IA y desarrolladores que trabajen en este proyecto.

## Descripción del proyecto

Landing page institucional para **SMI Argentina** (Seguridad y Metodología Integral). Presenta los servicios de la empresa, metodología de trabajo y un formulario de contacto. Construido con TanStack Start y desplegado en Netlify.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 + CSS custom properties (inline styles en componentes principales) |
| Tipografía | Oswald (headings) + Lato (body) via Google Fonts |
| Language | TypeScript 5.7 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
src/
  routes/
    __root.tsx          # Layout raíz: metadatos, idioma=es, fuentes
    index.tsx           # Página principal con todas las secciones (única ruta pública)
    products/
      $productId.tsx    # Del scaffold original; no referenciado en navegación
  data/
    products.ts         # Del scaffold original
  styles.css            # Variables CSS, animaciones, fuentes Google
  router.tsx            # TanStack Router setup
public/
  favicon.ico
  placeholder.png
```

## Secciones de la página (`src/routes/index.tsx`)

1. **Header** — Fijo, logo con `clipPath`, navegación de anclas internas
2. **Hero** — Full viewport, fondo grillado, corte diagonal con `clip-path`, animaciones CSS
3. **Stats** — Franja con 4 métricas clave en grilla
4. **Servicios** (`#servicios`) — 6 tarjetas con iconos SVG inline
5. **Nosotros** (`#nosotros`) — Layout 2 columnas: texto + panel metodológico paso a paso
6. **Contacto** (`#contacto`) — Formulario de 6 campos (sin backend activo aún)
7. **Footer** — Logo reducido + copyright

## Componentes definidos en index.tsx

- `SMILanding` — componente raíz, contiene todas las secciones
- `ServiceCard` — tarjeta de servicio individual con hover
- `ContactForm` — formulario completo con selector de servicio
- `FormField` — input reutilizable con estado de foco

## Key Concepts

### File-Based Routing (TanStack Router)

Routes are defined by files in `src/routes/`:

- `__root.tsx` - Root layout wrapping all pages
- `index.tsx` - Route for `/` — SMI Argentina landing page
- `api.*.ts` - Server API endpoints

### Sistema de estilos

- Los tokens de diseño (colores, etc.) están en CSS custom properties en `styles.css` bajo `:root`
- La página principal usa **inline styles** en lugar de clases Tailwind para precisión de diseño
- Tailwind sigue disponible para nuevas rutas o componentes
- Paleta: oscuro naval + ámbar seguridad (`--amber: #e8a020`)

### Convenciones

- Componentes: PascalCase
- Utilidades/hooks: camelCase
- Rutas: kebab-case
- TypeScript strict mode
- Alias `@/` para `src/*`

## Extensiones recomendadas

- **Formulario activo**: usar skill `netlify-forms-tanstack` para conectar con Netlify Forms
- **Nuevas páginas**: crear archivos en `src/routes/` siguiendo el patrón de TanStack Router
- **Textos**: todos los textos en español están concentrados en `src/routes/index.tsx`

## Development Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run preview  # Preview production build
```
