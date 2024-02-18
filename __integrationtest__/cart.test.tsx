import Cart from '@/pages/cart';
import { render, screen } from '@testing-library/react';

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

test('Cart component renders reusable components without checking text', () => {
  render(<Cart />);
  const emptyPlaceholderText = screen.getByText('Cart work not getting started')
  const headerText = screen.getByText('Online Store')
  expect(emptyPlaceholderText).toBeInTheDocument()
  expect(headerText).toBeInTheDocument()
});