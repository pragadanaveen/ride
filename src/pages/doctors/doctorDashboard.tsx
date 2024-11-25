import { Route } from '@react-navigation/native';
import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import LanguageCheck from '../../Language Settings/LanguageCheck';
import { NavBar } from '../../common/commonComponents';
import {
  alignItemsCenter,
  pl10,
  pr10,
  spaceBetween
} from '../../common/commonStyles';
import CircularProgress from '../../components/circularProgress';
import CircularProgressHigh from '../../components/circularProgressHigh';
import {
  H10fontRegularWhite,
  H14fontRegularBlackk,
  H14fontRegularBlue,
  H14fontRegularRed,
  H14fontRegulargray,
  H22fontMediumBlack,
  H8fontMediumBlack,
  H8fontRegularWhite,
  H9fontMediumBlack,
} from '../../components/commonText';
import {
  CardSurface,
  MainContainer,
  RowView,
} from '../../components/commonViews';
import { Doctor2, Speciality5 } from '../../components/svgIcons';
import { GeneralProps } from '../../interfaces/generalProps';
import { colors } from '../../utils/colors';
import { DevWidth } from '../../utils/device';

interface Props extends GeneralProps {
  route: Route<string, object | undefined>;
}


const DoctorDashBoard: React.FC<Props> = (): JSX.Element => {
  const { t } = useTranslation();
  const isRTL = LanguageCheck();
  return (
    <Fragment>
      <MainContainer>
        <NavBar title={t('labels.doctorDashboard')} />
        <View style={styles.container}>
          <CardSurface style={styles.drDetailsContainer}>
            <View style={[styles.rowStyle, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
              <View style={styles.profileImageStyle}>
                <Doctor2 height={'100%'} width={'150%'} />
              </View>
              <View style={[{ width: DevWidth / 1.5 }, isRTL ? pr10 : pl10]}>
                <RowView style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                  <H8fontMediumBlack>{t('labels.DoctorName1')}</H8fontMediumBlack>
                  <CardSurface style={styles.iconSurface}>
                    <Icon1
                      name="more-vert"
                      size={15}
                      color={colors.lightGray}
                    />
                  </CardSurface>
                </RowView>
                <View style={{ flexDirection: isRTL ? 'row' : 'row-reverse', alignSelf: isRTL ? 'flex-end' : 'flex-start', marginBottom: 3 }}>
                  <H14fontRegulargray>{t('labels.oralMaxillofacial')}</H14fontRegulargray>
                  <H14fontRegulargray >{isRTL ? ' - SDM,SDB ' : 'BDS, MDS -'}</H14fontRegulargray>
                </View>
                <View style={[{ flexDirection: isRTL ? 'row-reverse' : 'row' }, alignItemsCenter]}>
                  <CardSurface style={styles.specialitiesSurface}>
                    <Speciality5 height={15} width={15} />
                  </CardSurface>
                  <H14fontRegularBlue>{t('labels.Dentist')}</H14fontRegularBlue>
                </View>
                <View style={[{ flexDirection: isRTL ? 'row-reverse' : 'row' }, alignItemsCenter, spaceBetween]}>
                  <H14fontRegularRed>{t('labels.fifteenExp')}</H14fontRegularRed>
                  <View style={[styles.locationStyle, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                    <Icon name="map-marker" size={15} color={'black'} />
                    <H9fontMediumBlack>{t('labels.floridaUSA')}</H9fontMediumBlack>
                  </View>
                </View>
              </View>
            </View>
          </CardSurface>
        </View>

        <View style={[styles.appointmentDetails, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
          <CardSurface style={styles.cardStyle}>
            <CircularProgressHigh percent={150} />
            <H14fontRegularBlackk style={{ marginBottom: 4 }}>{t('labels.totalPatient')}</H14fontRegularBlackk>
            <H22fontMediumBlack style={{ marginBottom: 4 }}>{t('labels.thousandThreeHundred')}</H22fontMediumBlack>
            <View style={styles.dateStyle}>
              <H10fontRegularWhite style={{}}>
                {t('labels.sixteenMarch')}
              </H10fontRegularWhite>
            </View>
          </CardSurface>

          <View style={{ paddingHorizontal: 20 }}>
            <CardSurface style={styles.cardStyle}>
              <CircularProgress percent={30} />
              <H14fontRegularBlackk style={{ marginBottom: 4 }}>{t('labels.totalPatient')}</H14fontRegularBlackk>
              <H22fontMediumBlack style={{ marginBottom: 4 }}>{'160'}</H22fontMediumBlack>
              <View style={styles.dateStyle}>
                <H10fontRegularWhite style={{}}>
                  {t('labels.sixteenMarch')}
                </H10fontRegularWhite>
              </View>
            </CardSurface>
          </View>
        </View>
        <View
          style={{
            flexDirection: isRTL ? 'row-reverse' : 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            paddingTop: 15,
          }}>
          <TouchableOpacity style={styles.buttonStyle}>
            <H8fontRegularWhite>{t('labels.today')}</H8fontRegularWhite>
            <H8fontRegularWhite>{t('labels.appointments')}</H8fontRegularWhite>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle}>
            <H8fontRegularWhite>{t('labels.upComing')}</H8fontRegularWhite>
            <H8fontRegularWhite>{t('labels.appointments')}</H8fontRegularWhite>
          </TouchableOpacity>
        </View>
      </MainContainer>
    </Fragment>
  );
};
export default DoctorDashBoard;

const styles = StyleSheet.create({
  container: { marginTop: -90, paddingHorizontal: 10 },
  drDetailsContainer: { height: 145, backgroundColor: 'white', borderRadius: 20 },
  rowStyle: { paddingTop: 5, justifyContent: 'center', alignItems: 'center' },
  profileImageStyle: {
    height: 70,
    width: 70,
    borderRadius: 40,
    borderWidth: 5,
    borderColor: '#f7f7f7',
    overflow: 'hidden'
  },
  iconSurface: {
    borderRadius: 33,
    height: 25,
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  specialitiesSurface: {
    borderRadius: 25,
    height: 24,
    width: 24,
    backgroundColor: colors.white,
    marginRight: 7,
    alignItems: 'center',
    justifyContent: 'center'
  },
  specialitieImageStye: {
    height: 17,
    width: 17,
    alignSelf: 'center'
  },
  locationStyle: {
    alignItems: 'center'
  },
  appointmentDetails: {
    paddingHorizontal: 10,
    paddingTop: 15,

  },
  surfaceContainer: {
    height: 250,
    width: DevWidth / 2.3,
    backgroundColor: colors.background,
    borderRadius: 10,
  },
  cardStyle: {
    height: 270,
    width: DevWidth / 2.3,
    backgroundColor: colors.background,
    borderRadius: 10,
    alignItems: 'center',
  },
  dateStyle: {
    height: 25,
    width: 110,
    borderRadius: 20,
    backgroundColor: '#1B5A90',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    height: 74,
    width: DevWidth / 2.25,
    backgroundColor: '#0DD8F9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});
