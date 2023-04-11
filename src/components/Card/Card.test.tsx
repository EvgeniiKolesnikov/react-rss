import { render, screen } from '@testing-library/react';
import Card from './Card';
import '@testing-library/jest-dom';
import { sampleCard } from 'data/samples';

const card = sampleCard;

describe('Card component', () => {
  it('Render an image with received correct src', () => {
    render(<Card {...card} />);
    const image = screen.getByAltText(`${card.name} image`);
    expect(image).toHaveAttribute('src', card.image);
  });
});
