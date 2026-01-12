// Datos del equipo como alternativa a Content Collections
export interface TeamMember {
  name: string;
  role: string;
  photo: string;
  bio: string;
  instagram: string;
  followers: string;
  order?: number;
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Brayan Castro',
    role: 'Vocalista Principal',
    photo: '/team/ramon.jpg',
    bio: 'CANTANTE & COMPOSITOR | ROMANTICO EMPEDERNIDO Y BOHEMIO DE CORAZON.',
    instagram: 'brayancastromusic',
    followers: '713',
    order: 1
  },
  {
    name: 'Josias Brito',
    role: 'Vocalista',
    photo: '/team/josias.jpg',
    bio: 'GUITARRISTA - BAJISTA & CANTANTE | BALADISTA DE CORAZON Y MUSICO POR DECISION.',
    instagram: 'josiasbritof',
    followers: '447',
    order: 2
  },
  {
    name: 'Ruben Sanchez',
    role: 'Guitarrista',
    photo: '/team/ruben.jpeg',
    bio: 'GUITARRISTA | AMANTE DE LA BUENA MUSICA, ROMANTICO DE MEDIO TIEMPO.',
    instagram: 'rubenz22',
    followers: '1,069',
    order: 3
  }
];

export const getSortedTeamMembers = () => {
  return teamMembers.sort((a, b) => (a.order || 0) - (b.order || 0));
};