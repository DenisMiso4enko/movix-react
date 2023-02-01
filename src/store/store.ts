import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./homeSlice";
import favoritesSlice from "./favoritesSlice";
// ...

export const store = configureStore({
  reducer: {
    home: homeSlice,
    favorites: favoritesSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
