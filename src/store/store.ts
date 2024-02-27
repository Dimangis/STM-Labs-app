import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../components/Header/ThemeChanger/slice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});
