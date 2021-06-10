import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en";
import fr from "./locales/fr";
import { FlagEnums } from "../../Constants/translations";

const resources = {
  [FlagEnums.ENGLISH]: {
    translation: en,
  },
  [FlagEnums.FRENCH]: {
    translation: fr,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: FlagEnums.ENGLISH,
  keySeparator: false, // we do not use keys in form messages.welcome
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
