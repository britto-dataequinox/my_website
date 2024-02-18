import React from 'react';
import { render } from '@testing-library/react';
import ResponsiveGrid from '../components/Grid';

describe('ResponsiveGrid component', () => {
  test('renders children without crashing', () => {
    const ChildComponent = () => <div>Child Component</div>;
    
    const { getByText } = render(
      <ResponsiveGrid>
        <ChildComponent />
      </ResponsiveGrid>
    );

    expect(getByText('Child Component')).toBeInTheDocument();
  });

  test('applies spacing prop correctly', () => {
    const ChildComponent = () => <div>Child Component</div>;

    const { container } = render(
      <ResponsiveGrid>
        <ChildComponent />
        <ChildComponent />
      </ResponsiveGrid>
    );

    const gridItems = container.querySelectorAll('.MuiGrid-spacing-xs-2');
    expect(gridItems.length).toBe(1);
  });
});
