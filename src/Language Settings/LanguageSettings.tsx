
import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { NavBarPatient } from '../common/commonComponents';
import { useNavigation } from '@react-navigation/native';
import { resources } from './i18nConfig';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(); // Initialize with the current language
  const navigation = useNavigation();

  useEffect(() => {
    const fetchSelectedLanguage = async () => {
      try {
        const language = await AsyncStorage.getItem('selectedLanguage');
        if (language) {
          setSelectedLanguage(language);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchSelectedLanguage();
  }, []);

  const handleLanguageChange = async (language) => {
    await i18n.changeLanguage(language);
    setSelectedLanguage(language);
    await AsyncStorage.setItem('selectedLanguage', language);
    navigation.goBack();
  };

  const availableLanguages = Object.keys(resources);

  return (
    <View>
      <NavBarPatient title={t("labels.languageSettings")} />
      <View style={{ padding: 15 }}>
        {availableLanguages.map((language) => (
          <TouchableOpacity
            key={language}
            style={[
              styles.languageButton,
              selectedLanguage === language && { backgroundColor: '#1B5A90' },
            ]}
            onPress={() => handleLanguageChange(language)}
          >
            <Text style={{ color: selectedLanguage === language ? 'white' : '#1B5A90' }}>
              {resources[language].name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  languageButton: {
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#1B5A90',
    borderRadius: 5,
    alignItems: 'center',
  },
});

export default LanguageSwitcher;

