import { ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';
import React from 'react';
import Layout from '../layout';
import '../styles/globals.css';
import { theme } from '../theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )

}