'use client'

import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';


const ResponsiveCard = ({ title, content, width, margin }: any) => {

  return (
    <Card sx={{
        maxWidth: width,
        margin: margin,
    }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" component="div">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ResponsiveCard;
