import React from 'react';
import renderer from 'react-test-renderer';
import ResponsiveCard from '../components/Card';

test('card snap', () => {
  const tree = renderer .create(<ResponsiveCard title="Title" content="Content" width="300px" margin="10px" />).toJSON();
  expect(tree).toMatchSnapshot();
});
