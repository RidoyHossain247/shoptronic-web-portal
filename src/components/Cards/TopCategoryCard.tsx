import { Box, Typography, styled } from '@mui/material';
import React, { FC } from 'react';

interface iCategory {
  svgImage: any;
  title: string
}

const TopCategoryCard: FC<iCategory> = ({ svgImage, title }) => {
  return (
    <CategoryWrapper>
      {svgImage}
      <CategoryTitle variant='h3'>{title}</CategoryTitle>
    </CategoryWrapper>
  )
}

export default TopCategoryCard

const CategoryWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: "space-between",
  minHeight: '250px',
  borderRadius: '10px',
  cursor: 'pointer',
  transition: 'all .5s',
  '.category-icon path': {
    transition: 'all .5s',
  },
  ":hover": {
    backgroundColor: theme.palette.primary.main,
    '.MuiTypography-root': {
      color: '#fff',
      transition: 'all .5s',
    },
    '.category-icon path': {
      fill: "white",
      fillOpacity: 1,
      transition: 'all .5s',
    }
  }
}))
const CategoryTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 300,
  marginTop: '16px',
  transition: 'all .5s',
}))