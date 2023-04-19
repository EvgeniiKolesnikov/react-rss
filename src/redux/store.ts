import { configureStore } from '@reduxjs/toolkit';
import { formCardsSlice } from './formCardsSlice';
import { rickandmortyApi } from './rickandmortyApi';
import { searchTextSlice } from './searchTextSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
  reducer: {
    [rickandmortyApi.reducerPath]: rickandmortyApi.reducer,
    searchText: searchTextSlice.reducer,
    formCards: formCardsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rickandmortyApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
