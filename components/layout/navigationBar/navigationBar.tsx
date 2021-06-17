import React from "react";
import { Box, makeStyles, createStyles } from "@material-ui/core";
import ChooseLanguage from "./chooseLanguage/chooseLanguage";

const NavigationBar = () => {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "row",
        height: 60,
        width: "inherit",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <ChooseLanguage />
      <Box>MENU HERE</Box>
    </Box>
  );
};

export default NavigationBar;
