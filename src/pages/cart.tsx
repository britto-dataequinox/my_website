import React from 'react';
import AppBarWithoutCart from '../../components/Header/AppbarWithoutCart';
import EmptyPlaceholder from '../../components/Placeholder/emptyPlaceholder';
import { Box } from '@mui/material';

const Cart = () => {
  return (
    <>
      <AppBarWithoutCart />
      <Box sx={{ mt: 25, mb: 25, mr: 4 }}>
      <EmptyPlaceholder>Cart work not getting started</EmptyPlaceholder>
      </Box>
    </>
  );
};

export default Cart;
