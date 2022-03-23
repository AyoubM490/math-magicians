import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import Navbar from '../pages/Navbar';

describe('test if Navbar', () => {
  test('renders correctly', () => {
    const component = renderer
      .create(
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});

describe('Navbar', () => {
  test('Responding on Home click ', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
    fireEvent.click(screen.getByText('Home'));
  });
  test('Responding on Calculator click ', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
    fireEvent.click(screen.getByText('Calculator'));
  });
  test('Responding on Quote click ', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
    fireEvent.click(screen.getByText('Quote'));
  });
});
