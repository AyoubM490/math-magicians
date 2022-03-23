import React from 'react';
import renderer from 'react-test-renderer';
import NotMatch from '../pages/NotMatch';

describe('test if NotMatch', () => {
  test('renders correctly', () => {
    const component = renderer
      .create(<NotMatch />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
