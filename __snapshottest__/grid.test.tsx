import React from 'react';
import renderer from 'react-test-renderer';
import ResponsiveGrid from '../components/Grid';

test('grid snap', () => {
  const tree = renderer.create(
    <ResponsiveGrid>
      <div>Item 1</div>
      <div>Item 2</div>
    </ResponsiveGrid>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
