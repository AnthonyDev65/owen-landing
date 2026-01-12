// Utilidad para optimizar imágenes
export const getOptimizedImageUrl = (src: string, width?: number, format: 'webp' | 'jpg' | 'png' = 'webp') => {
  // Para imágenes locales, usar el servicio de optimización de Astro
  if (src.startsWith('/')) {
    const params = new URLSearchParams();
    if (width) params.set('w', width.toString());
    params.set('f', format);
    params.set('q', '85'); // Calidad 85%
    
    return `/_image?href=${encodeURIComponent(src)}&${params.toString()}`;
  }
  
  // Para imágenes externas, devolver tal como están
  return src;
};

export const generateSrcSet = (src: string, widths: number[] = [320, 640, 768, 1024, 1280]) => {
  return widths
    .map(width => `${getOptimizedImageUrl(src, width)} ${width}w`)
    .join(', ');
};