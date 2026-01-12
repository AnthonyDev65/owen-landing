# Owen - Banda Musical 🎵

Sitio web oficial de la banda Owen, grupo de música latina pop dominico-venezolano formado en 2018 en La Romana, República Dominicana.

## 🚀 Tecnologías

- **Astro** - Framework web moderno
- **Tailwind CSS** - Framework de CSS utilitario
- **TypeScript** - Tipado estático
- **Content Collections** - Gestión de contenido estructurado

## 🛠️ Desarrollo

### Requisitos previos
- Node.js 18+ 
- pnpm (recomendado)

### Instalación

```bash
# Clonar el repositorio
git clone <repository-url>
cd owen-landing

# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev
```

### Scripts disponibles

| Comando | Acción |
|---------|--------|
| `pnpm dev` | Inicia el servidor de desarrollo en `localhost:4321` |
| `pnpm build` | Construye el sitio para producción en `./dist/` |
| `pnpm preview` | Vista previa del build local |
| `pnpm check` | Verifica tipos y errores de Astro |

## 📁 Estructura del proyecto

```
/
├── public/              # Archivos estáticos
│   ├── team/           # Fotos del equipo
│   └── favicon.svg
├── src/
│   ├── components/     # Componentes Astro
│   ├── content/        # Content Collections
│   │   ├── team/       # Datos del equipo
│   │   └── site/       # Información del sitio
│   ├── layouts/        # Layouts base
│   ├── pages/          # Páginas del sitio
│   ├── styles/         # Estilos globales
│   └── utils/          # Utilidades
└── package.json
```

## 🎨 Características

- ✅ Diseño responsive
- ✅ SEO optimizado
- ✅ Accesibilidad mejorada
- ✅ Content Collections para gestión de datos
- ✅ Lazy loading de imágenes
- ✅ Smooth scrolling
- ✅ Menú móvil interactivo
- ✅ Integración con redes sociales

## 🔧 Configuración

### Tailwind CSS
El proyecto usa Tailwind CSS con configuración personalizada en `tailwind.config.mjs`:
- Colores personalizados para la marca
- Fuentes tipográficas configuradas
- Utilidades extendidas

### Content Collections
Los datos del equipo y sitio se gestionan mediante Content Collections:
- `src/content/team/` - Información de los miembros
- `src/content/site/` - Datos generales del sitio

## 📱 Redes Sociales

- [Instagram](https://www.instagram.com/owenmusicrd/)
- [Facebook](https://www.facebook.com/profile.php?id=61558051167125)
- [YouTube](https://www.youtube.com/@OwenMusicRD)
- [Threads](https://www.threads.com/@owenmusicrd)

## 🚀 Despliegue

El sitio está optimizado para despliegue en:
- Vercel
- Netlify
- GitHub Pages
- Cualquier hosting estático

```bash
# Build para producción
pnpm build

# Los archivos se generan en ./dist/
```

## 📄 Licencia

© 2024 Owen Banda Musical. Todos los derechos reservados.