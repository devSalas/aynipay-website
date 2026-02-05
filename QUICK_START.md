# 🚀 Inicio Rápido - AYNIPAY Landing

## ⚡ Instalación y Ejecución (3 pasos)

### 1️⃣ Instalar Dependencias
```bash
cd aynipay-astro
npm install
```

### 2️⃣ Iniciar Servidor de Desarrollo
```bash
npm run dev
```

Abre tu navegador en: **http://localhost:4321**

### 3️⃣ Build para Producción
```bash
npm run build
npm run preview
```

---

## 📂 Estructura Rápida

```
aynipay-astro/
├── src/
│   ├── pages/
│   │   └── index.astro          ← PÁGINA PRINCIPAL
│   ├── layouts/
│   │   └── Layout.astro         ← LAYOUT + ESTILOS GLOBALES
│   └── components/              ← TODOS LOS COMPONENTES
│       ├── Navbar.astro
│       ├── Hero.astro
│       ├── Features.astro
│       ├── Process.astro
│       ├── FAQ.astro
│       └── CTAFinal.astro
```

---

## 🎨 Personalización Rápida

### Cambiar Colores
📍 `src/layouts/Layout.astro` (líneas 28-38)
```css
:root {
  --primary: #6366f1;      ← CAMBIAR AQUÍ
  --secondary: #10b981;    ← CAMBIAR AQUÍ
  --accent-pink: #ec4899;  ← CAMBIAR AQUÍ
  /* etc... */
}
```

### Editar Contenido del Hero
📍 `src/components/Hero.astro`
- Línea 11-13: Título principal
- Línea 16-18: Descripción
- Línea 21-26: Botones

### Editar Características
📍 `src/components/Features.astro` (líneas 2-31)
```javascript
const features = [
  {
    icon: "🔐",
    title: "Tu título",     ← EDITAR
    description: "...",     ← EDITAR
    color: "primary"
  },
  // ...más features
];
```

### Editar Preguntas FAQ
📍 `src/components/FAQ.astro` (líneas 2-49)
```javascript
const faqs = [
  {
    question: "Tu pregunta",  ← EDITAR
    answer: "Tu respuesta"    ← EDITAR
  },
  // ...más preguntas
];
```

---

## 🎯 Archivos Importantes

| Archivo | Para qué sirve |
|---------|----------------|
| `package.json` | Dependencias del proyecto |
| `astro.config.mjs` | Configuración de Astro |
| `src/pages/index.astro` | Página principal (integra todo) |
| `src/layouts/Layout.astro` | HTML base + estilos globales |
| `src/components/*.astro` | Secciones individuales |

---

## 🛠️ Comandos Útiles

```bash
# Desarrollo
npm run dev          # Inicia servidor (puerto 4321)

# Producción
npm run build        # Genera archivos estáticos en dist/
npm run preview      # Preview del build

# Limpiar
rm -rf dist/         # Eliminar build anterior
rm -rf node_modules/ # Reinstalar dependencias
```

---

## 📦 Deployar

### Vercel (Recomendado)
1. Sube el código a GitHub
2. Conecta el repo en vercel.com
3. Vercel detecta Astro automáticamente
4. ¡Deploy! 🚀

### Netlify
1. `npm run build`
2. Arrastra carpeta `dist/` a netlify.app
3. ¡Listo! 🎉

### Hosting Tradicional
1. `npm run build`
2. Sube contenido de `dist/` por FTP
3. Apunta dominio a la carpeta

---

## 🎨 Diseño Destacado

### Efectos Visuales
✨ Glassmorphism en navbar y cards
✨ Gradientes animados
✨ Tarjetas flotantes 3D
✨ Glow effects al hover
✨ Partículas de fondo animadas

### Animaciones
🎬 Float animations en elementos
🎬 Fade in al hacer scroll
🎬 Hover effects con elevación
🎬 Gradientes en movimiento
🎬 Pulse effects

### Colores
🎨 Modo oscuro premium
🎨 Índigo + Rosa + Cyan
🎨 Gradientes vibrantes
🎨 Acentos neón

---

## ❓ Problemas Comunes

### No carga el servidor
```bash
# Verificar Node.js instalado
node --version  # Debe ser v18+

# Reinstalar dependencias
rm -rf node_modules package-lock.json
npm install
```

### Puerto ocupado
```bash
# Usar otro puerto
npm run dev -- --port 3000
```

### Build falla
```bash
# Limpiar caché
rm -rf .astro dist
npm run build
```

---

## 📚 Recursos

- **Documentación Astro**: https://docs.astro.build
- **Guía de Diseño**: Ver `DESIGN_GUIDE.md`
- **README Completo**: Ver `README.md`

---

## 🎯 Próximos Pasos

1. ✅ Instalar y ejecutar
2. ✅ Ver el diseño en el navegador
3. ✅ Personalizar colores y textos
4. ✅ Agregar tu contenido
5. ✅ Deployar a producción

---

## 💡 Tips Pro

- **Usa el inspector**: F12 para ver y modificar estilos en vivo
- **Prueba responsive**: Ctrl+Shift+M para modo móvil
- **Hot reload**: Los cambios se ven automáticamente
- **Lighthouse**: Audita performance en Chrome DevTools

---

**¿Listo? ¡Ejecuta `npm run dev` y disfruta! 🚀**
