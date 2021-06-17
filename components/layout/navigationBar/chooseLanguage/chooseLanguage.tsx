import { Box, makeStyles, createStyles } from "@material-ui/core";
import React from "react";
import { FlagEnums } from "../../../../constants/translations";
import CustomFlag from "./customFlag/customFlag";
import { useTranslation } from "react-i18next";

const ChooseLanguage = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      {currentLanguage === FlagEnums.FRENCH ? (
        <CustomFlag language={FlagEnums.ENGLISH} />
      ) : (
        <CustomFlag language={FlagEnums.FRENCH} />
      )}
    </Box>
  );
};

export default ChooseLanguage;
