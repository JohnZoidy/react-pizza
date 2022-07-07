/* eslint no-param-reassign: "off" */
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

type Pizza = {
  id: number;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
}
type fetchPizzas = {
  categoryId: number;
  sort: {
    name: string;
    type: string;
  },
  currentPage: number;
  searchValue: string;
}

enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

interface PizzasSliceState {
  items: Pizza[];
  status: Status;
}

const initialState: PizzasSliceState = {
  items: [],
  status: Status.LOADING,
};

export const fetchPizzas = createAsyncThunk<Pizza[], fetchPizzas>(
  'pizzas/fetchPizzas',
  async (params) => {
    const {
      currentPage, categoryId, sort, searchValue,
    } = params;
    const { data } = await axios.get<Pizza[]>(`https://626d16545267c14d5677d9c2.mockapi.io/items?page=${currentPage}&limit=4&${categoryId === 0 ? '' : `category=${categoryId}&`}sortBy=${sort.type}${searchValue === '' ? '' : `&search=${searchValue}`}`);
    return data;
  },
);

const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Pizza[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export default pizzasSlice.reducer;
