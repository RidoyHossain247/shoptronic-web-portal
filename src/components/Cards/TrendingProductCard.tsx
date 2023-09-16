import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button, IconButton, Stack, Typography, styled } from '@mui/material';
import React from 'react';
import FevaretIcon from '../svg-component/FevaretIcon';
const TrendingProductCard = () => {
  return (
    <BoxWrapper>
      <ImageWrapper>
        <img width={'100%'} className='image-inner' style={{ transition: '.5s', }} src={'https://c8.alamy.com/comp/2C505B3/wild-life-nature-photographer-take-a-picture-in-field-2C505B3.jpg'} alt={'Image name'} />
        <CardButtonWrapper className='card-overlly'>
          <Stack direction="row" spacing={2} alignItems={'center'}>
            <FevarateButton aria-label="delete" size="small">
              <DeleteIcon fontSize="small" />
            </FevarateButton>
            <AddToCartButton >Add to Cart</AddToCartButton>
            <FevarateButton aria-label="delete" size="small">
              <FevaretIcon />
            </FevarateButton>
          </Stack>
        </CardButtonWrapper>
      </ImageWrapper>
      <TextWrapper>
        <Title variant='body1'>Smart Digital Watch</Title>
        <PriceWrapper>
          <DisPrice variant='body2'>$29.99</DisPrice>
          <RegularPrice variant='body2'>$250.99</RegularPrice>
        </PriceWrapper>
      </TextWrapper>
    </BoxWrapper>
  )
}

export default TrendingProductCard

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
    '.card-overlly': {
      opacity: '1',
      bottom: '30px',
      left: '50%',
    },
    '.image-inner': {
      transform: 'scale(1.1)',
      transition: '.5s',
    }
  }
}))
const ImageWrapper = styled(Box)(() => ({
  backgroundColor: '#F6F7FB',
  position: 'relative',
  minHeight: '150px',
  overflow: 'hidden'
}))
const TextWrapper = styled(Box)(() => ({
  padding: '15px'
}))
const Title = styled(Typography)(() => ({
  color: 'rgba(24, 20, 20, 0.74)',
  fontWeight: '500'
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
  ':hover': {
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
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
const CardButtonWrapper = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: '30px',
  left: '-50%',
  transform: 'translate(-50%)',
  opacity: '0',
  transition: '.5s',
}))
