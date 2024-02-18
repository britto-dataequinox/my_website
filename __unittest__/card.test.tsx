import React from 'react';
import { render } from '@testing-library/react';
import ResponsiveCard from '../components/Card';
import { Box } from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';

describe('ResponsiveCard component', () => {
  test('renders with provided props', () => {
    const title: any = (<Box sx={{ textAlign: 'center' }} data-testid="copyright-icon"><CopyrightIcon /></Box>);
    const content: any = (
        <Box sx={{ textAlign: 'center' }}>
          Made by BTM INDUSTRIES
        </Box>
      )
    const width = "100%";
    const margin = "auto 16px 20px 16px";

    const { getByText, getByTestId } = render(
      <ResponsiveCard title={title} content={content} width={width} margin={margin} />
    );

    expect(getByText('Made by BTM INDUSTRIES')).toBeInTheDocument();
    expect(getByTestId('copyright-icon')).toBeInTheDocument();

    const card = getByTestId('copyright-icon').closest('.MuiCard-root');
    expect(card).toHaveStyle(`max-width: ${width}`);
    expect(card).toHaveStyle(`margin: ${margin}`);
  });
});
