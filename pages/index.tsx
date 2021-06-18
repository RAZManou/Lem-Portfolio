import React from "react";
import { Box, Typography } from "@material-ui/core";
import Layout from "../components/layout/layout";
import { useTranslation } from "react-i18next";
import THEMES from "../constants/themes";
import { NAME, FIRSTNAME } from "../constants/personalInfos";

const Home = () => {
  const { t } = useTranslation();

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
          }}
        >
          {t("home.job.title")}
        </Typography>
        <Typography
          style={{
            fontSize: 35,
            textAlign: "center",
            marginTop: 35,
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
