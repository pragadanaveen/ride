import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {
  pR10,
  pl10,
  pl5,
  pr5,
  pt10,
  pt5
} from '../../common/commonStyles';
import {
  H14fontRegularBlackk,
  H8fontMediumBlack,
  H9fontRegularGray,
} from '../../components/commonText';
import {
  CardSurface,
  CommonLineDotted,
  CommonLineDottedInner,
  RowView,
} from '../../components/commonViews';
import { fontFamily } from '../../utils/fontFamily';

import { useTranslation } from 'react-i18next';
import LanguageCheck from '../../Language Settings/LanguageCheck';
import { AwesomeEye, Doctor1, Doctor2, Doctor3, Doctor4, MetroPrintor } from '../../components/svgIcons';

interface Props { }

const PrescriptionList: React.FC<Props> = ({ }): JSX.Element => {
  const { t, i18n } = useTranslation();
  const isRTL = LanguageCheck(); return (
    <View style={styles.container}>
      <CardSurface style={styles.cardSurface}>
        <RowView style={[pt5, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
          <View style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
            <H14fontRegularBlackk>{t('labels.prescriptions')}</H14fontRegularBlackk>
            <H14fontRegularBlackk>{' 1 '}</H14fontRegularBlackk>
          </View>
          <H9fontRegularGray>{t('labels.Nov14')}</H9fontRegularGray>
        </RowView>
        <CommonLineDotted>
          <CommonLineDottedInner />
        </CommonLineDotted>
        <RowView style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
          <View style={[styles.prescriptionDetials, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
            <View style={styles.profileImageStyle}>
              <Doctor1 height={60} width={100} />
            </View>
            <View style={isRTL ? pR10 : pl10}>
              <H8fontMediumBlack style={{textAlign:isRTL?'right':'left'}}>{t('labels.FavDoctorName')}</H8fontMediumBlack>
              <H9fontRegularGray style={[pt5,{textAlign:isRTL?'right':'left'}]}>{t('labels.dental')}</H9fontRegularGray>
              <View style={[styles.buttonDetails,pt10,{ flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                <TouchableOpacity style={[styles.viewButtonStyle, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                  <AwesomeEye height={10} width={15} />
                  <Text style={[styles.viewBtnStyle, isRTL ? pr5 : pl5]}>{t('labels.view')}</Text>
                </TouchableOpacity>
                <View style={isRTL ? pr5 : pl5}>
                  <TouchableOpacity style={[styles.printButtonStyle, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                    <MetroPrintor height={13} width={13} />
                    <Text style={[styles.printBtnText, isRTL ? pr5 : pl5]}>{t('labels.print')}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </RowView>
      </CardSurface>
      <CardSurface style={styles.cardSurface}>
        <RowView style={[pt5, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
          <View style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
            <H14fontRegularBlackk>{t('labels.prescriptions')}</H14fontRegularBlackk>
            <H14fontRegularBlackk>{' 2 '}</H14fontRegularBlackk>
          </View>
          <H9fontRegularGray>{t('labels.Nov14')}</H9fontRegularGray>
        </RowView>
        <CommonLineDotted>
          <CommonLineDottedInner />
        </CommonLineDotted>
        <RowView style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
          <View style={[styles.prescriptionDetials, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
            <View style={{ height: 60, width: 60, borderRadius: 50, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', paddingLeft: 28 }}>
              <Doctor2 height={60} width={100} />
            </View>
            <View style={isRTL ? pR10 : pl10}>
              <H8fontMediumBlack style={{textAlign:isRTL?'right':'left'}}>{t('labels.FavDoctorName')}</H8fontMediumBlack>
              <H9fontRegularGray style={[pt5,{textAlign:isRTL?'right':'left'}]} >{t('labels.dental')}</H9fontRegularGray>
              <View style={[styles.buttonDetails,pt10, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                <TouchableOpacity style={[styles.viewButtonStyle,{ flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                  <AwesomeEye height={10} width={15} />
                  <Text style={[styles.viewBtnStyle, isRTL ? pr5 : pl5]}>{t('labels.view')}</Text>
                </TouchableOpacity>
                <View style={isRTL ? pr5 : pl5}>
                  <TouchableOpacity style={[styles.printButtonStyle, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                    <MetroPrintor height={13} width={13} />
                    <Text style={[styles.printBtnText, isRTL ? pr5 : pl5]}>{t('labels.print')}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </RowView>
      </CardSurface>
      <CardSurface style={styles.cardSurface}>
        <RowView style={[pt5, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
          <View style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
            <H14fontRegularBlackk>{t('labels.prescriptions')}</H14fontRegularBlackk>
            <H14fontRegularBlackk>{' 3 '}</H14fontRegularBlackk>
          </View>
          <H9fontRegularGray>{t('labels.Nov14')}</H9fontRegularGray>
        </RowView>
        <CommonLineDotted>
          <CommonLineDottedInner />
        </CommonLineDotted>
        <RowView style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
          <View style={[styles.prescriptionDetials, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
            <View style={styles.profileImageStyle}>
              <Doctor3 height={60} width={100} />
            </View>
            <View style={isRTL ? pR10 : pl10}>
              <H8fontMediumBlack style={{textAlign:isRTL?'right':'left'}}>{t('labels.doctorName2')}</H8fontMediumBlack>
              <H9fontRegularGray style={[pt5,{textAlign:isRTL?'right':'left'}]}>{t('labels.dental')}</H9fontRegularGray>
              <View style={[styles.buttonDetails, { flexDirection: isRTL ? 'row-reverse' : 'row'},pt10]}>
                <TouchableOpacity style={[styles.viewButtonStyle,{ flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                  <AwesomeEye height={10} width={15} />
                  <Text style={[styles.viewBtnStyle, isRTL ? pr5 : pl5]}>{t('labels.view')}</Text>
                </TouchableOpacity>
                <View style={isRTL ? pr5 : pl5}>
                  <TouchableOpacity style={[styles.printButtonStyle, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                    <MetroPrintor height={13} width={13} />
                    <Text style={[styles.printBtnText, isRTL ? pr5 : pl5]}>{t('labels.print')}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </RowView>
      </CardSurface>
      <CardSurface style={styles.cardSurface}>
        <RowView style={[pt5, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
          <View style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
            <H14fontRegularBlackk>{t('labels.prescriptions')}</H14fontRegularBlackk>
            <H14fontRegularBlackk>{' 4 '}</H14fontRegularBlackk>
          </View>
          <H9fontRegularGray>{t('labels.Nov14')}</H9fontRegularGray>
        </RowView>
        <CommonLineDotted>
          <CommonLineDottedInner />
        </CommonLineDotted>
        <RowView style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
          <View style={[styles.prescriptionDetials, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
            <View style={styles.profileImageStyle}>
              <Doctor4 height={60} width={100} />
            </View>
            <View style={isRTL ? pR10 : pl10}>
              <H8fontMediumBlack style={{textAlign:isRTL?'right':'left'}}>{t('labels.FavDoctorName')}</H8fontMediumBlack>
              <H9fontRegularGray style={[pt5,{textAlign:isRTL?'right':'left'}]}>{t('labels.dental')}</H9fontRegularGray>
              <View style={[styles.buttonDetails, pt10,{ flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                <TouchableOpacity style={[styles.viewButtonStyle, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                  <AwesomeEye height={10} width={15} />
                  <Text style={[styles.viewBtnStyle, isRTL ? pr5 : pl5]}>{t('labels.view')}</Text>
                </TouchableOpacity>
                <View style={isRTL ? pr5 : pl5}>
                  <TouchableOpacity style={[styles.printButtonStyle, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                    <MetroPrintor height={13} width={13} />
                    <Text style={[styles.printBtnText, isRTL ? pr5 : pl5]}>{t('labels.print')}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </RowView>
      </CardSurface>
    </View>
  );
};
export default PrescriptionList;
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10
  },
  cardSurface: {
    height: 150,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 10
  },
  profileImageStyle: {
    height: 60,
    width: 60,
    borderRadius: 50,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 25
  },
  prescriptionDetials: {
    padding: 5,
    paddingTop: 10
  },
  imageStyle: {
    height: 80,
    width: 80,
    borderRadius: 50
  },
  buttonDetails: {
    paddingTop: 5
  },
  viewButtonStyle: {
    height: 28,
    width: 78,
    backgroundColor: 'rgba(29, 185, 170, 0.65)',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewBtnStyle: {
    color: 'white',
    fontSize: 11,
    fontFamily: fontFamily.fontRegular,
  },
  printButtonStyle: {
    height: 28,
    width: 78,
    backgroundColor: '#D4D4D4',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  printBtnText: {
    color: '#8B8A8A',
    fontSize: 11,
    fontFamily: fontFamily.fontRegular,
  },
});
