import { render, screen } from '@testing-library/react';
import calculator from './calculator';

test('renders learn react link', () => {
  render(<calculator />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
