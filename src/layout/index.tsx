import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';

interface iProps {
  children: any;
  headerHight: any;
  footerHight: any;
  headerHightId: string;
  footerHightId: string;
  headerOffsetHeight: number;
  footerOffsetHeight: number;
}

const Layout: React.FC<iProps> = ({ children }): JSX.Element => {

  const [headerOffsetHeight, setHeaderOffsetHeight] = useState(0)
  const [footerOffsetHeight, setFooterOffsetHeight] = useState(0)

  const headerHightId = 'headerHightId'
  const footerHightId = 'footerHightId'

  useEffect(() => {
    const headerHight = document.getElementById(headerHightId)
    const footerHight = document.getElementById(footerHightId)
    setHeaderOffsetHeight(headerHight.offsetHeight)
    setFooterOffsetHeight(footerHight.offsetHeight)
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
