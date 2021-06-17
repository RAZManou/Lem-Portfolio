import React, { FC } from "react";
import { Box } from "@material-ui/core";
import { MenuInterface, ROUTES } from "../../../../constants/routes";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const Menu: FC = () => {
  const { t } = useTranslation();

  const MENUS: MenuInterface[] = [
    {
      label: t("menu.home"),
      route: ROUTES.HOME,
    },
    {
      label: t("menu.about"),
      route: ROUTES.ABOUT,
    },
  ];
  return (
    <Box style={{ display: "flex" }}>
      {MENUS.map((menu) => (
        <Box
          key={menu.route}
          style={{
            paddingLeft: 15,
            paddingRight: 15,
          }}
        >
          <Link href={menu.route}>{menu.label}</Link>
        </Box>
      ))}
    </Box>
  );
};

export default Menu;
