import Layout from '../components/layout/layout';
import { useTranslation } from 'react-i18next';
import ScreenTitle from '../components/titles/ScreenTitle';

const About = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <ScreenTitle
        title={t('menu.about')}
        subTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text."
      />
    </Layout>
  );
};

export default About;
