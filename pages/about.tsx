import Layout from "../components/layout/layout";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <div>{t("menu.about")}</div>
    </Layout>
  );
};

export default About;
