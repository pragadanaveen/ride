import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LanguageCheck from '../../Language Settings/LanguageCheck';
import { ml15, mr15, ph10, pl5, pr5, pt15, pt5 } from '../../common/commonStyles';
import {
  H14fontRegularBlackk,
  H8fontMediumBlack,
  H9fontRegularBlack,
  H9fontRegularGray,
} from '../../components/commonText';
import {
  CardSurface,
  CommonLineDotted,
  CommonLineDottedInner,
  RowView,
} from '../../components/commonViews';
import { AwesomeEye, Doctor1, Doctor2, Doctor3, Doctor4, MetroPrintor } from '../../components/svgIcons';
import { DevWidth } from '../../utils/device';
import { fontFamily } from '../../utils/fontFamily';


interface Props { }

const Billing: React.FC<Props> = ({ }): JSX.Element => {
  const { t, i18n } = useTranslation();
  const isRTL = LanguageCheck(); return (
    <View style={styles.container}>
      <CardSurface style={styles.cardStyle}>
        <RowView style={[pt5, { flexDirection: isRTL ? 'row-reverse' : 'row' }]} >
          <H14fontRegularBlackk>{'#MR-0010'}</H14fontRegularBlackk>
          <View style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
            <H9fontRegularGray>{t('labels.paidOn')}</H9fontRegularGray>
            <H9fontRegularGray>{t('labels.Nov14')}</H9fontRegularGray>
          </View>
        </RowView>
        <CommonLineDotted>
          <CommonLineDottedInner />
        </CommonLineDotted>
        <RowView style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
          <View style={[styles.bodyStyle, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
            <View style={[styles.profileImageStyle, { marginRight: isRTL ? 0 : 15, marginLeft: isRTL ? 15 : 0 }]}>
              <Doctor1 height={60} width={100} />
            </View>
            <View style={{}}>
              <H8fontMediumBlack style = {{textAlign:isRTL?'right':'left'}}>{t('labels.FavDoctorName')}</H8fontMediumBlack>
              <RowView style={{ width: DevWidth / 1.55, flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                <H9fontRegularGray style={pt5}>{t('labels.dental')}</H9fontRegularGray>
                <H9fontRegularBlack style={pt5}>{'$450'}</H9fontRegularBlack>
              </RowView>
              <View style={[styles.buttonRowStyle,pt15, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                <TouchableOpacity style={[styles.viewBtnStyle, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                  <AwesomeEye height={10} width={15} />
                  <Text style={[styles.viewTextStyle, isRTL ? pr5 : pl5]}>{t('labels.view')}</Text>
                </TouchableOpacity>
                <View style={isRTL ? pr5 : pl5}>
                  <TouchableOpacity style={[styles.printButtonStyle, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                    <MetroPrintor height={13} width={13} />
                    <Text style={[styles.printTextStyle, isRTL ? pr5 : pl5]}>{t('labels.print')}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </RowView>
      </CardSurface>
      <CardSurface style={styles.cardStyle}>
        <RowView style={[pt5, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
          <H14fontRegularBlackk>{'#MR-0010'}</H14fontRegularBlackk>
          <View style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
            <H9fontRegularGray>{t('labels.paidOn')}</H9fontRegularGray>
            <H9fontRegularGray>{t('labels.November14')}</H9fontRegularGray>
          </View>
        </RowView>
        <CommonLineDotted>
          <CommonLineDottedInner />
        </CommonLineDotted>
        <RowView style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
          <View style={[styles.bodyStyle, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
            <View style={{ height: 60, width: 60, borderRadius: 50, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', paddingLeft: 28 }}>
              <Doctor2 height={60} width={100} />
            </View>
            <View style={ph10}>
              <H8fontMediumBlack style = {{textAlign:isRTL?'right':'left'}}>{t('labels.DoctorName1')}</H8fontMediumBlack>
              <RowView style={{ width: DevWidth / 1.55, flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                <H9fontRegularGray style={pt5}>{t('labels.dental')}</H9fontRegularGray>
                <H9fontRegularBlack style={pt5}>{'$450'}</H9fontRegularBlack>
              </RowView>
              <View style={[styles.buttonRowStyle,pt15 ,{ flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                <TouchableOpacity style={[styles.viewBtnStyle, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                  <AwesomeEye height={10} width={15} />
                  <Text style={[styles.viewTextStyle, isRTL ? pr5 : pl5]}>{t('labels.view')}</Text>
                </TouchableOpacity>
                <View style={isRTL ? pr5 : pl5}>
                  <TouchableOpacity style={[styles.printButtonStyle, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                    <MetroPrintor height={13} width={13} />
                    <Text style={[styles.printTextStyle, isRTL ? pr5 : pl5]}>{t('labels.print')}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </RowView>
      </CardSurface>

      <CardSurface style={styles.cardStyle}>
        <RowView style={[pt5, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
          <H14fontRegularBlackk>{'#MR-0010'}</H14fontRegularBlackk>
          <View style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
            <H9fontRegularGray>{t('labels.paidOn')}</H9fontRegularGray>
            <H9fontRegularGray>{t('labels.November14')}</H9fontRegularGray>
          </View>
        </RowView>
        <CommonLineDotted>
          <CommonLineDottedInner />
        </CommonLineDotted>
        <RowView style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
          <View style={[styles.bodyStyle, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
            <View style={[styles.profileImageStyle, isRTL ? ml15 : mr15]}>
              <Doctor3 height={60} width={100} />
            </View>
            <View style={{}}>
              <H8fontMediumBlack style={{textAlign:isRTL?'right':'left'}}>{t('labels.doctorName2')}</H8fontMediumBlack>
              <RowView style={{ width: DevWidth / 1.55, flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                <H9fontRegularGray style={pt5}>{t('labels.dental')}</H9fontRegularGray>
                <H9fontRegularBlack style={pt5}>{'$450'}</H9fontRegularBlack>
              </RowView>
              <View style={[styles.buttonRowStyle, pt15,{ flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                <TouchableOpacity style={[styles.viewBtnStyle, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                  <AwesomeEye height={10} width={15} />
                  <Text style={[styles.viewTextStyle, isRTL ? pr5 : pl5]}>{t('labels.view')}</Text>
                </TouchableOpacity>
                <View style={isRTL ? pr5 : pl5}>
                  <TouchableOpacity style={[styles.printButtonStyle, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                    <MetroPrintor height={13} width={13} />
                    <Text style={[styles.printTextStyle, isRTL ? pr5 : pl5]}>{t('labels.print')}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </RowView>
      </CardSurface>


      <CardSurface style={styles.cardStyle}>
        <RowView style={[pt5, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
          <H14fontRegularBlackk>{'#MR-0010'}</H14fontRegularBlackk>
          <View style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
            <H9fontRegularGray>{t('labels.paidOn')}</H9fontRegularGray>
            <H9fontRegularGray>{t('labels.November14')}</H9fontRegularGray>
          </View>
        </RowView>
        <CommonLineDotted>
          <CommonLineDottedInner />
        </CommonLineDotted>
        <RowView style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
          <View style={[styles.bodyStyle, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
            <View style={[styles.profileImageStyle, isRTL ? ml15 : mr15]}>
              <Doctor4 height={60} width={100} />
            </View>
            <View style={{}}>
              <H8fontMediumBlack style={{textAlign:isRTL?'right':'left'}}>{t('labels.FavDoctorName')}</H8fontMediumBlack>
              <RowView style={{ width: DevWidth / 1.55, flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                <H9fontRegularGray style={pt5}>{t('labels.dental')}</H9fontRegularGray>
                <H9fontRegularBlack style={pt5}>{'$450'}</H9fontRegularBlack>
              </RowView>
              <View style={[styles.buttonRowStyle,pt15, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                <TouchableOpacity style={[styles.viewBtnStyle, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                  <AwesomeEye height={10} width={15} />
                  <Text style={[styles.viewTextStyle, isRTL ? pr5 : pl5]}>{t('labels.view')}</Text>
                </TouchableOpacity>
                <View style={isRTL ? pr5 : pl5}>
                  <TouchableOpacity style={[styles.printButtonStyle, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                    <MetroPrintor height={13} width={13} />
                    <Text style={[styles.printTextStyle, isRTL ? pr5 : pl5]}>{t('labels.print')}</Text>
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
export default Billing;

const styles = StyleSheet.create({
  container: { paddingHorizontal: 10 },
  cardStyle: {
    height: 155,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 10
  },
  bodyStyle: {
    padding: 5,
    paddingTop: 10
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
  buttonRowStyle: {
    paddingTop: 10
  },
  viewBtnStyle: {
    height: 28,
    width: 78,
    backgroundColor: 'rgba(29, 185, 170, 0.65)',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewImage: {
    height: 10,
    width: 15
  },
  viewTextStyle: {

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
  printImageStyle: {
    height: 13,
    width: 13
  },
  printTextStyle: {

    color: '#8B8A8A',
    fontSize: 11,
    fontFamily: fontFamily.fontRegular,
  },
});

