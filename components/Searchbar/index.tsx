'use client'

import React, { useState } from 'react';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import { Box } from '@mui/material';

const searchBoxStyles: any = {
  root: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#FFFFFF',
    },
    marginRight: 16,
    marginLeft: 16,
    width: '100%',
    '@media (min-width: 600px)': {
      width: 'auto',
    },
  },
  inputRoot: {
    color: 'inherit',
    flexGrow: 1,
  },
  inputInput: {
    padding: '10px',
    paddingLeft: 'calc(1em + 40px)',
    transition: 'width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    width: '100%',
    '@media (min-width: 600px)': {
      width: '20ch',
    },
  },
};

const SearchBox = ({ placeholder, onSearch, onChange, searchValue }: any) => {
  

  return (
    <Box sx={searchBoxStyles.root}>
      <InputBase
        placeholder={placeholder}
        classes={{
          root: searchBoxStyles.inputRoot,
          input: searchBoxStyles.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
        onChange={onChange}
        value={searchValue}
      />
      <IconButton onClick={onSearch} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Box>
  );
};

export default SearchBox;
