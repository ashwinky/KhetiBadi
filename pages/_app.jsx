import { ThemeProvider } from "next-themes";
import React from "react";
import "@/styles/globals.scss";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
