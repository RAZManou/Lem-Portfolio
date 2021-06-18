import React from "react";
import { Box } from "@material-ui/core";
import Layout from "../components/layout/layout";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Box>{t("home.welcome")}</Box>
    </Layout>
  );
};

export default Home;
