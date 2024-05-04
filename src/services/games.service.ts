import API from '../api/fake.api';
import { GamesInterface } from '../api/types/GamesInterface';

const gamesService = {
  fetch: async (): Promise<GamesInterface[]> => {
    const data = await API.games.fetchAll();
    return data;
  },
};

export default gamesService;
