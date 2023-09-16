import { Stack, styled } from '@mui/material'
import Link from 'next/link'
import React from 'react'
const MenuList = () => {

  const menuItems = [
    {
      id: 1,
      name: 'Home',
      url: '/'
    },
    {
      id: 2,
      name: 'Shop',
      url: '/shope'
    },
    {
      id: 3,
      name: 'About',
      url: 'about'
    },
    {
      id: 4,
      name: 'Account',
      url: '/account'
    },
    {
      id: 5,
      name: 'Contact',
      url: '/contact'
    },
  ]

  return (
    <Stack direction="row" spacing={2} justifyContent={'center'} alignItems={'center'}>
      {menuItems.map((item) =>
        <LinkItem key={item.id} href={item.url}>{item.name}</LinkItem>
      )}
    </Stack>
  )
}

export default MenuList



const LinkItem = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: 'inherit',
  backgroundColor: "#fff",
  [theme.breakpoints.down('sm')]: {
    paddingBottom: '15px',
  },
  [theme.breakpoints.up('sm')]: {
    paddingTop: '8px',
    paddingBottom: '16px',
  }
}));