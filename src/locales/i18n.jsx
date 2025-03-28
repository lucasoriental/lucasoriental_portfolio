import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enHome from "../locales/en/home.json";
import enFreelance from "../locales/en/freelance.json";
import enHiring from "../locales/en/hiring.json";

import ptHome from "../locales/pt/home.json";
import ptFreelance from "../locales/pt/freelance.json";
import ptHiring from "../locales/pt/hiring.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      home: enHome,
      freelance: enFreelance,
      hiring: enHiring,
    },
    pt: {
      home: ptHome,
      freelance: ptFreelance,
      hiring: ptHiring,
    },
  },
  lng: "pt",
  fallbackLng: "pt",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
