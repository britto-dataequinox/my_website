import { render, screen, fireEvent } from '@testing-library/react';
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

describe('CustomAppBar', () => {
  test('renders AppBar with correct title', () => {
    render(<CustomAppBar cartItemCount={0} />);
    const titleElement = screen.getByText('Online Store');
    expect(titleElement).toBeInTheDocument();
  });

  test('displays cart item count', () => {
    render(<CustomAppBar cartItemCount={5} />);
    const cartBadge = screen.getByTestId('cart-badge');
    expect(cartBadge).toHaveTextContent('5');
  });
});
