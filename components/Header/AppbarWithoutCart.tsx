'use client';

import React from 'react';
import { AppBar, Badge, IconButton, Toolbar, Typography } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import Link from 'next/link';
import { useRouter } from 'next/router';

const AppBarWithoutCart = () => {
  const router = useRouter();
  const navigateToHome = () => {
    router.push('/');
  };
  return (
    <AppBar position="static" sx={{ background: '#111927' }}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, color: '#E6E6E6', cursor: 'pointer' }}
          onClick={() => navigateToHome()}
        >
          Online Store
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarWithoutCart;
