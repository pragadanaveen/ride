import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { MenuProvider } from 'react-native-popup-menu';
import RootNavigation from './navigations';
import i18n from './src/Language Settings/i18nConfig';
import { screenName } from './src/utils/screenName';
import { NavBar } from './src/common/commonComponents';

interface AppProps {
  onLanguageChange: (language: string) => void;
}

const App: React.FC<AppProps> = ({ onLanguageChange }) => {
  const [initialLanguage, setInitialLanguage] = useState('');

  useEffect(() => {
    const fetchLanguage = async () => {
      try {
        const savedLanguage = await AsyncStorage.getItem('selectedLanguage');
        if (savedLanguage) {
          i18n.changeLanguage(savedLanguage); 
          setInitialLanguage(savedLanguage);
          onLanguageChange(savedLanguage);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchLanguage();
  }, [onLanguageChange]);

  return (
    <MenuProvider>
      <RootNavigation initialRouteName={screenName.SignInScreen} currentLanguage={initialLanguage} onLanguageChange={onLanguageChange} />
    </MenuProvider>
  );
};

export default App;
