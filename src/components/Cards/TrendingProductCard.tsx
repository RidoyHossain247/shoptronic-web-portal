import { Box, Button, IconButton, Stack, Typography, styled } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import tv from '../../assets/images/product-img/tv.jpeg';
import CartIcon from '../svg-component/CartIcon';
import EyeIcon from '../svg-component/EyeIcon';
import FevaretIcon from '../svg-component/FevaretIcon';
const TrendingProductCard = () => {
  return (
    <BoxWrapper>
      <ImageWrapper>
        <MainImage
          alt="Mountains"
          src={tv}
          sizes="100vw"
          className='image-inner'
        />
        <CardButtonWrapper className='card-overlly'>
          <Stack direction="row" spacing={2} alignItems={'center'}>
            <FevarateButton aria-label="delete" size="small">
              <EyeIcon />
            </FevarateButton>
            <AddToCartButton >Add to Cart</AddToCartButton>
            <FevarateButton aria-label="delete" size="small">
              <FevaretIcon />
            </FevarateButton>
          </Stack>
        </CardButtonWrapper>
      </ImageWrapper>
      <TextWrapper>
        <Heading variant='body1'>Smart Digital Watch</Heading>
        <PriceWrapper>
          <DisPrice variant='body2'>$29.99</DisPrice>
          <RegularPrice variant='body2'>$250.99</RegularPrice>
        </PriceWrapper>
      </TextWrapper>
      <AddToCartIconButton startIcon={<CartIcon />}>Add to Cart</AddToCartIconButton>
    </BoxWrapper>
  )
}

export default TrendingProductCard

const BoxWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: '#FEFEFE',
  borderRadius: '10px',
  overflow: 'hidden',
  cursor: 'pointer',
  position: 'relative',
  transition: '.5s',
  top: '0',
  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.05)',
  ':hover': {
    transition: '.5s',

    top: '-8px',
    '.image-inner': {
      transform: 'translateY(-50%) scale(1.1)',
    },
    '.card-overlly': {
      [theme.breakpoints.up('md')]: {
        opacity: '1',
        bottom: '30px',
        left: '50%',
      }

    },
  }
}))
const ImageWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  backgroundColor: '#F6F7FB',
  height: '150px',
  overflow: 'hidden',
  [theme.breakpoints.only("xs")]: {
    height: '100px',
  },
  [theme.breakpoints.only("sm")]: {
    height: '150px',
  }
}))
const MainImage = styled(Image)(() => ({
  position: 'relative',
  top: '50%',
  transform: 'translateY(-50%) scale(1)',
  transition: '.5s',
  width: '100%',
  height: '100%',
  objectFit: 'cover'
}))
const TextWrapper = styled(Box)(({ theme }) => ({
  padding: '15px',
  [theme.breakpoints.only("xs")]: {
    padding: '10px 0',
  },
}))
const Heading = styled(Typography)(({ theme }) => ({
  color: 'rgba(24, 20, 20, 0.74)',
  fontWeight: '500',
  [theme.breakpoints.only("xs")]: {
    fontSize: '15px',
    lineHeight: '1.2'
  },
  [theme.breakpoints.only("sm")]: {
    lineHeight: '1.2',
    fontSize: '16px',
  }
}))
const PriceWrapper = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '32px',
  marginTop: '8px'
}))
const DisPrice = styled(Typography)(() => ({
  fontSize: '15px',
  color: 'rgba(24, 20, 20, 0.86)',
  fontWeight: '500'
}))
const RegularPrice = styled(Typography)(() => ({
  fontSize: '15px',
  color: 'rgba(24, 20, 20, 0.34)',
  fontWeight: '500',
  textDecorationLine: 'line-through'
}))
const AddToCartButton = styled(Button)(({ theme }) => ({
  fontSize: '13px',
  fontWeight: '500',
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
  textTransform: 'capitalize',
  borderRadius: 0,
  minHeight: '33px',
  textWrap: 'nowrap',
  width: '100%',
  ':hover': {
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
  }
}))
const CardButtonWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    position: 'absolute',
    bottom: '30px',
    left: '-50%',
    transform: 'translate(-50%)',
    opacity: '0',
    transition: '.5s',
  }
}))
const FevarateButton = styled(IconButton)(({ theme }) => ({
  fontSize: '13px',
  fontWeight: '500',
  backgroundColor: theme.palette.common.white,
  color: '#000',
  textTransform: 'capitalize',
  borderRadius: 0,
  minWidth: '33px',
  minHeight: '33px',
  ':hover': {
    backgroundColor: theme.palette.common.white,
    color: '#000',
  }
}))
const AddToCartIconButton = styled(Button)(({ theme }) => ({
  fontSize: '13px',
  fontWeight: '500',
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
  textTransform: 'capitalize',
  borderRadius: 0,
  minHeight: '33px',
  textWrap: 'nowrap',
  width: '100%',
  '.add-to-cart path': {
    stroke: "white",
    fillOpacity: 1,
    transition: 'all .5s',
  },
  ':hover': {
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
  },
  [theme.breakpoints.up('md')]: {
    display: 'none'
  }
}))
