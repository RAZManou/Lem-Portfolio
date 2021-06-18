import React from "react";
import { Box } from "@material-ui/core";
import ChooseLanguage from "./chooseLanguage/chooseLanguage";
import Link from "next/link";
import Menu from "./menu/menu";

const NavigationBar = () => {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "row",
        width: "inherit",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <ChooseLanguage />
      <Menu />
    </Box>
  );
};

export default NavigationBar;
