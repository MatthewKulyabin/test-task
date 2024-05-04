import { GamesInterface } from '../../api/types/GamesInterface';

export interface GamesStateInterface {
  entities: GamesInterface[];
  isLoading: boolean;
}
