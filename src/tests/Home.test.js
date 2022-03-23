import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../pages/Home';

describe('test if Home', () => {
  test('renders Home correctly', () => {
    const component = renderer.create(<Home />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
