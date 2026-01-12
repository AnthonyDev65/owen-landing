# 🎵 Instrucciones para Gestionar la Música

## 📁 Estructura de Archivos

### Canciones (Content Collections)
Las canciones se gestionan en: `src/content/music/`

Cada canción es un archivo JSON con esta estructura:
```json
{
  "title": "Nombre de la Canción",
  "artist": "Owen",
  "releaseDate": "2023-11-03",
  "cover": "/music/portada.jpg",
  "duration": "3:45",
  "links": {
    "youtube": "https://www.youtube.com/watch?v=ID_REAL",
    "spotify": "https://open.spotify.com/track/ID_REAL"
  },
  "featured": true,
  "order": 1
}
```

### Imágenes de Portadas
Las portadas se almacenan en: `public/music/`

**Especificaciones recomendadas:**
- Dimensiones: 400x400px o 500x500px (cuadradas)
- Formato: JPG o PNG
- Peso: Máximo 200KB para mejor rendimiento

## 🔧 Cómo Añadir una Nueva Canción

### 1. Crear el archivo JSON
```bash
# Crear archivo en src/content/music/
# Ejemplo: mi-nueva-cancion.json
```

### 2. Añadir la portada
```bash
# Subir imagen a public/music/
# Ejemplo: public/music/mi-nueva-cancion.jpg
```

### 3. Configurar los enlaces
- **YouTube**: Obtener el ID del video de YouTube
- **Spotify**: Obtener el enlace de la canción en Spotify

## 🎯 Campos Explicados

| Campo | Descripción | Requerido |
|-------|-------------|-----------|
| `title` | Nombre de la canción | ✅ Sí |
| `artist` | Artista (por defecto "Owen") | ❌ No |
| `releaseDate` | Fecha de lanzamiento (YYYY-MM-DD) | ✅ Sí |
| `cover` | Ruta a la imagen de portada | ✅ Sí |
| `duration` | Duración de la canción (MM:SS) | ❌ No |
| `links.youtube` | Enlace de YouTube | ❌ No |
| `links.spotify` | Enlace de Spotify | ❌ No |
| `featured` | Si es canción destacada | ❌ No |
| `order` | Orden en el carrusel | ❌ No |

## 🚀 Características del Carrusel

### Funcionalidades
- ✅ **Scroll automático** de derecha a izquierda
- ✅ **Pausa al hover** para mejor UX
- ✅ **Click en tarjeta** abre YouTube (prioridad) o Spotify
- ✅ **Botones directos** para cada plataforma
- ✅ **Responsive** para móviles y desktop
- ✅ **Loop infinito** sin interrupciones

### Personalización
```css
/* Velocidad del carrusel */
.animate-scroll {
    animation: scroll 30s linear infinite; /* Cambiar 30s */
}

/* Pausa al hover */
.carousel-container:hover .animate-scroll {
    animation-play-state: paused;
}
```

## 📝 Ejemplo Completo

### 1. Archivo: `src/content/music/el-problema.json`
```json
{
  "title": "El Problema",
  "artist": "Owen",
  "releaseDate": "2023-11-03",
  "cover": "/music/el-problema.jpg",
  "duration": "3:45",
  "links": {
    "youtube": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "spotify": "https://open.spotify.com/track/4iV5W9uYEdYUVa79Axb7Rh"
  },
  "featured": true,
  "order": 1
}
```

### 2. Imagen: `public/music/el-problema.jpg`
- Subir la portada de la canción

### 3. Resultado
- La canción aparecerá automáticamente en el carrusel
- Se puede hacer click para ir a YouTube/Spotify
- Si es `featured: true`, mostrará badge "Destacado"

## 🔄 Actualizar Canciones Existentes

1. Editar el archivo JSON correspondiente
2. Reemplazar la imagen si es necesario
3. El sitio se actualizará automáticamente

## 🎨 Personalización Visual

### Colores de Plataformas
```css
/* YouTube - Rojo */
.bg-red-600 hover:bg-red-700

/* Spotify - Verde */
.bg-green-600 hover:bg-green-700
```

### Efectos Hover
- Escala de tarjeta: `hover:scale-105`
- Overlay de play button
- Transición de colores en título

¡Listo! Ahora puedes gestionar fácilmente la música de Owen. 🎵