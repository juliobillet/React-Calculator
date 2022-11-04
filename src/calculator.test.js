import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from './calculator';
import '@testing-library/jest-dom/extend-expect';

describe('Calculator', () => {
  test('must render calculator link without errors', () => {
    render(<Calculator />);
    const linkElement = screen.getByText(/0/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('must clean the number txtbox', () => {
    const { getByTestId, getByText } = render(<Calculator />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('C'));
    expect(getByTestId('txt_numbers')).toHaveValue('0');
  });

  test('must sum 2 + 3 and return 5', () => {
    const { getByTestId, getByText } = render(<Calculator />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txt_numbers')).toHaveValue('5');
  });
  
  test('must subtract 5 - 3 and return 2', () => {
    const { getByTestId, getByText } = render(<Calculator />);
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('-'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txt_numbers')).toHaveValue('2');
  });

  test('must multiply 5 * 2 and return 10', () => {
    const { getByTestId, getByText } = render(<Calculator />);
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('*'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txt_numbers')).toHaveValue('10');
  });
  
  test('must divide 5 / 2 and return 2.5', () => {
    const { getByTestId, getByText } = render(<Calculator />);
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('/'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txt_numbers')).toHaveValue('2.5');
  });
  
  test('must sum 5.5 + 2.75 and return 8.25', () => {
    const { getByTestId, getByText } = render(<Calculator />);
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('.'));
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('.'));
    fireEvent.click(getByText('7'));
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txt_numbers')).toHaveValue('8.25');
  });

});
