import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface IUrl {
  page: number;
  results: [any];
  total_pages: number;
  total_results: number;
}

// Define a type for the slice state
export interface IHomeState {
  url: IUrl | {};
  genres: any;
}

// Define the initial state using that type
const initialState: IHomeState = {
  url: {},
  genres: {},
};

export const HomeSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    getApiConfiguration: (state, action) => {
      state.url = action.payload;
    },
    getGenres: (state, action) => {
      state.genres = action.payload;
    },
  },
});

export const { getApiConfiguration, getGenres } = HomeSlice.actions;

// export const selectUrl = (state: RootState) => state.home

export default HomeSlice.reducer;
