import { render, screen } from '@testing-library/react';
import FormCard from './FormCard';
import '@testing-library/jest-dom';
import sampleCard from '../../assets/card/card1.jpg';

const card = {
  name: 'Tom',
  date: '1111-11-11',
  pet: 'Dog',
  assent: true,
  gender: 'Male',
  img: sampleCard,
};

describe('FormCard component', () => {
  it('Render Pet', () => {
    render(
      <FormCard
        name={card.name}
        date={card.date}
        pet={card.pet}
        assent={card.assent}
        gender={card.gender}
        img={card.img}
      />
    );
    const text = screen.getByText(`Pet: ${card.pet}`);
    expect(text).toBeInTheDocument();
  });

  it('Render Gender', () => {
    render(
      <FormCard
        name={card.name}
        date={card.date}
        pet={card.pet}
        assent={card.assent}
        gender={card.gender}
        img={card.img}
      />
    );
    const text = screen.getByText(`Gender: ${card.gender}`);
    expect(text).toBeInTheDocument();
  });

  it('Render Assent Yes', () => {
    render(
      <FormCard
        name={card.name}
        date={card.date}
        pet={card.pet}
        assent={card.assent}
        gender={card.gender}
        img={card.img}
      />
    );
    const text = screen.getByText(/Assent: Yes/i);
    expect(text).toBeInTheDocument();
  });

  it('Render Assent No', () => {
    render(
      <FormCard
        name={card.name}
        date={card.date}
        pet={card.pet}
        assent={false}
        gender={card.gender}
        img={card.img}
      />
    );
    const text = screen.getByText(/Assent: No/i);
    expect(text).toBeInTheDocument();
  });

  it('Render Img', () => {
    render(
      <FormCard
        name={card.name}
        date={card.date}
        pet={card.pet}
        assent={card.assent}
        gender={card.gender}
        img={card.img}
      />
    );
    const image = screen.getByAltText(`card-image`);
    expect(image).toHaveAttribute('src', card.img);
  });
});
