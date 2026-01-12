// Datos del sitio como alternativa a Content Collections
export interface SiteInfo {
  title: string;
  description: string;
  foundedYear: number;
  location: string;
  genre: string;
  socialMedia: {
    instagram: string;
    facebook: string;
    threads: string;
    youtube: string;
    spotify: string;
    appleMusic: string;
    tiktok: string;
  };
}

export const siteInfo: SiteInfo = {
  title: "OWEN | Banda Musical",
  description: "Owen es una banda de música latina pop dominico-venezolana formada en 2018 en La Romana. Descubre nuestra música romántica y bohemia.",
  foundedYear: 2018,
  location: "La Romana, República Dominicana",
  genre: "Latin Pop",
  socialMedia: {
    instagram: "https://www.instagram.com/owenmusicrd/",
    facebook: "https://www.facebook.com/profile.php?id=61558051167125",
    threads: "https://www.threads.com/@owenmusicrd",
    youtube: "https://www.youtube.com/@OwenMusicRD",
    spotify: "https://open.spotify.com/artist/1u9gihDiSN9KtaZscoBVPj",
    appleMusic: "https://music.apple.com/do/artist/owen/1715040588",
    tiktok: "https://www.tiktok.com/@owenmusicrd"
  }
};