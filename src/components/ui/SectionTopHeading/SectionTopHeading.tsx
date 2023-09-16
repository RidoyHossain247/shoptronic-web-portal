import { Box, Typography, styled } from '@mui/material';
import React, { FC } from 'react';


interface iTopHeading {
  heading: string;
  title: string;
}

const SectionTopHeading: FC<iTopHeading> = ({ heading, title }) => {
  const headingSplit = heading.split(" ")
  return (
    <Box>
      <TitleStyle variant='body1'>{title}</TitleStyle>
      <Typography component={'h3'}><Typography component={'span'} variant='h3'>{headingSplit[0]}</Typography> <HeadingStyle component={'span'} variant='h3'>{headingSplit[1]}</HeadingStyle></Typography>
    </Box>
  )
}

export default SectionTopHeading

const TitleStyle = styled(Typography)(({ theme }) => ({
  fontWeight: '300',
  color: theme.palette.primary.main,
  marginBottom: '2px'
}))
const HeadingStyle = styled(Typography)(() => ({
  fontWeight: '300'
}))