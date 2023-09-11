import { Box, Button, TextField, styled } from '@mui/material'
import React from 'react'
import SearchIcon from '../svg-component/SearchIcon'
const SearchBar = () => {
  return (
    <SearchWrapper>
      <SearchIcon />
      <TextInputField
        placeholder="Search for products"
      />
      <SearchButton>Search</SearchButton>
    </SearchWrapper>
  )
}

export default SearchBar
const SearchWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  border: '1px solid rgba(53, 119, 240, 0.75)',
  borderRadius: '3px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  overflow: 'hidden',
}));
const TextInputField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  '.MuiOutlinedInput-input': {
    padding: '0px'
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
  [theme.breakpoints.up('sm')]: {
    width: '500px',
  }
}));
const SearchButton = styled(Button)(({ theme }) => ({
  textTransform: 'capitalize',
  color: '#F5F5F5',
  backgroundColor: theme.palette.primary.main,
  borderRadius: '0px',
  padding: '6px 40px',
  fontSize: '19px',
  fontWeight: '400',
  ':hover': {
    color: '#F5F5F5',
    backgroundColor: theme.palette.primary.main,
  },
  [theme.breakpoints.down('sm')]: {
    padding: '4px 0px',
    fontSize: '14px',
  },
})); 