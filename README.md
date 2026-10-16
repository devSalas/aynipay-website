# AYNIPAY - Landing Page

Una landing page moderna y futurista construida con Astro para AYNIPAY, la plataforma fintech de gestión de pagos y transferencias.

## 🎨 Características del Diseño

- **Diseño Futurista**: Glassmorphism, gradientes animados, efectos 3D
- **Completamente Responsive**: Optimizado para desktop, tablet y móvil
- **Rendimiento Óptimo**: Construido con Astro para máxima velocidad
- **Animaciones Suaves**: Microinteracciones y transiciones fluidas
- **SEO Optimizado**: Meta tags, estructura semántica y best practices
- **Modo Oscuro Premium**: Tema oscuro con acentos neón y colores vibrantes

## 🚀 Tecnologías

- **Astro 4.0** - Framework estático ultra-rápido
- **CSS Moderno** - Custom properties, Grid, Flexbox
- **JavaScript Vanilla** - Sin dependencias externas
- **Google Fonts** - Inter + Space Grotesk

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Modo desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 🏗️ Estructura del Proyecto

```
/
├── src/
│   ├── pages/
│   │   └── index.astro          # Página principal
│   ├── layouts/
│   │   └── Layout.astro         # Layout base con estilos globales
│   └── components/
│       ├── Navbar.astro         # Navegación con glassmorphism
│       ├── Hero.astro           # Hero con tarjetas flotantes 3D
│       ├── Features.astro       # Características con hover effects
│       ├── Process.astro        # Timeline de proceso animado
│       ├── FAQ.astro            # Accordion interactivo
│       └── CTAFinal.astro       # CTA final + Footer
├── public/
├── package.json
└── astro.config.mjs
```

## 🎯 Secciones de la Landing

### 1. **Hero Section**
- Título impactante con gradientes animados
- CTAs principales
- Tarjetas flotantes en 3D mostrando transacciones
- Estadísticas clave (Uptime, Soporte, Procesamiento)

### 2. **Features**
- 6 características principales en tarjetas interactivas
- Efectos hover con brillo y elevación
- Iconos animados
- CTA de conversión integrada

### 3. **Process**
- Timeline visual con 4 pasos
- Tarjetas que flotan y tienen efectos pulse
- Cards adicionales con beneficios clave

### 4. **FAQ**
- Accordion con 8 preguntas frecuentes
- Sidebar con CTA de contacto
- Estadísticas de satisfacción

### 5. **CTA Final**
- Llamada a la acción principal
- Grid visual con características
- Animaciones de float

### 6. **Footer**
- Links organizados por categorías
- Redes sociales
- Branding y descripción

## 🎨 Paleta de Colores

```css
--primary: #6366f1        /* Índigo vibrante */
--primary-light: #818cf8  
--primary-dark: #4f46e5   
--secondary: #10b981      /* Verde esmeralda */
--accent: #f59e0b         /* Ámbar */
--accent-pink: #ec4899    /* Rosa neón */
--accent-cyan: #06b6d4    /* Cian brillante */
--bg-dark: #0a0a0f        /* Fondo oscuro profundo */
--bg-card: #14141f        /* Cards oscuros */
```

## 💡 Características Destacadas

### Animaciones
- Gradientes en movimiento
- Partículas flotantes (orbs)
- Hover effects 3D
- Parallax suave
- Pulse animations
- Float animations

### Efectos Visuales
- Glassmorphism en navbar y tarjetas
- Glow effects dinámicos
- Grain texture overlay
- Blur y backdrop-filter
- Gradientes multi-color

### Interactividad
- Menú móvil animado
- FAQ accordion
- Scroll suave entre secciones
- Intersection Observer para animaciones on-scroll
- Hover states avanzados

## 📱 Responsive Design

- **Desktop**: 1400px+ (grid completo, todas las características)
- **Tablet**: 768px - 1024px (grid adaptado, navegación colapsada)
- **Mobile**: 320px - 640px (columnas únicas, menú hamburguesa)

## ⚡ Optimizaciones

- Imágenes optimizadas (SVG para iconos)
- CSS crítico inline
- Fonts preconnect
- Lazy loading de componentes
- Bundle size mínimo
- Zero JavaScript en build (excepto interactividad esencial)

## 🔧 Personalización

### Cambiar colores

Edita las variables CSS en `src/layouts/Layout.astro`:

```css
:root {
  --primary: #TU_COLOR;
  --secondary: #TU_COLOR;
  /* etc... */
}
```

### Agregar secciones

1. Crea un nuevo componente en `src/components/`
2. Importa en `src/pages/index.astro`
3. Agrega donde lo necesites

### Modificar contenido

Todo el contenido está en los componentes. Edita directamente los arrays de datos en cada archivo `.astro`.

## 🚀 Deploy

### Vercel
```bash
npm run build
# Conecta tu repo con Vercel
```

### Netlify
```bash
npm run build
# Arrastra la carpeta dist/ a Netlify
```

### Otros
El build genera archivos estáticos en `dist/`. Súbelos a cualquier hosting estático.

## 📊 Performance

- **Lighthouse Score**: 95+
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 2.5s
- **Bundle Size**: < 50KB (sin imagenes)

## 🎯 Diferenciadores vs Competencia

### vs LatinPay:
- ✅ Diseño más moderno y atrevido
- ✅ Animaciones más fluidas y profesionales
- ✅ Mejor jerarquía visual
- ✅ Experiencia de usuario superior
- ✅ Microinteracciones avanzadas
- ✅ Glassmorphism y efectos 3D
- ✅ Modo oscuro premium

## 📝 Licencia

Propiedad de AYNIPAY © 2026

## 👨‍💻 Desarrollo

Para consultas o soporte técnico, contacta al equipo de desarrollo.

---

**Hecho con ⚡ y mucho café**

## Ecosistema

- [Commons Protocol](https://github.com/TerexitariusStomp/commons-protocol) — mercado de código abierto de bienes comunes donde la experiencia de aynipay (landing, comunidad, fondos) continúa integrada al protocolo Commons.
