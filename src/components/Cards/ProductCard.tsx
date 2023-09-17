import { Box, Button, Typography, styled } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import tv from '../../assets/images/product-img/tv2.jpg';
import CartIcon from '../svg-component/CartIcon';


const ProductCard = () => {


  return (
    <BoxWrapper>
      <ImageWrapper>
        <MainImage
          alt="Mountains"
          src={tv}
          sizes="100vw"
          className='image-inner'
        />
      </ImageWrapper>
      <TextWrapper>
        <Title variant='body2'>Smart Clock</Title>
        <Heading variant='subtitle1'>Smart Digital Watch</Heading>
        <PriceWrapper>
          <DisPrice variant='body2'>$29.99</DisPrice>
          <RegularPrice variant='body2'>$250.99</RegularPrice>
        </PriceWrapper>
      </TextWrapper>
      <AddToCartButton startIcon={<CartIcon />}>Add to Cart</AddToCartButton>
    </BoxWrapper>
  )
}

export default ProductCard

const BoxWrapper = styled(Box)(() => ({
  backgroundColor: '#FEFEFE',
  borderRadius: '10px',
  overflow: 'hidden',
  cursor: 'pointer',
  position: 'relative',
  transition: '.5s',
  top: '0',
  ':hover': {
    transition: '.5s',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.05)',
    top: '-8px',
    '.image-inner': {
      transform: 'translateY(-50%) scale(1.1)',
    }
  }
}))
const ImageWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: '#F6F7FB',
  height: '200px',
  overflow: 'hidden',
  [theme.breakpoints.only("xs")]: {
    height: '100px',
  },
  [theme.breakpoints.only("sm")]: {
    height: '200px',
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
const Title = styled(Typography)(({ theme }) => ({
  color: 'rgba(24, 20, 20, 0.56)',
  fontWeight: '400',

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
  '.add-to-cart path': {
    stroke: "white",
    fillOpacity: 1,
    transition: 'all .5s',
  },
  ':hover': {
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
  },

}))

