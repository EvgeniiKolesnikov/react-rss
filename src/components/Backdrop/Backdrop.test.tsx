import { render } from '@testing-library/react';
import Backdrop from './Backdrop';
import '@testing-library/jest-dom';

describe('Backdrop component', () => {
  it('Render Backdrop', () => {
    render(<Backdrop closeDetails={() => {}} />);
  });
});
