export const myPersonalInfos = {
  FULL_NAME: 'Manoa Andoniaina RAZAFMISATA',
  NAME: 'RAZAFIMISATA',
  FIRSTNAME: 'Manoa',
  SECOND_FIRSTNAME: 'Andoniaina',
  EMAIL: 'manoandoniaina@gmail.com',
  PHONE_TELMA: '+261 34 49 808 53',
  PHONE_ORANGE: '+261 32 48 424 45',
  LINKEDIN_NAME: 'Manoa RAZAFIMISATA',
  SKYPE_PRO: 'Manoa.Wylog',
  SKYPE_PRO_PSEUDO: 'live:.cid.ce1e99c83decd98a',
  SKYPE_PERSO: 'Manou RAZAFIMISATA',
  SKYPE_PERSO_PSEUDO: 'live:.cid.b1d047a53e1890ec',
  BIRTH_YEAR: 1996,
};

export const getMyAge = () => {
  const today = new Date();
  const currentYear = today.getFullYear();
  return currentYear - myPersonalInfos.BIRTH_YEAR;
};

export default myPersonalInfos;
