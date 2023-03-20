import { render, screen } from '@testing-library/react';
import Card from './Card';
import '@testing-library/jest-dom';
import CardsData from '../../data/CardsData';

describe('Card component', () => {
  CardsData.map((card) => {
    it('Render an image with received correct src', () => {
      render(
        <Card img={card.img} id={card.id} price={card.price} brand={card.brand} desc={card.desc} />
      );
      const image = screen.getByAltText(`card image ${card.id}`);
      expect(image).toHaveAttribute('src', card.img);
    });
  });
});
