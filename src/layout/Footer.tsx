import { Box, Container, Typography, styled } from "@mui/material"
import React from "react"

const Footer = ({ footerHightId }) => {
  return (
    <Box id={footerHightId} borderTop={'1px solid #413333'}>
      <Container>
        <CopyRightTtitle>
          Copyright 2022 ©Ninja. All rights reserved. Powered by Ninja.
        </CopyRightTtitle>
      </Container>
    </Box>
  )
}

export default Footer
const CopyRightTtitle = styled(Typography)(({ theme }) => ({
  fontSize: '18px',
  color: '#413333',
  textAlign: 'center',
  backgroundColor: '#fff',
  padding: '8px 0',
  lineHeight: 1.5,
  [theme.breakpoints.only('xs')]: {
    fontSize: '15px',
  }
}))