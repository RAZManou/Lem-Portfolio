import { Fab } from "@material-ui/core";
import React, { FC } from "react";
import { FlagEnums } from "../../../../../constants/translations";
import { useTranslation } from "react-i18next";
import { CircleFlag } from "react-circle-flags";
import { LANGUAGE_CHOICE } from "../../../../../constants/localStorages";

interface Props {
  language: FlagEnums;
}

const CustomFlag: FC<Props> = (props) => {
  const { language } = props;

  const { i18n } = useTranslation();

  const changeLanguage = () => {
    i18n.changeLanguage(language).then(() => {
      localStorage.setItem(LANGUAGE_CHOICE, language);
    });
  };

  return (
    <Fab
      onClick={changeLanguage}
      style={{
        justifyContent: "center",
        margin: 10,
        height: 35,
        width: 35,
      }}
    >
      <CircleFlag countryCode={language} height={"35"} />
    </Fab>
  );
};

export default CustomFlag;
