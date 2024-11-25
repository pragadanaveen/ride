import React, { useState, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './src/Language Settings/i18nConfig';
import App from './App';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RootApp = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    const fetchLanguage = async () => {
      try {
        const savedLanguage = await AsyncStorage.getItem('selectedLanguage');
        if (savedLanguage) {
          i18n.changeLanguage(savedLanguage);
          setCurrentLanguage(savedLanguage);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchLanguage();
  }, []);

  const handleLanguageChange = async (language) => {
    try {
      await AsyncStorage.setItem('selectedLanguage', language);
      i18n.changeLanguage(language);
      setCurrentLanguage(language);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <I18nextProvider i18n={i18n}>
      <App currentLanguage={currentLanguage} onLanguageChange={handleLanguageChange} />
    </I18nextProvider>
  );
};

export default RootApp;

