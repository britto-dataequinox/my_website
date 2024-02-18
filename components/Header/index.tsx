'use client'

import React from 'react';
import { AppBar, Badge, IconButton, Toolbar, Typography } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import Link from 'next/link';
import { useRouter } from 'next/router';

const CustomAppBar = ({ cartItemCount }: any) => {
  const router = useRouter()
  const navigateToHome = () => {
    router.push('/')
  }
  return (
    <AppBar position="fixed" sx={{ background: '#111927' }}>
      <Toolbar>
        <Typography onClick={() => navigateToHome()} variant="h6" component="div" sx={{ flexGrow: 1, color: '#E6E6E6', cursor: 'pointer' }}>
            Online Store
        </Typography>
        <IconButton>
          <Link href={`/cart`} passHref>
          <Badge badgeContent={cartItemCount} color="secondary" data-testid="cart-badge">
                <ShoppingCart />
              </Badge>
          </Link>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
