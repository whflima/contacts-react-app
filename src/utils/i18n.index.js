import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import eng from '../locales/en/en.json';
import esp from '../locales/es/es.json';
import pt from '../locales/pt-br/pt-br.json';

const resources = {
  en: { translation: eng },
  es: { translation: esp },
  pt: { translation: pt },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
