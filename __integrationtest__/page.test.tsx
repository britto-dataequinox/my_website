import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import Home from '../src/pages'
import { mockproducts } from '../__mocks__/mockproduct';
import { mockcategories } from '../__mocks__/mockcategories';
import CustomAppBar from '../components/Header';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathName: "",
      query: "",
      asPath: "/",
      push: jest.fn()
    }
  }
}));

describe('Page', () => {
  test('renders a heading', () => {
    render(<Home products={mockproducts} categories={mockcategories} />)
 
    screen.getByRole('heading', { name: /All Products/i })
  })

  test('renders title', () => {
    const { getByText } = render(<Home products={mockproducts} categories={mockcategories} />);
    expect(getByText('All Products')).toBeInTheDocument();
  });

  test('renders content with correct text', () => {
    const { getByText } = render(<Home products={mockproducts} categories={mockcategories} />);
    expect(getByText('Made by BTM INDUSTRIES')).toBeInTheDocument();
  });

  test('renders card with correct icon', () => {
    const { getByTestId } = render(<Home products={mockproducts} categories={mockcategories} />);
    expect(getByTestId('copyright-icon')).toBeInTheDocument();
  });

  test('render the placeholder text', () => {
    const { getByPlaceholderText } = render(<Home products={mockproducts} categories={mockcategories} />);
    const input = getByPlaceholderText('search...');
    expect(input).toBeInTheDocument();
  });

  test('render all products', () => {
    const { getByText } = render(<Home products={mockproducts} categories={[]} />)

    mockproducts.map((item: any, index: any) => {
      expect(getByText(item.name)).toBeInTheDocument();
      expect(getByText(item.price.formatted_with_symbol)).toBeInTheDocument();
    })
  });

  test('render all categories', () => {
    const { getByText } = render(<Home products={[]} categories={mockcategories} />)

    mockcategories.map((item: any, index: any) => {
      expect(getByText(item.name)).toBeInTheDocument()
    })
  });

  test('show search items when search result is not empty', () => {
    render(<Home products={mockproducts} categories={mockcategories} />)
    fireEvent.change(screen.getByPlaceholderText('search...'), { target: { value: 'Apple MacBook Air' } });
    expect(screen.getByText('Apple MacBook Air')).toBeInTheDocument();
    expect(screen.queryByText('i am not in the searched list')).not.toBeInTheDocument();
  })

  test('should filter products by category checkbox', () => {
    render(<Home products={mockproducts} categories={mockcategories} />);
    fireEvent.click(screen.getByLabelText('Electronics'));
    expect(screen.getByText('Electronics')).toBeInTheDocument();
    expect(screen.queryByText('i am not in the searched list')).not.toBeInTheDocument();
  });

  test('should display a message when search result is not found', () => {
    render(<Home products={mockproducts} categories={mockcategories} />);
    fireEvent.change(screen.getByPlaceholderText('search...'), { target: { value: 'Product 3' } });
    expect(screen.getByText('No products found.')).toBeInTheDocument();
  });

  test('renders AppBar correctly', () => {
    render(<CustomAppBar cartItemCount={5} />);
    const titleElement = screen.getByText('Online Store');
    expect(titleElement).toBeInTheDocument();
  });
})