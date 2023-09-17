
import { Box, Button, Container, Grid, Typography, styled } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import headPhone from '../../assets/images/product-img/HeadPhone.png';
const HeroBanner = () => {
  return (
    <Container>
      <BannerWrapper>
        <Grid container spacing={3} alignItems={'center'} justifyContent={"space-between"} flexDirection={{ xs: 'column-reverse', sm: 'row' }}>
          <Grid item xs={12} sm={6}>
            <Title variant='body2'>Enhance Your Music Experience</Title>
            <Heading variant='h1'>Enhance Your Music
              Experience</Heading>
            <BannerButton variant='contained'>Check it out!</BannerButton>
          </Grid>
          <Grid item xs={12} sm={5} md={4}>
            <Box mx={5}>
              <Image
                alt="Mountains"
                src={headPhone}
                style={{ width: '100%', height: 'auto' }}
              />
            </Box>
          </Grid>
        </Grid>

      </BannerWrapper>
    </Container>
  )
}

export default HeroBanner

const BannerWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: '#F9F3F0',
  padding: '50px 30px',
  borderRadius: '10px',
  [theme.breakpoints.only("xs")]: {
    padding: '15px 15px',
  }
}))
const Title = styled(Typography)(() => ({
  fontSize: '12px'
}))
const Heading = styled(Typography)(({ theme }) => ({
  fontSize: '50px',
  lineHeight: '1.1',
  [theme.breakpoints.only("xs")]: {
    fontSize: '26px',
  },
  [theme.breakpoints.only("sm")]: {
    fontSize: '33px',
  }
}))
const BannerButton = styled(Button)(() => ({
  marginTop: '30px',
  textTransform: 'capitalize'
}))