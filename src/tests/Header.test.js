import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../components/Header';

describe('test if Header', () => {
  test('renders Header correctly', () => {
    const component = renderer.create(<Header />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
