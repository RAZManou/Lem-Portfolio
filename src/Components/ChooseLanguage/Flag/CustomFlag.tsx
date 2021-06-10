import { Box, makeStyles, createStyles, Fab } from "@material-ui/core";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { CircleFlag } from "react-circle-flags";
import { FlagEnums } from "../../../Constants/translations";

interface Props {
  language: FlagEnums;
}

const CustomFlag: FC<Props> = (props) => {
  const { language } = props;

  const { i18n } = useTranslation();

  const changeLanguage = () => {
    i18n.changeLanguage(language);
  };

  const isSelected = i18n.language === language;

  const useStyles = makeStyles(() =>
    createStyles({
      container: {
        justifyContent: "center",
        margin: 10,
        height: isSelected ? 45 : 35,
        width: isSelected ? 45 : 35,
      },
    })
  );
  const classes = useStyles();

  return (
    <Fab onClick={changeLanguage} className={classes.container}>
      <CircleFlag countryCode={language} height={isSelected ? "45" : "35"} />
    </Fab>
  );
};

export default CustomFlag;
