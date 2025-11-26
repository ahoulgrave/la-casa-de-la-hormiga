// Videos data - Edit this file to add/remove videos
// All video info is here: title, date (ISO format), descriptions by language

export interface VideoData {
  id: string
  title: string
  date: string // ISO format: YYYY-MM-DD
  thumbnail: string
  youtubeUrl: string
  description: {
    es: string
    en: string
    ca: string
  }
}

// Add new videos here - order determines display order
export const videosData: VideoData[] = [
  {
    id: 'rocasChinas',
    title: 'Rocas Chinas',
    date: '2025-01-23',
    thumbnail: '/img/videos/rocas_chinas.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=efVOj04w8aY',
    description: {
      es: '',
      en: '',
      ca: ''
    }
  },
  {
    id: 'nadieLoQuiere',
    title: 'Nadie Lo Quiere',
    date: '2025-01-23',
    thumbnail: '/img/videos/nadie_lo_quiere_video.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=vgjsayWdFMc',
    description: {
      es: '',
      en: '',
      ca: ''
    }
  },
  {
    id: 'vueloDespierto',
    title: 'Vuelo Despierto',
    date: '2024-11-28',
    thumbnail: '/img/videos/vuelo_despierto.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=Jw4-Hcv4Cc0',
    description: {
      es: '',
      en: '',
      ca: ''
    }
  },
  {
    id: 'sergioPangaro',
    title: 'Sergio Pángaro',
    date: '2024-10-06',
    thumbnail: '/img/videos/pangaro.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=3D-9XwMOGnY',
    description: {
      es: 'Un show distinto porque fue, además de musical, también performático.',
      en: 'A unique show that was not only musical but also performative.',
      ca: 'Un espectacle diferent perquè va ser, a més de musical, també performàtic.'
    }
  },
  {
    id: 'manza',
    title: 'Manza',
    date: '2024-09-29',
    thumbnail: '/img/videos/manza_1.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=C1D30TS0hmY',
    description: {
      es: 'Músico histórico y referente de la escena argentina, Manza nos regaló un concierto espontáneo, casi improvisado.',
      en: 'A legendary musician and icon of the Argentine scene, Manza gave us a spontaneous, almost improvised concert.',
      ca: 'Músic històric i referent de l\'escena argentina, Manza ens va regalar un concert espontani, gairebé improvisat.'
    }
  },
  {
    id: 'pyramides',
    title: 'Pyramides',
    date: '2024-05-05',
    thumbnail: '/img/videos/pyramides_1.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=qNz-JDd6_Eo',
    description: {
      es: 'Uno de los primeros conciertos que grabamos fuera del piso. Fue además el debut de la nueva formación de la banda en Barcelona.',
      en: 'One of the first concerts we recorded outside the apartment. It was also the debut of the band\'s new lineup in Barcelona.',
      ca: 'Un dels primers concerts que vam gravar fora del pis. Va ser a més el debut de la nova formació de la banda a Barcelona.'
    }
  },
  {
    id: 'gilDeGilsCinetika',
    title: 'Gil de Gils @ Cinètika',
    date: '2024-02-24',
    thumbnail: '/img/videos/gil_de_gils_cinetika.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=EK5vv1PgkfU',
    description: {
      es: '',
      en: '',
      ca: ''
    }
  },
  {
    id: 'solMarianela',
    title: 'Sol Marianela',
    date: '2024-09-28',
    thumbnail: '/img/videos/sol_marianela.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=Bj70_YyIgLE',
    description: {
      es: '',
      en: '',
      ca: ''
    }
  },
  {
    id: 'luqArlequin',
    title: 'LUQ Arlequín',
    date: '2024-06-15',
    thumbnail: '/img/videos/luq_arlequin.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=pGwqM-a73eU',
    description: {
      es: '',
      en: '',
      ca: ''
    }
  },
  {
    id: 'lvzSilenciosa',
    title: 'LVZ Silenciosa',
    date: '2024-04-28',
    thumbnail: '/img/videos/lvz_silenciosa.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=5ZikR_UpeXU',
    description: {
      es: '',
      en: '',
      ca: ''
    }
  },
  {
    id: 'catiKate',
    title: 'Cati Kate',
    date: '2024-02-17',
    thumbnail: '/img/videos/cati_kate.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=XzHWAnXe8dE',
    description: {
      es: '',
      en: '',
      ca: ''
    }
  },
  {
    id: 'gilDeGils',
    title: 'Gil de Gils',
    date: '2024-02-24',
    thumbnail: '/img/videos/gil_de_gils_casa.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=EbZArS8nQq0',
    description: {
      es: 'Concierto potente y técnico en un espacio autogestionado, diverso y comunitario.',
      en: 'A powerful and technical concert in a self-managed, diverse, and community-driven space.',
      ca: 'Concert potent i tècnic en un espai autogestionat, divers i comunitari.'
    }
  },
  {
    id: 'valenluna',
    title: 'Valenluna',
    date: '2023-12-10',
    thumbnail: '/img/videos/valenluna.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=EeXeMnc_5aQ',
    description: {
      es: '',
      en: '',
      ca: ''
    }
  },
  {
    id: 'fr4no',
    title: 'FR4NO',
    date: '2023-10-21',
    thumbnail: '/img/videos/fr4no.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=OvVHQ22sDP8',
    description: {
      es: '',
      en: '',
      ca: ''
    }
  },
  {
    id: 'galeriaInterior',
    title: 'Galería Interior',
    date: '2023-07-29',
    thumbnail: '/img/videos/galeria_interior.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=8C4IPKPuhEI',
    description: {
      es: 'Fue uno de los primeros conciertos que grabamos y uno de los más emocionantes.',
      en: 'It was one of the first concerts we recorded and one of the most exciting.',
      ca: 'Va ser un dels primers concerts que vam gravar i un dels més emocionants.'
    }
  },
  {
    id: 'stalkerSpleen',
    title: 'Stalker Spleen',
    date: '2023-09-15',
    thumbnail: '/img/videos/stalker_spleen.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=H6CTlAgbDws',
    description: {
      es: '',
      en: '',
      ca: ''
    }
  },
  {
    id: 'trioSarazeno',
    title: 'Trío Sarazeno',
    date: '2023-08-20',
    thumbnail: '/img/videos/trio_sarazeno.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=2JzBtiHxiwI',
    description: {
      es: '',
      en: '',
      ca: ''
    }
  },
  {
    id: 'melcochas',
    title: 'Melcochas',
    date: '2023-06-10',
    thumbnail: '/img/videos/melcochas.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=GjjkKiwZNoI',
    description: {
      es: '',
      en: '',
      ca: ''
    }
  },
  {
    id: 'duoBrillante',
    title: 'Dúo Brillante ft. ffa música',
    date: '2023-05-15',
    thumbnail: '/img/videos/duo_brillante.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=xGUVNWUXMLM',
    description: {
      es: '',
      en: '',
      ca: ''
    }
  },
]

// Featured videos for homepage (by id)
export const featuredVideoIds = ['pyramides', 'manza', 'sergioPangaro']
