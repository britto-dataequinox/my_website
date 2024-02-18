import React from 'react';
import { render } from '@testing-library/react';
import RouterLoader from '../components/RouterLoader';

describe('RouterLoader component', () => {
  test('renders correctly', () => {
    const { getByText } = render(<RouterLoader />);
    const loadingText = getByText('BTM INDUSTRIES');
    expect(loadingText).toBeInTheDocument();
    const circularProgress = document.querySelector('svg');
    expect(circularProgress).toBeInTheDocument();
  });
});
