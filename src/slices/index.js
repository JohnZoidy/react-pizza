import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from './filtersSlice.js';
import cartReducer from './cartSlice.js';
import pizzasReducer from './pizzasSlice.js';

export default configureStore({
  reducer: {
    filters: filtersReducer,
    cart: cartReducer,
    pizzas: pizzasReducer,
  },
});
