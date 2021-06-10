import { Box, makeStyles, createStyles } from "@material-ui/core";
import React from "react";
import ChooseLanguage from "../ChooseLanguage/ChooseLanguage";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "row",
      height: 60,
      width: "inherit",
      justifyContent: "space-between",
      alignItems: "center",
    },
  })
);

const NavigationBar = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <ChooseLanguage />
      <Box>MENU</Box>
    </Box>
  );
};

export default NavigationBar;
