import { render, screen } from '@testing-library/react';
import DetailedCard from './DetailedCard';
import '@testing-library/jest-dom';
import { CardType } from 'types/api';
import { sampleCard } from 'data/samples';

const card: CardType = sampleCard;

describe('DetailedCard component', () => {
  it('Render an DetailedCard', () => {
    render(
      <DetailedCard
        closeDetails={function (): void {
          throw new Error('Function not implemented.');
        }}
        card={card}
      />
    );
  });
});
