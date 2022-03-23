import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../components/calculator';

describe('Test if Calculator', () => {
  test('renders Calculator correctly', () => {
    const component = renderer.create(<Calculator />).toJSON();
    expect(component).toMatchSnapshot();
  });
});

describe('Calculator', () => {
  test('Responds on user pressing two numbers ', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('2'));
    expect(screen.getByRole('textbox').value).toBe('12');
  });
  test('Responds on user pressing one number ', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('1'));
    expect(screen.getByRole('textbox').value).toBe('1');
  });
});
