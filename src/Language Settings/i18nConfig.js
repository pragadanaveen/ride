// i18nConfig.js
import i18n from 'i18next';
import 'intl-pluralrules'
import { initReactI18next } from 'react-i18next';
import en from '../Language Settings/locales/en.json';
import ja from '../Language Settings/locales/ja.json';
import fr from '../Language Settings/locales/fr.json';
import ar from '../Language Settings/locales/ar.json';
import he from '../Language Settings/locales/he.json';

export const resources = {
  en: {translation: en, name: "English"},
  ja: {translation: ja, name: "日本語"},
  fr: {translation: fr, name: "Français"},
  ar: {translation: ar, name: "عربي"},
  he: {translation: he, name: "עִברִית"}
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
