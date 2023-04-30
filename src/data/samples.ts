import { CardType } from 'types/api';

export const sampleCard: CardType = {
  id: 165,
  name: 'Investigator Rick',
  status: 'Dead',
  species: 'Human',
  type: '',
  gender: 'Male',
  origin: {
    name: 'unknown',
    url: '',
  },
  location: {
    name: 'Citadel of Ricks',
    url: '',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/165.jpeg',
  episode: ['https://rickandmortyapi.com/api/episode/28'],
  url: 'https://rickandmortyapi.com/api/character/165',
  created: '2017-12-29T17:05:15.514Z',
};

export const sampleCardsArray: CardType[] = [sampleCard];
