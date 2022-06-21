/* eslint no-param-reassign: "off" */
import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const pizzasAdapter = createEntityAdapter();

const initialState = pizzasAdapter.getInitialState();

const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    addPizza: pizzasAdapter.addOne,
    addPizzas: pizzasAdapter.addMany,
    removePizza: pizzasAdapter.removeOne,
    updatePizza: pizzasAdapter.updateOne,
  },
});

export const pizzaselectors = pizzasAdapter.getSelectors((state) => state.pizzas);

export const {
  addPizza, addPizzas, removePizza, updatePizza,
} = pizzasSlice.actions;

export default pizzasSlice.reducer;
