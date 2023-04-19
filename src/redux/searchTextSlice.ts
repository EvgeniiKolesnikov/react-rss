import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

interface SearchTextState {
  searchText: string;
}

const initialState: SearchTextState = {
  searchText: '',
};

export const searchTextSlice = createSlice({
  name: 'searchText',
  initialState,
  reducers: {
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
  },
});

export const { setSearchText } = searchTextSlice.actions;
export const selectSearchText = (state: RootState) => state.searchText;
