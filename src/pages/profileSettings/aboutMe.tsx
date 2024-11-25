import React from 'react';
import { TextInput, View, TouchableOpacity, StyleSheet } from 'react-native';
import { CardSurface } from '../../components/commonViews';
import {
  H30fontRegularLightBlack2,
  H14fontRegularWhite,
  H8fontMediumBlack,
} from '../../components/commonText';
import { colors } from '../../utils/colors';
import { pl15, pr15 } from '../../common/commonStyles';
import { useTranslation } from 'react-i18next';
import LanguageCheck from '../../Language Settings/LanguageCheck';

interface Props { }
const AboutMe: React.FC<Props> = ({ }): JSX.Element => {
  const { t } = useTranslation();
  const isRTL = LanguageCheck();  

  return (
    <CardSurface style={styles.container}>
      <View style={styles.bodyStyle}>
        <H8fontMediumBlack style = {{textAlign:isRTL?'right':'left'}}>{t('labels.aboutMe')}</H8fontMediumBlack>
        <H30fontRegularLightBlack2 style={[styles.msgStyle,{textAlign:isRTL?'right':'left'}]}>
          {t('labels.biography')}
        </H30fontRegularLightBlack2>
        <View style={styles.textBoxContainerStyle}>
          <TextInput placeholder={t('labels.biographyPlaceholder')} style={{ fontSize: 11, textAlign: isRTL ? 'right' : 'left',padding:15 }} />
        </View>
      </View>
      <TouchableOpacity style={styles.nextButtonStyle}>
        <H14fontRegularWhite>{t('labels.next')}</H14fontRegularWhite>
      </TouchableOpacity>
    </CardSurface>
  );
};
export default AboutMe;
const styles = StyleSheet.create({
  nextButtonStyle: {
    height: 45,
    backgroundColor: '#1B5A90',
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10
  },
  textBoxContainerStyle: {
    height: 350,
    borderColor: colors.borderTextColor,
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  msgStyle: {
    marginTop: 30,
  },
  bodyStyle: {
    paddingHorizontal: 10,
    paddingTop: 10
  },
  container: {
    marginHorizontal: 10,
    backgroundColor:colors.white
  },
});
