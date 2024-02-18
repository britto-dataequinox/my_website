import React from 'react';
import { render, screen } from '@testing-library/react';
import MyApp from '@/pages/_app';



jest.mock('next/router', () => ({
  events: {
    on: jest.fn(),
    off: jest.fn(),
  },
  useRouter: jest.fn()
}));

describe('MyApp', () => {
  test('renders component without loader when loading is false', () => {
    render(<MyApp Component={() => <div data-testid="component">Test Component</div>} pageProps={{}} />);
    expect(screen.queryByTestId('router-loader')).not.toBeInTheDocument(); // RouterLoader should not be rendered
    expect(screen.getByTestId('component')).toBeInTheDocument(); // Component should be rendered
  });

  test('renders loader when loading is true', () => {
    const mockOn = jest.fn();
    require('next/router').events.on.mockImplementation(mockOn);
    mockOn.mockImplementation((event, handler) => {
      if (event === 'routeChangeStart') {
        handler(); 
      }
    });

    render(<MyApp Component={() => <div data-testid="component">Test Component</div>} pageProps={{}} />);
    
    expect(screen.getByTestId('router-loader')).toBeInTheDocument(); // RouterLoader should be rendered
  });

  test('stops loader when loading is false', () => {
    const mockOn = jest.fn();
    const mockOff = jest.fn();
    require('next/router').events.on.mockImplementation(mockOn);
    require('next/router').events.off.mockImplementation(mockOff);
    
    mockOn.mockImplementation((event, handler) => {
      if (event === 'routeChangeStart') {
        handler();
      } else if (event === 'routeChangeComplete') {
        handler(); 
      }
    });

    render(<MyApp Component={() => <div data-testid="component">Test Component</div>} pageProps={{}} />);
    
    expect(screen.queryByTestId('router-loader')).not.toBeInTheDocument(); // RouterLoader should not be rendered
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
