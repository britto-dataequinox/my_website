import Cart from '@/pages/cart';
import React from 'react';
import renderer from 'react-test-renderer';

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

test('cart snap', () => {
  const tree = renderer.create(<Cart />).toJSON();
  expect(tree).toMatchSnapshot();
});
