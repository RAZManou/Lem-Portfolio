import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../services/i18n";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { LANGUAGE_CHOICE } from "../constants/localStorages";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { t, i18n } = useTranslation();

  // Get language choice saved in localStorage
  useEffect(() => {
    const languageChoice = localStorage.getItem(LANGUAGE_CHOICE);
    if (languageChoice) i18n.changeLanguage(languageChoice);
  }, [i18n]);

  return <Component {...pageProps} />;
};
export default MyApp;
