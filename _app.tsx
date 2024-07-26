// pages/_app.tsx

import type { AppProps } from 'next/app';
import SideMenu from '../components/SideMenu'; // Adjust path as needed
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const theme = createTheme();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SideMenu />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
