import React from 'react';
import { render, fireEvent } from '@testing-library/react';
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

describe('AppBarWithoutCart component', () => {
  test('renders without crashing', () => {
    const { getByText } = render(<AppBarWithoutCart />);
    expect(getByText('Online Store')).toBeInTheDocument();
  });
});
