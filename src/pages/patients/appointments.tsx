import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LanguageCheck from '../../Language Settings/LanguageCheck';
import { pR10, pl10, pl5, pr5, pt10, pt5 } from '../../common/commonStyles';
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
import { AwesomeEye, CheckMarkIcon, Doctor1, Doctor2, Doctor3, MetroPrintor } from '../../components/svgIcons';
import { fontFamily } from '../../utils/fontFamily';

interface Props { }

const AppointmentList: React.FC<Props> = ({ }): JSX.Element => {
  const { t, i18n } = useTranslation();
  const isRTL = LanguageCheck(); return (
    <View style={styles.container}>
      <CardSurface style={styles.cardStyle}>
        <RowView style={[pt5, { flexDirection: isRTL ? 'row-reverse' : 'row' }]} >
          <View style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
            <H14fontRegularBlackk>{t('labels.bookingDate')}</H14fontRegularBlackk>
            <H14fontRegularBlackk>{t('labels.sixteenMar2020')}</H14fontRegularBlackk>
          </View>
          <H9fontRegularGray>{t('labels.dental')}</H9fontRegularGray>
        </RowView>
        <CommonLineDotted>
          <CommonLineDottedInner />
        </CommonLineDotted>
        <RowView style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
          <View style={[styles.detailsStyles, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
            <View style={styles.profileImageStyle}>
              <Doctor1 height={60} width={100} />
            </View>
            <View style={isRTL ? pR10 : pl10}>
              <H8fontMediumBlack style = {{textAlign:isRTL?'right':'left'}}>{t('labels.FavDoctorName')}</H8fontMediumBlack>
              <View style={[{ flexDirection: isRTL ? 'row-reverse' : 'row' },pt5]}>
                <H9fontRegularGray>
                  {t('labels.ApptDate')}
                </H9fontRegularGray>
                <H9fontRegularGray>
                  {t('labels.twentytwoMar')}
                </H9fontRegularGray>
              </View>
              <RowView style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                <H8fontMediumBlack style={[pt10]}>{'$150'}</H8fontMediumBlack>
              </RowView>
            </View>
          </View>
        </RowView>
        <View style={[styles.cardButtonRow, { flexDirection: isRTL ? 'row-reverse' : 'row' },pt5]}>
          <TouchableOpacity style={styles.confirmButtonStyle}>
            <View style={[styles.buttonRow, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
              <CheckMarkIcon height={12} width={12} />
              <Text style={[styles.buttonTextStyle, isRTL ? pr5 : pl5]}>{t('labels.confirm')}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.viewButtonStyle}>
            <View style={[styles.buttonRow, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
              <AwesomeEye height={10} width={15} />
              <Text style={[styles.buttonTextStyle, isRTL ? pr5 : pl5]}>{t('labels.view')}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.printButtonStyle}>
            <View style={[styles.buttonRow, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
              <MetroPrintor height={13} width={13} />
              <Text style={[styles.printButtonTextStyle, isRTL ? pr5 : pl5]}>{t('labels.view')}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </CardSurface>
      <CardSurface style={styles.cardStyle}>
        <RowView style={[pt5, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
          <View style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
            <H14fontRegularBlackk>{t('labels.bookingDate')}</H14fontRegularBlackk>
            <H14fontRegularBlackk>{t('labels.sixteenMar2020')}</H14fontRegularBlackk>
          </View>
          <H9fontRegularGray>{t('labels.dental')}</H9fontRegularGray>
        </RowView>
        <CommonLineDotted>
          <CommonLineDottedInner />
        </CommonLineDotted>
        <RowView style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
          <View style={[styles.detailsStyles, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
            <View style={{ height: 60, width: 60, borderRadius: 50, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', paddingLeft: 28 }}>
              <Doctor2 height={60} width={100} />
            </View>
            <View style={isRTL ? pR10 : pl10}>
              <H8fontMediumBlack style = {{textAlign:isRTL?'right':'left'}}>{t('labels.DoctorName1')}</H8fontMediumBlack>
              <View style={[ {flexDirection: isRTL ? 'row-reverse' : 'row' },pt5]}>
                <H9fontRegularGray>
                  {t('labels.ApptDate')}
                </H9fontRegularGray>
                <H9fontRegularGray>
                  {t('labels.twentytwoMar')}
                </H9fontRegularGray>
              </View>
              <RowView style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                <H8fontMediumBlack style={[pt10]}>{'$150'}</H8fontMediumBlack>
              </RowView>
            </View>
          </View>
        </RowView>
        <View style={[styles.cardButtonRow, pt5,{ flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
          <TouchableOpacity style={styles.confirmButtonStyle}>
            <View style={[styles.buttonRow, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
              <CheckMarkIcon height={12} width={12} />
              <Text style={[styles.buttonTextStyle, isRTL ? pr5 : pl5]}>{t('labels.confirm')}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.viewButtonStyle}>
            <View style={[styles.buttonRow, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
              <AwesomeEye height={10} width={15} />
              <Text style={[styles.buttonTextStyle, isRTL ? pr5 : pl5]}>{t("labels.view")}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.printButtonStyle}>
            <View style={[styles.buttonRow, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
              <MetroPrintor height={13} width={13} />
              <Text style={[styles.printButtonTextStyle, isRTL ? pr5 : pl5]}>{t('labels.view')}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </CardSurface>
      <CardSurface style={styles.cardStyle}>
        <RowView style={[pt5, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
          <View style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
            <H14fontRegularBlackk>{t('labels.bookingDate')}</H14fontRegularBlackk>
            <H14fontRegularBlackk>{t('labels.sixteenMar2020')}</H14fontRegularBlackk>
          </View>
          <H9fontRegularGray>{t('labels.dental')}</H9fontRegularGray>
        </RowView>
        <CommonLineDotted>
          <CommonLineDottedInner />
        </CommonLineDotted>
        <RowView style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
          <View style={[styles.detailsStyles, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
            <View style={styles.profileImageStyle}>
              <Doctor3 height={60} width={100} />
            </View>
            <View style={isRTL ? pR10 : pl10}>
              <H8fontMediumBlack style = {{textAlign:isRTL?'right':'left'}}>{t('labels.doctorName2')}</H8fontMediumBlack>
              <View style={[{ flexDirection: isRTL ? 'row-reverse' : 'row'},pt5]}>
                <H9fontRegularGray>
                  {t('labels.ApptDate')}
                </H9fontRegularGray>
                <H9fontRegularGray>
                  {t('labels.twentytwoMar')}
                </H9fontRegularGray>
              </View>
              <RowView style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                <H8fontMediumBlack style={[pt10]}>{'$150'}</H8fontMediumBlack>
              </RowView>
            </View>
          </View>
        </RowView>
        <View style={[styles.cardButtonRow,pt5, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
          <TouchableOpacity style={styles.confirmButtonStyle}>
            <View style={[styles.buttonRow, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
              <CheckMarkIcon height={12} width={12} />
              <Text style={[styles.buttonTextStyle, isRTL ? pr5 : pl5]}>{t('labels.confirm')}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.viewButtonStyle}>
            <View style={[styles.buttonRow, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
              <AwesomeEye height={10} width={15} />
              <Text style={[styles.buttonTextStyle, isRTL ? pr5 : pl5]}>{t('labels.view')}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.printButtonStyle}>
            <View style={[styles.buttonRow, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
              <MetroPrintor height={13} width={13} />
              <Text style={[styles.printButtonTextStyle, isRTL ? pr5 : pl5]}>{t('labels.view')}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </CardSurface>
    </View>
  );
};
export default AppointmentList;

const styles = StyleSheet.create({
  cardStyle: {
    height: 180,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 10
  },
  detailsStyles: { padding: 5, paddingTop: 10 },
  profileImageStyle: { height: 60, width: 60, borderRadius: 50, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', paddingRight: 25 },
  cardButtonRow: {
    justifyContent: 'center',
  },
  confirmButtonStyle: {
    height: 28,
    width: 80,
    backgroundColor: 'rgba(29, 185, 71, 0.65)',
    borderRadius: 30,
    justifyContent: 'center',
  },
  confirmImageStyle: {
    height: 10,
    width: 10,
    marginRight: 3
  },
  buttonTextStyle: {
    color: 'white',
    fontSize: 11,
    fontFamily: fontFamily.fontRegular,
  },
  buttonRow: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  viewButtonStyle: {
    height: 28,
    width: 78,
    backgroundColor: 'rgba(29, 185, 170, 0.65)',
    borderRadius: 30,
    justifyContent: 'center',
    marginHorizontal: 5
  },
  viewImageStyle: {
    height: 10,
    width: 15
  },
  printButtonStyle: {
    height: 28,
    width: 78,
    backgroundColor: '#D4D4D4',
    borderRadius: 30,
    justifyContent: 'center'
  },
  printImageStyle: {
    height: 13,
    width: 13
  },
  printButtonTextStyle: {
    color: '#8B8A8A',
    fontSize: 11,
    fontFamily: fontFamily.fontRegular,
  },
  container: {
    paddingHorizontal: 10
  },
});

