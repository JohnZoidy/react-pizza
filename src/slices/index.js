import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from './filtersSlice.js';

export default configureStore({
  reducer: {
    filters: filtersReducer,
  },
});
