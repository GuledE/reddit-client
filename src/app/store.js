import { configureStore } from '@reduxjs/toolkit';
import cardListSlice from '../components/cardListSlice';

export const store = configureStore({
  reducer: {
  posts: cardListSlice
  },
});
