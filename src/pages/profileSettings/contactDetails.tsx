import React from 'react';
import {TextInput, View, TouchableOpacity, StyleSheet} from 'react-native';
import {CardSurface, CommonInput} from '../../components/commonViews';
import {
  H14fontRegularWhite,
  H30fontRegularLightBlack2,
  H8fontMediumBlack,
} from '../../components/commonText';
import {mt15, pl10, pr10} from '../../common/commonStyles';
import { useTranslation } from 'react-i18next';
import LanguageCheck from '../../Language Settings/LanguageCheck';
import { colors } from '../../utils/colors';


interface Props {}
const ContactDetails: React.FC<Props> = ({}): JSX.Element => {
  const { t } = useTranslation();
  const isRTL = LanguageCheck();    

  const textBoxView = (label: string) => {
    return (
      <>
        <H30fontRegularLightBlack2 style={[mt15,{textAlign:isRTL?'right':'left'}]}>
          {label}
        </H30fontRegularLightBlack2>
        <CommonInput style={{height: 35}}>
          <TextInput style={[isRTL?pr10:pl10,{textAlign:isRTL? 'right':'left',alignItems:'center',flex:1}]} />
        </CommonInput>
      </>
    );
  };

  return (
    <CardSurface style={styles.container}>
      <View style={styles.bodyStyle}>
        <H8fontMediumBlack style = {{textAlign:isRTL?'right':'left'}}>{t('labels.contactDetails')}</H8fontMediumBlack>
        {textBoxView(t('labels.addressLine1'))}
        {textBoxView(t('labels.addressLine2'))}
        {textBoxView(t('labels.city'))}
        {textBoxView(t('labels.stateProvince'))}
        {textBoxView(t('labels.country'))}
        {textBoxView(t('labels.postalCode'))}
      </View>
      <TouchableOpacity style={styles.nextButtonStyle}>
        <H14fontRegularWhite>{t('labels.next')}</H14fontRegularWhite>
      </TouchableOpacity>
    </CardSurface>
  );
};
export default ContactDetails;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15, 
    marginHorizontal: 10,
    backgroundColor:colors.white
  },
  bodyStyle: {
    paddingHorizontal: 5, 
    paddingTop: 10
  },
  nextButtonStyle: {
    height: 45,
    backgroundColor: '#1B5A90',
    marginVertical: 10,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    marginTop: 25
  },
});

