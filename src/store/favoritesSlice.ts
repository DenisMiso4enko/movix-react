import { createSlice } from "@reduxjs/toolkit";

// interface IFavorites {
//     favorites: any[]
// }

// Define a type for the slice state
export interface IFavorites {
  favorites: any[];
}

// Define the initial state using that type
const initialState: IFavorites = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favorites = [...state.favorites, action.payload];
    },
    removeFavorite: (state, action) => {
      console.log(action);
      state.favorites = state.favorites.filter(
        (el) => el.id !== action.payload
      );
    },
    // getApiConfiguration: (state, action) => {
    //   state.url = action.payload;
    // },
    // getGenres: (state, action) => {
    //   state.genres = action.payload;
    // },
  },
});

export const { removeFavorite, addFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
