import '../styles/globals.css';
import type { AppProps } from 'next/app';
import '../services/i18n';
import { useTranslation } from 'react-i18next';
import React, { useEffect } from 'react';
import { LANGUAGE_CHOICE } from '../constants/localStorages';
import { Box } from '@material-ui/core';
import THEMES from '../constants/themes';
import FONT_SIZES from '../constants/fontSizes';
import FirstLoadProvider from '../providers/FirstLoadProvider';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { i18n } = useTranslation();

  // Get language choice saved in localStorage
  useEffect(() => {
    const languageChoice = localStorage.getItem(LANGUAGE_CHOICE);
    if (languageChoice) i18n.changeLanguage(languageChoice);
  }, [i18n]);

  return (
    // Default fontSize & fontFamily Here
    <FirstLoadProvider>
      <Box
        style={{
          fontSize: FONT_SIZES.default,
          fontFamily: 'inherit',
          color: THEMES.dark.white,
        }}
      >
        <Component {...pageProps} />
      </Box>
    </FirstLoadProvider>
  );
};
export default MyApp;
