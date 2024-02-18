import React from 'react';
import renderer from 'react-test-renderer';
import EmptyPlaceholder from '../components/Placeholder/emptyPlaceholder';

test('empty placeholder snap', () => {
  const ChildComponent = () => <div>Child Component</div>;
  const tree = renderer
    .create(
      <EmptyPlaceholder>
        <ChildComponent />
      </EmptyPlaceholder>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
