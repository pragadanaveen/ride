import { Route } from '@react-navigation/native';
import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import LanguageCheck from '../Language Settings/LanguageCheck';
import {
  H14fontRegularWhite,
  H16fontRegularGray,
  H16fontRegularYellow,
  H23fontRegularGray,
} from '../components/commonText';
import { CheckIcon, LeftArrowIcon } from '../components/svgIcons';
import { GeneralProps } from '../interfaces/generalProps';
import { colors } from '../utils/colors';
import { screenName } from '../utils/screenName';


interface Props extends GeneralProps {
  route: Route<string, object | undefined>;
}

const BookingSuccess: React.FC<Props> = ({navigation, route}): JSX.Element => {
  const {t} = useTranslation();
  const isRTL = LanguageCheck(); 

  return (
    <Fragment>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={[{alignItems:isRTL?'flex-end':'flex-start',padding:20}]}>
          {isRTL?
          <View>
           <LeftArrowIcon height={24} width={24} style={{ transform: [{ rotate: '180deg' }] }}/>
           </View> :
           <LeftArrowIcon height={24} width={24}/>}
        </TouchableOpacity>
          <View style={styles.successImageContainer}>
            <CheckIcon height={95} width={95}/>
          </View>
          <View style={styles.bodyContainer}>
            <View style={styles.borderStyle}>
              <H23fontRegularGray>{t('labels.booked')}</H23fontRegularGray>
              <H23fontRegularGray>{t('labels.success')}</H23fontRegularGray>
              <H16fontRegularGray>{t('labels.bookedWith')}</H16fontRegularGray>
              <View style={{flexDirection:isRTL?'row-reverse':'row'}}>
                <H16fontRegularYellow>{t('labels.DoctorName1')}</H16fontRegularYellow>
                <H16fontRegularGray>{t('labels.on')}</H16fontRegularGray>
                <H16fontRegularYellow>{'12 Nov 2019 '}</H16fontRegularYellow>
              </View>
              <H16fontRegularYellow style={{}}>
                {t('labels.bookingSuccessTime')}
              </H16fontRegularYellow>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate(screenName.InvoiceView)}
            style={styles.buttonStyle}>
            <H14fontRegularWhite>{t('labels.ViewInvoice')}</H14fontRegularWhite>
          </TouchableOpacity>
      </View>
    </Fragment>
  );
};
export default BookingSuccess;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    flex: 1,
    paddingTop: Platform.OS == 'ios'? 40 : 0
  },
  successImageContainer: {
    alignSelf: 'center',
    paddingTop: 80,
  },

  bodyContainer: {
    paddingHorizontal: 40,
    paddingTop: 30,
  },
  borderStyle: {
    height: 220,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderStyle: 'dashed',
    borderColor: 'white',
    padding: 10,
    justifyContent: 'space-evenly',
  },
  buttonStyle: {
    height: 45,
    backgroundColor: '#0DD8F9',
    marginTop: 40,
    marginHorizontal: 30,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
