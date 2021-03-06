import '../styles/globals.css';
import type { AppProps } from 'next/app';
import '../services/i18n';
import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';
import { LANGUAGE_CHOICE } from '../constants/localStorages';
import { Box } from '@material-ui/core';
import THEMES from '../constants/themes';
import FONT_SIZES from '../constants/fontSizes';
import FirstLoadProvider from '../providers/FirstLoadProvider';
import Layout from '../components/layout/layout';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { i18n } = useTranslation();
  const [loaded, setLoaded] = useState(false);

  // Get language choice saved in localStorage
  useEffect(() => {
    const languageChoice = localStorage.getItem(LANGUAGE_CHOICE);
    if (languageChoice) i18n.changeLanguage(languageChoice);
  }, [i18n]);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    // Default fontSize & fontFamily Here
    <FirstLoadProvider>
      <Layout>
        <Box
          style={{
            fontSize: FONT_SIZES.default,
            fontFamily: 'inherit',
            color: THEMES.dark.white,
          }}
        >
          <Component {...pageProps} />
        </Box>
      </Layout>
    </FirstLoadProvider>
  );
};
export default MyApp;
