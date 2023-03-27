import { render, screen } from '@testing-library/react';
import FormCard from './FormCard';
import '@testing-library/jest-dom';

const Card = {
  Name: 'Tom',
  Date: '1111-11-11',
  Pet: 'Dog',
  Assent: true,
  Gender: 'Male',
  img: null,
};

describe('FormCard component', () => {
  it('Render Pet', () => {
    render(
      <FormCard
        name={Card.Name}
        date={Card.Date}
        pet={Card.Pet}
        assent={Card.Assent}
        gender={Card.Gender}
        img={Card.img}
      />
    );
    const text = screen.getByText(`Pet: ${Card.Pet}`);
    expect(text).toBeInTheDocument();
  });

  it('Render Gender', () => {
    render(
      <FormCard
        name={Card.Name}
        date={Card.Date}
        pet={Card.Pet}
        assent={Card.Assent}
        gender={Card.Gender}
        img={Card.img}
      />
    );
    const text = screen.getByText(`Gender: ${Card.Gender}`);
    expect(text).toBeInTheDocument();
  });

  it('Render Assent', () => {
    render(
      <FormCard
        name={Card.Name}
        date={Card.Date}
        pet={Card.Pet}
        assent={Card.Assent}
        gender={Card.Gender}
        img={Card.img}
      />
    );
    const text = screen.getByText(`Assent: ${Card.Assent ? 'Yes' : 'No'}`);
    expect(text).toBeInTheDocument();
  });
});
