import React from "react";
import { ThemeProvider, createMuiTheme, Box } from "@material-ui/core";
import Layout from "../components/layout/layout";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#3E3D40",
      },
      secondary: {
        main: "#FF4340",
      },
      info: {
        main: "#E2E6EA",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Box>{t("home.welcome")}</Box>
      </Layout>
    </ThemeProvider>
  );
};

export default Home;
