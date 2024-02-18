import React from 'react';
import renderer from 'react-test-renderer';
import AppBarWithoutCart from '../components/Header/AppbarWithoutCart';

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

test('appbarwithoutcart snap', () => {
  const tree = renderer.create(<AppBarWithoutCart />).toJSON();
  expect(tree).toMatchSnapshot();
});
