import React from "react";
import Box from "@material-ui/core/Box";
import { useTranslation } from "react-i18next";

const HomeScreen = () => {
  const { t } = useTranslation();

  return <Box>{t("home.welcome")}</Box>;
};

export default HomeScreen;
