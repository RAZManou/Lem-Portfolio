import { Box, makeStyles, createStyles } from "@material-ui/core";
import React from "react";
import { LANGUAGES } from "../../Constants/translations";
import CustomFlag from "./Flag/CustomFlag";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    },
  })
);

const ChooseLanguage = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      {LANGUAGES.map((language) => (
        <CustomFlag key={language} language={language} />
      ))}
    </Box>
  );
};

export default ChooseLanguage;
