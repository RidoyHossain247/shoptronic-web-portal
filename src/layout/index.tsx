import { Box } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

interface iLayoutProps {
  children: any;
}

const Layout: React.FC<iLayoutProps> = ({ children }): JSX.Element => {

  const [headerHeight1, setHeaderHeight1] = useState(0)
  const [footerHeight1, setfooterHeight1] = useState(0)
  const headerHight = useRef();
  const footerHight = useRef();
  useEffect(() => {
    setHeaderHeight1(headerHight.current.clientHeight);
    setfooterHeight1(footerHight.current.clientHeight);

  }, [])

  const totalHeight = headerHeight1 + footerHeight1

  return (
    <>
      <Header headerHight={headerHight} />
      <Box minHeight={`calc(100vh - ${totalHeight}px )`}>
        {children}
      </Box>
      <Footer footerHight={footerHight} />
    </>
  )
}

export default Layout
