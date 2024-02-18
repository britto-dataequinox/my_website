import React from 'react';
import renderer from 'react-test-renderer';
import RouterLoader from '../components/RouterLoader';

test('router loader snap', () => {
  const tree = renderer.create(<RouterLoader />).toJSON();
  expect(tree).toMatchSnapshot();
});
