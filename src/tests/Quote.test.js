import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../pages/Quote';

describe('test if Quote', () => {
  test('renders correctly', () => {
    const component = renderer
      .create(<Quote />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
