import { Dispatch, createSlice } from '@reduxjs/toolkit';
import { GamesStateInterface } from './types/GamesStateInterface';
import gamesService from '../services/games.service';

const initialState: GamesStateInterface = { entities: [], isLoading: true };

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    gamesRequested(state) {
      state.isLoading = true;
    },
    gamesReceived(state, action) {
      state.entities = action.payload;
      state.isLoading = false;
    },
  },
});

const { actions, reducer: gamesReducer } = gamesSlice;
const { gamesReceived, gamesRequested } = actions;

export const loadGames = () => async (dispatch: Dispatch) => {
  dispatch(gamesRequested());
  const data = await gamesService.fetch();
  dispatch(gamesReceived(data));
};

export const getGames = () => (state: GamesStateInterface) => state.entities;
export const getGamesIsLoading = () => (state: GamesStateInterface) =>
  state.isLoading;
export const getGamesSorted =
  (sortBy: string, asc: boolean) => (state: GamesStateInterface) =>
    asc
      ? state.entities.sort((a: any, b: any) => a - b)
      : state.entities.sort((a: any, b: any) => b - a);

export default gamesReducer;
