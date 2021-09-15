export const FULL_NAME = 'Manoa Andoniaina RAZAFMISATA';
export const NAME = 'RAZAFIMISATA';
export const FIRSTNAME = 'Manoa';
export const SECOND_FIRSTNAME = 'Andoniaina';
export const EMAIL = 'manoandoniaina@gmail.com';
export const PHONE_TELMA = '+261 34 49 808 53';
export const PHONE_ORANGE = '+261 32 48 424 45';
export const LINKEDIN_NAME = 'Manoa RAZAFIMISATA';
export const SKYPE_PRO = 'Manoa.Wylog';
export const SKYPE_PRO_PSEUDO = 'live:.cid.ce1e99c83decd98a';
export const SKYPE_PERSO = 'Manou RAZAFIMISATA';
export const SKYPE_PERSO_PSEUDO = 'live:.cid.b1d047a53e1890ec';
export const BIRTH_YEAR = 1996;

export const getMyAge = () => {
  const today = new Date();
  const currentYear = today.getFullYear();
  return currentYear - BIRTH_YEAR;
};
