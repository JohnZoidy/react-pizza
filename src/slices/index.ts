import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from './filtersSlice';
import cartReducer from './cartSlice';
import pizzasReducer from './pizzasSlice';

const store = configureStore({
  reducer: {
    filters: filtersReducer,
    cart: cartReducer,
    pizzas: pizzasReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;