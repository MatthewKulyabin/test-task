export interface GamesInterface {
  id: number;
  name: string;
  rating: number;
  img: string[];
  os: Array<'Linux' | 'Windows' | 'macOS'>;
  isOnline: boolean | number;
  languages: string[];
}
