import { Box } from '@mui/material';
import React from 'react';

const EmptyPlaceholder = ({ children }: any) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '20vh',
        width: '100%',
        border: '1px dashed #aaa',
        borderRadius: '8px',
        color: '#aaa',
        ml: 2,
        mr: 2
      }}
    >
      {children}
    </Box>
  );
};

export default EmptyPlaceholder;
