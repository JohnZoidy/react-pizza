/* eslint no-param-reassign: "off" */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  totalCount: 0,
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count += 1;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.totalCount += 1;
      state.totalPrice = state.items.reduce((acc, obj) => acc + obj.price * obj.count, 0);
    },
    removeItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem) {
        findItem.count -= 1;
      }

      state.totalCount -= 1;
      state.totalPrice = state.items.reduce((acc, obj) => acc + obj.price * obj.count, 0);
      if (findItem.count === 0) {
        state.items = state.items.filter((obj) => obj.id !== action.payload);
      }
    },
    removeAll(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      state.totalCount -= findItem.count;
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalPrice = state.items.reduce((acc, obj) => acc + obj.price * obj.count, 0);
    },
    clearCart(state) {
      state.totalCount = 0;
      state.totalPrice = 0;
      state.items = [];
    },
  },
});

export const {
  addItem, removeItem, clearCart, removeAll,
} = cartSlice.actions;

export const selectCart = (state) => state.cart;

export default cartSlice.reducer;
