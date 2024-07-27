import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import '../styles/globals.css'; // Adjust the path if necessary

function MyApp({ Component, pageProps }) {
  return (
    <ParallaxProvider>
      <Component {...pageProps} />
    </ParallaxProvider>
  );
}

export default MyApp;
