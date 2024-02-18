import React from 'react';
import renderer from 'react-test-renderer';
import SearchBox from '../components/Searchbar';

test('search bar snap', () => {
  const tree = renderer.create(
    <SearchBox
      placeholder="Search..."
      onSearch={() => {}}
      onChange={() => {}}
      searchValue=""
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
