import React from 'react';
import renderer from 'react-test-renderer';
import CustomAppBar from '../components/Header';

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

test('header snap', () => {
  const tree = renderer.create(<CustomAppBar cartItemCount={0} />).toJSON();
  expect(tree).toMatchSnapshot();
});
