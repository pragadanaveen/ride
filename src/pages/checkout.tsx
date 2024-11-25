import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LanguageCheck from '../Language Settings/LanguageCheck';
import {
  alignItemsCenter,
  pb5,
  pl5,
  pr5,
  pv10,
  spaceBetween,
} from '../common/commonStyles';
import {
  H15fontMediumBlack,
  H8fontMediumBlack,
  H8fontMediumLightBlack,
  H9fontMediumLightBlack,
  H9fontRegularGray,
} from '../components/commonText';
import { RowView } from '../components/commonViews';
import { Doctor2, Specialities5, StarIcon1 } from '../components/svgIcons';
import { colors } from '../utils/colors';

interface Props {
  onpress: CallableFunction;
}

const Checkout: React.FC<Props> = ({ onpress }): JSX.Element => {
  const { t, i18n } = useTranslation();
const isRTL = LanguageCheck();    const startImage = () => {
    return (
      <StarIcon1 height={12} width={12} />
    );
  };
 const otherDetailsRow = (label: string, value: string) => {
    return (
      <RowView style={[pb5, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
        <H8fontMediumLightBlack>{label}</H8fontMediumLightBlack>
        <H9fontRegularGray>{value}</H9fontRegularGray>
      </RowView>
    );
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onpress} style={[styles.drSelection, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
        <View style={styles.drImageStyle}>
          <Doctor2 height={'100%'} width={'150%'} />
        </View>
        <View style={[styles.drDetailsStyle, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
          <View style={[isRTL ? pr5 : pl5, spaceBetween]}>
            <H15fontMediumBlack style = {{textAlign:isRTL?'right':'left'}}>{t('labels.FavDoctorName')}</H15fontMediumBlack>
            <View style={[{ flexDirection: isRTL ? 'row-reverse' : 'row' }, alignItemsCenter]}>
              {startImage()}
              {startImage()}
              {startImage()}
              {startImage()}
              {startImage()}
              <H9fontMediumLightBlack>{'(47)'}</H9fontMediumLightBlack>
            </View>
            <View style={[{ flexDirection: isRTL ? 'row-reverse' : 'row' }, alignItemsCenter]}>
              {isRTL ?
                <H8fontMediumLightBlack>{')'}</H8fontMediumLightBlack>
                :
                <H8fontMediumLightBlack>{'('}</H8fontMediumLightBlack>}
              <Icon name="map-marker" size={14} color={'black'} />
              <H8fontMediumLightBlack>{" "}{t('labels.floridaUSA')}{')'}</H8fontMediumLightBlack>
            </View>
          </View>
          <View style={styles.typeofDrImageContainer}>
            <Specialities5 height={12} width={12} />
          </View>
        </View>
      </TouchableOpacity>
      <H8fontMediumBlack style={[pv10,{textAlign:isRTL?'right':'left'}]}>{t('labels.bookingSummary')}</H8fontMediumBlack>
      <View style={styles.cardContainerStyles}>
        {otherDetailsRow(t('labels.date'), t('labels.sixteenNov'))}
        {otherDetailsRow(t('labels.time'), t('labels.checkoutTime'))}
        {otherDetailsRow(t('labels.consultingFee'), t('labels.Fees'))}
        {otherDetailsRow(t('labels.slotTimingFees'), t('labels.timingFee'))}
      </View>
      <View style={styles.cardContainerStyles}>
        {otherDetailsRow(t('labels.date'), t('labels.sixteenNov'))}
        {otherDetailsRow(t('labels.time'), t('labels.checkoutTime'))}
        {otherDetailsRow(t('labels.consultingFee'), t('labels.Fees'))}
        {otherDetailsRow(t('labels.slotTimingFees'), t('labels.timingFee'))}
      </View>
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  drSelection: {
    height: 104,
    padding: 14,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,

  },
  drImageStyle: {
    height: 80,
    width: 80,
    borderRadius: 40,
    borderWidth: 5,
    borderColor: '#f7f7f7',
    overflow: 'hidden'
  },
  drDetailsStyle: {
    flex: 1,
    justifyContent: 'space-between',
  },
  starImageStyle: { height: 12, width: 12 },
  typeofDrImageContainer: {
    height: 24,
    width: 24,
    borderRadius: 14,
    elevation: 3,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  typeofDrImageStyle: {
    height: 12,
    width: 12,
  },
  cardContainerStyles: {
    backgroundColor: colors.white,
    borderRadius: 10,
    elevation: 3,
    padding: 12,
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});
