
import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import TrendingProductCard from '../Cards/TrendingProductCard'
import CameraIcon from '../svg-component/CameraIcon'
import ComputerIcon from '../svg-component/ComputerIcon'
import HeadPhoneIcon from '../svg-component/HeadPhoneIcon'
import MobileIcon from '../svg-component/MobileIcon'
import SpekerIcon from '../svg-component/SpekerIcon'
import SectionTopHeading from '../ui/SectionTopHeading/SectionTopHeading'

const TrendingProduct = () => {
  const data = [
    {
      id: 1,
      categoryIcon: <MobileIcon />,
      categoryTitle: "Mobile",
      url: ''
    },
    {
      id: 2,
      categoryIcon: <ComputerIcon />,
      categoryTitle: "Computer",
      url: ''
    },
    {
      id: 3,
      categoryIcon: <HeadPhoneIcon />,
      categoryTitle: "Head Phone",
      url: ''
    },
    {
      id: 4,
      categoryIcon: <SpekerIcon />,
      categoryTitle: "Speaker",
      url: ''
    },
    {
      id: 5,
      categoryIcon: <CameraIcon />,
      categoryTitle: "Camera",
      url: ''
    },
  ]

  return (
    <Box py={5}>
      <Container>
        <SectionTopHeading heading={'Trending Products'} title={'Categories'} />
        <Grid container spacing={2} mt={2}>
          {data.map((item) =>
            <Grid key={item.id} item xs={6} sm={4} lg={2.4}>
              <TrendingProductCard />
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  )
}

export default TrendingProduct
