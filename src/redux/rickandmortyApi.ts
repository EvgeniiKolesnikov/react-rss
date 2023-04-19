import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Data } from 'types/api';

const baseUrl = 'https://rickandmortyapi.com/api';
const character = '/character';
const reducerPath = 'rickandmortyApi';

export const rickandmortyApi = createApi({
  reducerPath: reducerPath,
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (build) => ({
    getCharacter: build.query<Data, string>({
      query: (name: string) => `${baseUrl}${character}?name=${name}`,
    }),
  }),
});

export const { useGetCharacterQuery } = rickandmortyApi;
