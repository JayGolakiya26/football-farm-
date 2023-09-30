import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import english from './en';

i18n.use(initReactI18next).init({
  resources: {
    en: english,
  },
  lng: 'en', // if you're using a language detector, do not define the lng option
  fallbackLng: 'en',
  debug: __DEV__,
  interpolation: {
    escapeValue: false,
  },
  compatibilityJSON: 'v3',
  defaultNS: 'general',
});

export default i18n;
