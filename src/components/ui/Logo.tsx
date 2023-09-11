import { styled } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <LogoWrapper>
      <Link href={'/'} style={{ color: 'inherit', textDecoration: 'none' }}>
        <Shop >Shop</Shop>
        <Tronics >tronics</Tronics>
      </Link>
    </LogoWrapper>
  )
}

export default Logo

const LogoWrapper = styled('h1')(({ theme }) => ({
  color: '#3577F0',
  fontSize: '37px',
  fontStyle: 'normal',
  lineHeight: 'normal',
  [theme.breakpoints.down('sm')]: {
    fontSize: '26px',
  }
}));

const Shop = styled('span')(({ theme }) => ({
  fontWeight: '300',
}));

const Tronics = styled('span')(({ theme }) => ({
  fontWeight: '700',
}));
