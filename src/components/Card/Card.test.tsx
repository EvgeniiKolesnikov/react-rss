import { fireEvent, render, screen } from '@testing-library/react';
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

  it('Card click', async () => {
    render(<Card {...card} />);
    const cardElem = screen.getByText(`Investigator Rick`);
    fireEvent.click(cardElem);
    expect(screen.getByText(card.species)).toHaveTextContent('Human');
  });

  it('Card close', async () => {
    render(<Card {...card} />);
    const cardElem = screen.getByText(`Investigator Rick`);
    fireEvent.click(cardElem);
    const backdropElem = screen.getByRole('banner');
    expect(backdropElem).toHaveClass('backdrop');
    fireEvent.click(backdropElem);
    expect(backdropElem).not.toBeInTheDocument();
  });
});
