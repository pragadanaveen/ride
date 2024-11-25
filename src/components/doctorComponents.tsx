import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon3 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import LanguageCheck from '../Language Settings/LanguageCheck';
import {
  alignItemsCenter,
  flex1,
  ml10,
  ml5,
  mr10,
  pl2,
  pl5,
  pr5,
  pt5,
  pv5
} from '../common/commonStyles';
import { DoctorDetailsProps } from '../interfaces/generalProps';
import { colors } from '../utils/colors';
import { DevWidth } from '../utils/device';
import {
  H14fontRegularBlack,
  H14fontRegularBlackk,
  H14fontRegularBlue,
  H15fontMediumBlack,
  H8fontRegularWhite,
  H9fontMediumBlack,
} from './commonText';
import { CardSurface, RowView } from './commonViews';
import { DentistIcon, Doctor1 } from './svgIcons';

interface DoctorDetailsCardProps {
  drProfileNavigation: CallableFunction;
  bookAnAppointment: CallableFunction;
  details: DoctorDetailsProps;
  page: string;
}

const DoctorDetailsCard: React.FC<DoctorDetailsCardProps> =
  ({
    drProfileNavigation,
    bookAnAppointment,
    details,
    page
  }) => {
    const { t, i18n } = useTranslation();
    const isRTL = LanguageCheck();

    return (
      <View style={[mr10, pv5]}>
        <CardSurface style={styles.container}>
          <RowView style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }} >
            <View style={[styles.drDetailsContainerStyle, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
              <TouchableOpacity
                onPress={() => {
                  drProfileNavigation();
                }}>
                <View style={{ paddingRight: 30, borderRadius: 8, overflow: 'hidden', height: 80, width: 80, alignItems: 'center' }}>
                  <Doctor1 height={80} width={130} />
                </View>
              </TouchableOpacity>
              <View style={isRTL ? mr10 : ml10}>
                <H15fontMediumBlack style={{ textAlign: isRTL ? 'right' : 'left' }}>{t('labels.FavDoctorName')}</H15fontMediumBlack>
                <View style={{ alignItems: isRTL ? 'flex-end' : 'flex-start' }}>
                  <View style={{ flexDirection: 'row' }}>

                    <H14fontRegularBlackk>{isRTL ? 'SDB,' : 'MDS - '}</H14fontRegularBlackk>
                    <H14fontRegularBlackk>{t("labels.FavDoctorSpecialization")}</H14fontRegularBlackk>
                    <H14fontRegularBlackk >{isRTL ? ' -SDM' : ', BDS'}</H14fontRegularBlackk>
                  </View>
                </View>

                <RowView style={{ alignItems: 'center', flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                  <CardSurface style={styles.smallImageStyle}>
                    <DentistIcon height={14} width={14} />
                  </CardSurface>
                  <RowView style={[flex1, ml5, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                    <H14fontRegularBlue style={{}}>
                      {t('labels.FavDoctorType')}
                    </H14fontRegularBlue>
                    <H14fontRegularBlack style={{}}>
                      {details.experience}
                      {t('labels.exp')}
                    </H14fontRegularBlack>
                  </RowView>
                </RowView>
                <RowView style={{ width: page == 'home' ? DevWidth / 1.95 : DevWidth / 1.62, flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                  <View style={[pt5, alignItemsCenter, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                    <Icon2 name="star" size={11} color={colors.yellow} />
                    <Icon2
                      name="star"
                      size={11}
                      color={colors.yellow}
                      style={pl2}
                    />
                    <Icon2
                      name="star"
                      size={11}
                      color={colors.yellow}
                      style={pl2}
                    />
                    <Icon2
                      name="star"
                      size={11}
                      color={colors.yellow}
                      style={pl2}
                    />
                    <Icon2 name="star" size={11} color={'#dedfe0'} style={pl2} />
                    <H9fontMediumBlack>
                      {'('}
                      {details.count}
                      {')'}
                    </H9fontMediumBlack>
                  </View>
                  <View style={[{ flexDirection: isRTL ? 'row-reverse' : 'row' }, alignItemsCenter]}>
                    <Icon2 name="map-marker" size={15} color={'black'} />
                    <H9fontMediumBlack style={isRTL ? pr5 : pl5}>
                      {t('labels.floridaUSA')}
                    </H9fontMediumBlack>
                  </View>
                </RowView>
              </View>
            </View>
          </RowView>
          {/* <CommonLineDotted>
            <CommonLineDottedInner />
          </CommonLineDotted> */}
          <View style={{ height: 1, width: '100%', marginTop: 10, borderRadius: 1, borderWidth: 1, borderColor: '#DBDBDB', borderStyle: 'dashed', zIndex: 0, }}>
            <View style={{ position: 'absolute', left: 0, bottom: 0, width: '100%', height: 1, backgroundColor: 'white', zIndex: 1 }} />
          </View>
          <RowView style={[pt5, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
            <View style={[{ flexDirection: isRTL ? 'row-reverse' : 'row' }, alignItemsCenter]}>
              <CardSurface style={styles.surfaceStyle}>
                <Icon3 name="like2" size={12} color={'black'} />
              </CardSurface>
              <H9fontMediumBlack style={isRTL ? pr5 : pl5}>{details.likes}</H9fontMediumBlack>
            </View>
            <View style={[{ flexDirection: isRTL ? 'row-reverse' : 'row' }, alignItemsCenter]}>
              <CardSurface style={styles.surfaceStyle}>
                <Icon2 name="money" size={12} color={'black'} />
              </CardSurface>
              <H9fontMediumBlack style={{}}>
                {' $'}
                {details.minFee} {' - $'}
                {details.maxFee}
              </H9fontMediumBlack>
            </View>
          </RowView>
          <TouchableOpacity
            onPress={() => {
              bookAnAppointment();
            }}
            style={styles.buttonStyle}>
            <H8fontRegularWhite>{t('labels.bookAppoinitment')}</H8fontRegularWhite>
          </TouchableOpacity>
        </CardSurface>
      </View>
    );
  };

export default DoctorDetailsCard;

const styles = StyleSheet.create({
  container: {
    height: 226,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  drDetailsContainerStyle: { padding: 5 },
  drImageStyle: { height: 100, width: 100, borderRadius: 8 },
  smallImageStyle: {
    borderRadius: 25,
    height: 24,
    width: 24,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallImage: {
    height: 17,
    width: 17,
  },
  surfaceStyle: {
    borderRadius: 25,
    height: 25,
    width: 25,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  buttonStyle: {
    marginTop: 15,
    height: 35,
    borderRadius: 5,
    backgroundColor: '#20c0f3',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});