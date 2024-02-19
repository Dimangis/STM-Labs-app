import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../Header/ThemeChanger/slice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});
