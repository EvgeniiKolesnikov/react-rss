import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { FormCardType } from 'components/FormCard/FormCard';

interface formCardsSliceState {
  formCards: FormCardType[];
}

const initialState: formCardsSliceState = {
  formCards: [],
};

export const formCardsSlice = createSlice({
  name: 'formCards',
  initialState,
  reducers: {
    addFormCard: (state, action: PayloadAction<FormCardType>) => {
      state.formCards.push(action.payload);
    },
  },
});

export const { addFormCard } = formCardsSlice.actions;
export const selectFormCards = (state: RootState) => state.formCards;
