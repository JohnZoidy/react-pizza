import { configureStore } from '@reduxjs/toolkit';
import pizzasReducer from './pizzasSlice.js';

export default configureStore({
  reducer: {
    tasks: pizzasReducer,
  },
});
