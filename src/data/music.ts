// Datos de música como alternativa a Content Collections
export interface MusicTrack {
  title: string;
  artist?: string;
  releaseDate: string;
  cover: string;
  duration?: string;
  links: {
    youtube?: string;
    spotify?: string;
    appleMusic?: string;
  };
  featured?: boolean;
  order?: number;
}

export const musicTracks: MusicTrack[] = [
  {
    title: "Esta Navidad",
    artist: "Owen",
    releaseDate: "2024-12-01",
    cover: "/cover/Esta navidad.jpeg",
    duration: "3:30",
    links: {
      youtube: "https://www.youtube.com/watch?v=mtTOEhb7zwU",
      spotify: "https://open.spotify.com/track/7upXbm3KYPjRHKkVedrBUm?si=d2aef0c7d6a2469c"
    },
    featured: false,
    order: 3
  },
  {
    title: "Vulnerable",
    artist: "Owen",
    releaseDate: "2024-08-15",
    cover: "/cover/Vulnerable.jpeg",
    duration: "4:12",
    links: {
      youtube: "https://www.youtube.com/watch?v=nphfFqzIBnQ",
      spotify: "https://open.spotify.com/track/1GYYdVlaTQTU4wXJxtyoup?si=5a355ea71de84260"
    },
    featured: true,
    order: 2
  },
  {
    title: "Todo de Mi",
    artist: "Owen",
    releaseDate: "2024-06-20",
    cover: "/cover/Todo de mi.jpeg",
    duration: "3:28",
    links: {
      youtube: "https://www.youtube.com/watch?v=W3N88XWoehU",
      spotify: "https://open.spotify.com/track/0Pv0UZscaZntaVAM83Nk3c?si=d0d60f5447c043bc"
    },
    featured: true,
    order: 1
  },
  {
    title: "Dime",
    artist: "Owen",
    releaseDate: "2024-04-10",
    cover: "/cover/Dime.jpeg",
    duration: "3:55",
    links: {
      youtube: "https://www.youtube.com/watch?v=bdR3I_MMkjI",
      spotify: "https://open.spotify.com/track/7ooEXtGXD90fsu0zWeKJlm?si=664694a69b334e7b"
    },
    featured: false,
    order: 4
  },
  {
    title: "El Problema",
    artist: "Owen",
    releaseDate: "2023-11-03",
    cover: "/cover/El Problema.jpeg",
    duration: "3:45",
    links: {
      youtube: "https://www.youtube.com/watch?v=rrHSAOhlP1U",
      spotify: "https://open.spotify.com/track/64ZT7ZdzpauAL8sU12aObK?si=da8768f8fe0a4a14"
    },
    featured: false,
    order: 5
  }
];

export const getSortedTracks = () => {
  return musicTracks.sort((a, b) => (a.order || 0) - (b.order || 0));
};