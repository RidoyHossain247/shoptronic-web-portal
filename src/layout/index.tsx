import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }: any) => {

  const [headerOffsetHeight, setHeaderOffsetHeight] = useState(0)
  const [footerOffsetHeight, setFooterOffsetHeight] = useState(0)

  const headerHightId = 'headerHightId'
  const footerHightId = 'footerHightId'

  useEffect(() => {
    const headerHight = document.getElementById(headerHightId)
    const footerHight = document.getElementById(headerHightId)
    setHeaderOffsetHeight(headerHight?.offsetHeight)
    setFooterOffsetHeight(footerHight?.offsetHeight)
  }, [])

  return (
    <>
      <Header headerHightId={headerHightId} />
      <Box minHeight={`calc(100vh - ${headerOffsetHeight + footerOffsetHeight}px)`}>
        {children}
      </Box>
      <Footer footerHightId={footerHightId} />
    </>
  )
}

export default Layout
