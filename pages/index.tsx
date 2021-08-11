import React, { useState, useEffect } from "react";
import { Box, Typography } from "@material-ui/core";
import Layout from "../components/layout/layout";
import { useTranslation } from "react-i18next";
import THEMES from "../constants/themes";
import { NAME, FIRSTNAME } from "../constants/personalInfos";

const duration = 1000;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const Home = () => {
  const { t } = useTranslation();

  const [opacityTitle, setOpacityTitle] = useState(0);
  const [opacityName, setOpacityName] = useState(0);
  const [opacityDesc, setOpacityDesc] = useState(0);

  useEffect(() => {
    setOpacityTitle(1);
    setTimeout(() => {
      setOpacityName(1);
    }, duration);
    setTimeout(() => {
      setOpacityDesc(1);
    }, duration * 2);
  }, []);

  return (
    <Layout>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          style={{
            fontSize: 50,
            fontWeight: "bold",
            textAlign: "center",
            ...defaultStyle,
            opacity: opacityTitle,
          }}
        >
          {t("home.job.title")}
        </Typography>
        <Typography
          style={{
            fontSize: 35,
            textAlign: "center",
            marginTop: 35,
            ...defaultStyle,
            opacity: opacityName,
          }}
        >
          {`${FIRSTNAME} ${NAME}`}
        </Typography>
        <Box
          style={{
            textAlign: "center",
            marginTop: 70,
            fontStyle: "italic",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            ...defaultStyle,
            opacity: opacityDesc,
          }}
        >
          <Box style={{ display: "flex", marginBottom: 10 }}>
            {t("home.intro.1")}
            <Box
              style={{
                marginLeft: 5,
                marginRight: 5,
                color: THEMES.dark.primary,
              }}
            >
              {FIRSTNAME}
            </Box>
            {t("home.intro.2")}
          </Box>

          <Box style={{ display: "flex" }}>
            <Box
              style={{
                marginLeft: 5,
                marginRight: 5,
                color: THEMES.dark.primary,
              }}
            >
              {t("home.intro.3")}
            </Box>
            {t("home.intro.4")}
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;
