import { GamesInterface } from '../../types/GamesInterface';

export const games: GamesInterface[] = [
  {
    id: 1,
    name: 'Counter-Strike 2',
    rating: 8.7,
    os: ['Windows', 'Linux'],
    img: [
      'https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg?t=1698860631',
      'https://cdn.cloudflare.steamstatic.com/steam/apps/730/ss_ef82850f036dac5772cb07dbc2d1116ea13eb163.600x338.jpg?t=1698860631',
    ],
    isOnline: true,
    languages: ['Russian', 'English'],
  },
  {
    id: 2,
    name: 'Dota 2',
    rating: 8.1,
    os: ['Windows', 'Linux', 'macOS'],
    img: [
      'https://cdn.cloudflare.steamstatic.com/steam/apps/570/header.jpg?t=1714502360',
      'https://cdn.cloudflare.steamstatic.com/steam/apps/570/ss_7ab506679d42bfc0c0e40639887176494e0466d9.600x338.jpg?t=1714502360',
    ],
    isOnline: true,
    languages: ['Russian', 'English', 'Dutch'],
  },
  {
    id: 3,
    name: 'PUBG: BATTLEGROUNDS',
    rating: 5.8,
    os: ['Windows'],
    img: [
      'https://cdn.cloudflare.steamstatic.com/steam/apps/578080/header.jpg?t=1713943796',
      'https://cdn.cloudflare.steamstatic.com/steam/apps/578080/ss_109d7072cf85f5b3b1e3dacadf3009718db451c4.600x338.jpg?t=1713943796',
    ],
    isOnline: true,
    languages: ['Russian', 'English', 'French'],
  },
  {
    id: 4,
    name: 'Apex Legends',
    rating: 7.8,
    os: ['Windows'],
    img: [
      'https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/header.jpg?t=1712869091',
      'https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/ss_addcfffc4cb07dbde19cd033759054138aa2bc62.600x338.jpg?t=1712869091',
    ],
    isOnline: true,
    languages: ['Russian', 'English', 'Dutch', 'French'],
  },
  {
    id: 5,
    name: 'NARAKA: BLADEPOINT',
    rating: 7.5,
    os: ['Windows'],
    img: [
      'https://cdn.cloudflare.steamstatic.com/steam/apps/1203220/header.jpg?t=1713929059',
      'https://cdn.cloudflare.steamstatic.com/steam/apps/1203220/ss_bb1dc4e49a19645f07c6730f2387a719449a3df7.600x338.jpg?t=1713929059',
    ],
    isOnline: true,
    languages: ['Russian', 'English', 'Dutch'],
  },
  {
    id: 6,
    name: 'Stardew Valley',
    rating: 9.8,
    os: ['Windows', 'Linux', 'macOS'],
    img: [
      'https://cdn.cloudflare.steamstatic.com/steam/apps/413150/header.jpg?t=1711128146',
      'https://cdn.cloudflare.steamstatic.com/steam/apps/413150/ss_4fa0866709ede3753fdf2745349b528d5e8c4054.600x338.jpg?t=1711128146',
    ],
    isOnline: 2,
    languages: ['Russian', 'English'],
  },
  {
    id: 7,
    name: 'Portal 2',
    rating: 9.8,
    os: ['Windows', 'Linux', 'macOS'],
    img: [
      'https://cdn.cloudflare.steamstatic.com/steam/apps/620/header.jpg?t=1698805825',
      'https://cdn.cloudflare.steamstatic.com/steam/apps/413150/ss_4fa0866709ede3753fdf2745349b528d5e8c4054.600x338.jpg?t=1711128146',
    ],
    isOnline: 2,
    languages: ['Russian', 'English'],
  },
];

const fetchAll = (): Promise<GamesInterface[]> =>
  new Promise((resolve) => {
    window.setTimeout(() => resolve(games), 1000);
  });

export default {
  fetchAll,
};
