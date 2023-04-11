import { render, screen } from '@testing-library/react';
import Card from './Card';
import '@testing-library/jest-dom';
import { sampleCard } from 'data/samples';
import userEvent from '@testing-library/user-event';

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
    screen.debug();
    await userEvent.click(cardElem);
    screen.debug();
    expect(screen.getByText(card.species)).toHaveTextContent('Human');
  });

  it('Card close', async () => {
    render(<Card {...card} />);
    const cardElem = screen.getByText(`Investigator Rick`);
    screen.debug();
    await userEvent.click(cardElem);
    screen.debug();
    const backdropElem = screen.getByRole('banner');
    expect(backdropElem).toHaveClass('backdrop');
    await userEvent.click(backdropElem);
    expect(backdropElem).not.toBeInTheDocument();
  });
});
