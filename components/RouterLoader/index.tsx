import React from 'react';
import Head from 'next/head';
import CircularProgress from '@mui/material/CircularProgress';
import { Box, Typography } from '@mui/material';

const RouterLoader = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Head>
        <title>Loading | BTM INDUSTRIES</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
        <CircularProgress data-testid='router-loader' size={150} />
        <Typography
          variant="body1"
          component="div"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'rgba(0, 0, 0, 0.5)',
          }}
        >
          BTM INDUSTRIES
        </Typography>
      </Box>
    </Box>
  );
};

export default RouterLoader;
