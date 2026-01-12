import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  // Crear SVG para la imagen OG
  const svg = `
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#111111;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#1a1a1a;stop-opacity:1" />
        </linearGradient>
        <linearGradient id="text" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#8b5cf6;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#3b82f6;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#ec4899;stop-opacity:1" />
        </linearGradient>
        <linearGradient id="cta" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#8b5cf6;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:1" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      <!-- Background -->
      <rect width="1200" height="630" fill="url(#bg)"/>
      
      <!-- Background effects -->
      <circle cx="1100" cy="100" r="200" fill="#8b5cf6" opacity="0.1"/>
      <circle cx="100" cy="530" r="175" fill="#3b82f6" opacity="0.1"/>
      
      <!-- Main content -->
      <text x="600" y="200" font-family="Arial, sans-serif" font-size="120" font-weight="bold" 
            text-anchor="middle" fill="url(#text)" filter="url(#glow)">OWEN</text>
      
      <text x="600" y="280" font-family="Arial, sans-serif" font-size="36" font-weight="600" 
            text-anchor="middle" fill="#e5e7eb">Banda Musical Latina Pop</text>
      
      <text x="600" y="330" font-family="Arial, sans-serif" font-size="28" 
            text-anchor="middle" fill="#9ca3af">Dominico-Venezolana</text>
      
      <text x="600" y="380" font-family="Arial, sans-serif" font-size="24" 
            text-anchor="middle" fill="#9ca3af">Música Romántica y Bohemia</text>
      
      <!-- CTA Button -->
      <rect x="450" y="450" width="300" height="60" rx="30" fill="url(#cta)" filter="url(#glow)"/>
      <text x="600" y="490" font-family="Arial, sans-serif" font-size="20" font-weight="bold" 
            text-anchor="middle" fill="white">ESCUCHA NUESTRA MÚSICA</text>
    </svg>
  `;

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000, immutable'
    }
  });
};