# CONOR Printing LLC — Workflow: Nuevo Sitio Web

## Stack
- **Framework:** Next.js 15 (App Router)
- **Estilos:** Tailwind CSS + shadcn/ui
- **Hosting:** Vercel
- **Dominio:** conorprintingllc.us

---

## Fases del Proyecto

### FASE 1 — Setup del Proyecto
- [ ] Inicializar proyecto con `create-next-app` + Tailwind
- [ ] Instalar y configurar shadcn/ui
- [ ] Configurar fuentes (Google Fonts)
- [ ] Definir paleta de colores y tema base
- [ ] Mover assets (logo, imágenes, galería) al proyecto
- [ ] Configurar estructura de carpetas

---

### FASE 2 — Componentes Base
- [ ] Layout principal (Navbar + Footer)
- [ ] Navbar con navegación responsive (mobile menu)
- [ ] Footer con links, contacto y redes sociales

---

### FASE 3 — Páginas

#### Home (`/`)
- [ ] Hero section (imagen fullscreen + headline + CTAs)
- [ ] Stats/contadores (6 años, materiales, turnaround)
- [ ] About Us section (texto + bullets)
- [ ] Why Choose Us (4 cards)
- [ ] Servicios destacados (4 cards)
- [ ] Our Highlights (3 items)
- [ ] CTA final (llamada a cotizar)

#### About (`/about`)
- [ ] Hero de página
- [ ] Historia / descripción real del negocio
- [ ] Pilares (Customer-Focused, Expert Team, etc.)
- [ ] What Makes Us Stand Out (3 items)

#### Services (`/services`)
- [ ] Hero de página
- [ ] Grid de todos los servicios agrupados por categoría:
  - Impresión (Logo, Business Cards, Door Hangers, Cups, Yard Signs, Card Magnets, Signs & Banners, Stickers & Decals)
  - Vehículos / Vinil (Fully Wrapped, Car Lettering, Window Perforated Vinyl)
  - Ropa y Bordado (Embroidery & DTF, Hoodies, T-Shirts, Hats & Caps)
- [ ] CTA de cotización dentro de la página

#### Gallery (`/gallery`)
- [ ] Hero de página
- [ ] Grid masonry/lightbox con las 64 imágenes
- [ ] Filtros por categoría (opcional v2)

#### Contact (`/contact`)
- [ ] Hero de página
- [ ] Mapa o info de ubicación
- [ ] Info de contacto (teléfonos, email, dirección, horario)
- [ ] Formulario (Name, Email, Subject, Message)

#### Quote (`/quote`)
- [ ] Hero de página
- [ ] Horario + descripción
- [ ] Formulario (Name, Email, Select a Service, Message)
- [ ] Teléfono CTA

---

### FASE 4 — Funcionalidad
- [ ] Formulario de contacto funcional (API route de Next.js → email)
- [ ] Formulario de cotización funcional
- [ ] Animaciones de entrada (Framer Motion)
- [ ] Galería con lightbox (click para ampliar)
- [ ] Scroll suave entre secciones

---

### FASE 5 — SEO & Performance
- [ ] Metadata por página (title, description)
- [ ] Open Graph tags (para compartir en redes)
- [ ] Optimización de imágenes con `next/image`
- [ ] Sitemap.xml
- [ ] robots.txt
- [ ] Schema markup local business (Google)
- [ ] Favicon y PWA icons

---

### FASE 6 — Deploy
- [ ] Conectar repo a Vercel
- [ ] Variables de entorno (email config)
- [ ] Deploy a producción
- [ ] Apuntar dominio conorprintingllc.us a Vercel
- [ ] Verificar SSL y performance (Lighthouse)

---

## Paleta de Colores (por definir)

| Nombre | Hex | Uso |
|---|---|---|
| Primary | `#?????` | Botones, acentos |
| Dark | `#111111` | Fondo dark / texto |
| Light | `#FFFFFF` | Fondos claros |
| Accent | `#?????` | Highlights |

> Revisar logo.png para extraer colores de marca

---

## Páginas / Rutas

| Ruta | Descripción |
|---|---|
| `/` | Home |
| `/about` | Sobre nosotros |
| `/services` | Servicios |
| `/gallery` | Galería de trabajos |
| `/contact` | Contacto |
| `/quote` | Cotización gratuita |

---

## Assets Disponibles

| Archivo | Ubicación | Estado |
|---|---|---|
| Logo | `assets/img/logo.png` | ✅ |
| Hero 1 | `assets/img/carousel-1.jpg` | ✅ |
| Hero 2 | `assets/img/carousel-2.jpg` | ✅ |
| About | `assets/img/about.jpg` | ✅ |
| Team 1-3 | `assets/img/team-[1-3].jpg` | ✅ |
| Galería | `assets/gallery/[1-65].jpg` | ✅ 64 fotos |

---

## Progreso General

```
Fase 1 — Setup         [ ] 0/6
Fase 2 — Componentes   [ ] 0/3
Fase 3 — Páginas       [ ] 0/30+
Fase 4 — Funcionalidad [ ] 0/5
Fase 5 — SEO           [ ] 0/7
Fase 6 — Deploy        [ ] 0/5
```

---

## Notas / Decisiones

- Usar `next/image` para todas las imágenes (optimización automática)
- Formularios → Resend o Nodemailer para enviar emails
- Galería → librería `yet-another-react-lightbox`
- Animaciones → Framer Motion (solo donde agregue valor, no exagerar)
- El About actual tiene texto de plantilla genérica → reescribir contenido real
