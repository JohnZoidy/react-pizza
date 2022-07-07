/* eslint no-param-reassign: "off" */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FiltersSliceState {
  categoryId: number;
  sort: {
    name: string;
    type: string;
  },
  currentPage: number;
  searchValue: string;
}

const initialState: FiltersSliceState = {
  categoryId: 0,
  sort: {
    name: 'популярности (вверх)',
    type: 'rating&order=desc',
  },
  currentPage: 1,
  searchValue: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSort(state, action: PayloadAction<FiltersSliceState['sort']>) {
      state.sort = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setFilters(state, action: PayloadAction<FiltersSliceState>) {
      state.categoryId = Number(action.payload.categoryId);
      state.sort = action.payload.sort;
      state.currentPage = Number(action.payload.currentPage);
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const {
  setCategoryId, setSort, setCurrentPage, setFilters, setSearchValue,
} = filtersSlice.actions;

export default filtersSlice.reducer;
