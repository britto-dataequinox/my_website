import React from 'react';
import { render } from '@testing-library/react';
import MyApp from '@/pages/_app';

jest.mock('next/router', () => ({
  events: {
    on: jest.fn(),
    off: jest.fn(),
  },
  useRouter: jest.fn(),
}));

describe('MyApp', () => {
  test('my app snap', () => {
    const { asFragment } = render(
      <MyApp
        Component={() => <div data-testid="component">Test Component</div>}
        pageProps={{}}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
