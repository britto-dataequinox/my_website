import Home from '@/pages';
import React from 'react';
import renderer from 'react-test-renderer';
import { mockproducts } from '../__mocks__/mockproduct';
import { mockcategories } from '../__mocks__/mockcategories';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathName: '',
      query: '',
      asPath: '/',
      push: jest.fn(),
    };
  },
}));

test('page snap', () => {
  const tree = renderer
    .create(<Home products={mockproducts} categories={mockcategories} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
