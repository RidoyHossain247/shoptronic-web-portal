import { Box, Container, Stack, styled } from '@mui/material'
import React from 'react'
import CartIcon from '../components/svg-component/CartIcon'
import FevaretIcon from '../components/svg-component/FevaretIcon'
import UserIcon from '../components/svg-component/UserIcon'
import Logo from '../components/ui/Logo'
import SearchBar from '../components/ui/SearchBar'
import MenuList from './MenuList'
import Profile from './Profile'

const Header = ({ headerHightId }: { headerHightId: string }) => {

  return (
    <Box boxShadow={1} id={headerHightId}>
      <Container>
        <HeaderTopWrapper>
          <Logo />
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <SearchBar />
          </Box>
          <Stack direction="row" spacing={2}>
            <Profile icon={<UserIcon />} badgeContent={0} />
            <Profile icon={<FevaretIcon />} badgeContent={0} />
            <Profile icon={<CartIcon />} badgeContent={5} />
          </Stack>
        </HeaderTopWrapper>
        <MenuList />
        <Box sx={{ display: { xs: 'block', md: 'none' }, paddingBottom: '8px' }} >
          <SearchBar />
        </Box>
      </Container>
    </Box>
  )
}

export default Header
const HeaderTopWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: "center",
  justifyContent: 'space-between',
  padding: '8px 0',
}));