import { configureStore } from '@reduxjs/toolkit';
import farmCounter from './context/farm';

export const store = configureStore({
  reducer: {
    farm: farmCounter,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
