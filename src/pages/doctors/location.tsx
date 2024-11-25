import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import {
  CardSurface,
  CommonLineDotted,
  CommonLineDottedInner,
  RowView,
} from '../../components/commonViews';
import {
  H10fontRegularBlack,
  H14fontRegularBlackk,
  H15fontMediumBlack,
  H9fontMediumBlack,
  H9fontMediumBlue,
  H9fontRegularBlack,
} from '../../components/commonText';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import { colors } from '../../utils/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import { menuOptions } from '../../utils/constant';
import { pl10, pl5, pr10, pr5, pt10 } from '../../common/commonStyles';
import { useTranslation } from 'react-i18next';
import { labels } from '../../utils/labels';
import LanguageCheck from '../../Language Settings/LanguageCheck';


interface Props { }

const Start = () => {
  return (
    <Icon2
      name="star"
      size={11}
      color={colors.yellow}
      style={{ paddingTop: 2 }}
    />
  );
};

const LocationView: React.FC<Props> = ({ }): JSX.Element => {
  const { t } = useTranslation();
const isRTL = LanguageCheck();   
 return (
    <View style={styles.container}>
      <CardSurface style={styles.surfaceContainer}>
        <H15fontMediumBlack style={[pl10,{textAlign:isRTL?'right':'left'}]}>
          {t('labels.smileCuteDental')}
        </H15fontMediumBlack>
        <View style={[{ alignItems: isRTL ? 'flex-end' : 'flex-start' }, isRTL ? pr10 : pl10]}>
          <View style={{ flexDirection: 'row' }}>
            <H14fontRegularBlackk>{isRTL ? 'SDB,' : 'MDS - '}</H14fontRegularBlackk>
            <H14fontRegularBlackk>{t("labels.FavDoctorSpecialization")}</H14fontRegularBlackk>
            <H14fontRegularBlackk >{isRTL ? ' -SDM' : ', BDS'}</H14fontRegularBlackk>
          </View>
        </View>
        <View style={[styles.rattingContainer, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
          <Start />
          <Start />
          <Start />
          <Start />
          <Start />
          <H10fontRegularBlack style={pl5}>{labels.numOfStars}</H10fontRegularBlack>
        </View>
        <RowView style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
          <View style={{ alignSelf: isRTL ? 'flex-start' : 'flex-end', paddingRight: 10 }}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              {menuOptions.map(({ Img},index) => {
                return (
                  <View style={styles.imageContainer} key={index}>
                    <Img height={40} width={40} />
                  </View>
                );
              })}
            </ScrollView>
          </View>
          <CardSurface style={styles.priceSurface}>
            <H14fontRegularBlackk>{t('labels.locationImg')}</H14fontRegularBlackk>
          </CardSurface>
        </RowView>
        <View style={[styles.addressContainer, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
          <Icon name="map-marker" size={15} color={'black'} />
          <H9fontMediumBlack style={isRTL ? pr5 : pl5}>
            {'2286'}{t('labels.sundownLane')}
          </H9fontMediumBlack>
        </View>
        <H9fontMediumBlue style={[isRTL ? pr10 : pl10,{textAlign:isRTL?'right':'left'}]}>{t('labels.getDirections')}</H9fontMediumBlue>
        <CommonLineDotted>
            <CommonLineDottedInner />
          </CommonLineDotted>
        <H14fontRegularBlackk style={[pt10,{textAlign:isRTL?'right':'left'}]}>
          {t('labels.MonToSat')}
        </H14fontRegularBlackk>
        <View style={[styles.timingButtonStyleContainer, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
          <View style={styles.timingButtonStyle}>
            <H9fontRegularBlack>{t('labels.tenToTwo')}</H9fontRegularBlack>
          </View>
          <View style={isRTL ? pr10 : pl10}>
            <View style={styles.timingButtonStyle}>
              <H9fontRegularBlack>{t('labels.fourToNine')}</H9fontRegularBlack>
            </View>
          </View>
        </View>
      </CardSurface>
    </View>
  );
};
export default LocationView;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
  },
  surfaceContainer: {
    height: 320,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  rattingContainer: { flexDirection: 'row', paddingTop: 5, paddingLeft: 10 },
  imageContainer: { marginTop: 10, marginLeft: 7, height: 40, width: 40, borderRadius: 5, overflow: 'hidden' },
  imageStyle: { height: 40, width: 40, borderRadius: 5 },
  priceSurface: {
    borderRadius: 30,
    height: 55,
    width: 55,
    backgroundColor: colors.white,
    paddingTop: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  addressContainer: { flexDirection: 'row', paddingTop: 5, paddingLeft: 8 },
  timingButtonStyle: {
    height: 30,
    width: 135,
    borderWidth: 1,
    borderRadius: 40,
    borderStyle: 'dashed',
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  timingButtonStyleContainer: {

    paddingTop: 10,
    paddingHorizontal: 10,
  },
});