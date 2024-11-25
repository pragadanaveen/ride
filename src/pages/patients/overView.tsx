import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import LanguageCheck from '../../Language Settings/LanguageCheck';
import { p5, pl10, pl15, pl32, pl5, pr10, pr15, pr32, pr5, pt5 } from '../../common/commonStyles';
import {
  H14fontRegularBlackk,
  H15fontMediumBlack,
  H8fontMediumBlack,
  H9fontMediumBlack,
  H9fontRegularGray,
} from '../../components/commonText';
import { CardSurface, RowView } from '../../components/commonViews';
import { Iicon, MapDoctor, Patient4, UserIcon, } from '../../components/svgIcons';
import { colors } from '../../utils/colors';
import { DevWidth } from '../../utils/device';


interface Props { }

export const Dash = () => {
  const dashes = new Array(Math.min(15)).fill(null);
  return (
  <View style={{paddingLeft:20}}>
        {dashes.map((_, index) => (
          <Text key={index} style={styles.dashLine}>
            |
          </Text>
        ))}
        </View>
  
  );
};

const PatientOverView: React.FC<Props> = ({ }): JSX.Element => {
  const { t, i18n } = useTranslation();
  const isRTL = LanguageCheck(); return (
    <View style={styles.container}>
      <View style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
        <View>
          <CardSurface style={styles.iconSurface}>
            <Iicon fill={"#000"} height={20} width={7} />
          </CardSurface>
          <Dash />
        </View>
        <View style={isRTL ? pr15 : pl15}>
          <CardSurface style={styles.infoDetailsStyle}>
            <RowView style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
              <View style={[styles.patientDetails, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                <View style={styles.profileImage}>
                  <Patient4 height={'100%'} width={'150%'} />
                </View>
                <View style={isRTL ? pr10 : pl10}>
                  <H8fontMediumBlack style={{textAlign:isRTL?'right':'left'}}>{t('labels.patientName1')}</H8fontMediumBlack>
                  <View style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                    <H9fontRegularGray style={pt5}>
                      {t('labels.patientId')}
                    </H9fontRegularGray>
                    <H9fontRegularGray style={pt5}>
                      {t('labels.idOfPatient')}
                    </H9fontRegularGray>
                  </View>
                  <View style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                    <H9fontRegularGray style={{}}>
                      {t('labels.bloodGroup')}
                    </H9fontRegularGray>
                    <H9fontRegularGray style={{}}>{t('labels.typeOfbloodGroup2')}</H9fontRegularGray>
                  </View>
                </View>
              </View>
            </RowView>
            <RowView style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
              <View style={[styles.otherDetails, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                <Icon2 name="phone" size={20} color={'black'} />
                <H9fontMediumBlack style={{ paddingLeft: isRTL ? 15 : 4, paddingRight: isRTL ? 4 : 15 }}>
                  {t('labels.PhnNuminOverview')}
                </H9fontMediumBlack>
              </View>
              <View style={[styles.otherDetails, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                <Icon name="map-marker" size={20} color={'black'} />
                <H9fontMediumBlack style={{ paddingLeft: isRTL ? 15 : 4, paddingRight: isRTL ? 4 : 15 }}>
                  {t('labels.floridaUSA')}
                </H9fontMediumBlack>
              </View>
            </RowView>
          </CardSurface>
        </View>
      </View>
      <View style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
        <View >
          <CardSurface style={styles.iconSurface}>
            <UserIcon fill={"#000"} height={18} width={15} />
          </CardSurface>
          <Dash />
        </View>
        <View style={isRTL ? pr15 : pl15}>
          <CardSurface style={styles.infoDetailsStyle}>
            <H15fontMediumBlack style={[p5,{textAlign:isRTL?'right':'left'}]}>{t('labels.aboutMe')}</H15fontMediumBlack>
            <H9fontRegularGray style={[isRTL ? pr5 : pl5,{textAlign:isRTL?'right':'left'}]}>
              {t('labels.text')}
            </H9fontRegularGray>
          </CardSurface>
        </View>
      </View>
      <View style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
        <CardSurface style={styles.iconSurface}>
          <MapDoctor fill={"#000"} height={18} width={15} />
        </CardSurface>
        <View style={isRTL ? pr15 : pl15}>
          <CardSurface style={styles.bookingDetails}>
            <H15fontMediumBlack style={[p5,{textAlign:isRTL?'right':'left'}]}>
              {t('labels.lastBooking')}
            </H15fontMediumBlack>
            <View style={[styles.drNameStyle, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
              <Icon1 name="check" size={20} color={'black'} />
              <H14fontRegularBlackk style={pt5}>
                {t('labels.DoctorName1')}
              </H14fontRegularBlackk>
            </View>
            <H9fontRegularGray style={[isRTL ? pr32 : pl32,{textAlign:isRTL?'right':'left'}]}>
              {t('labels.FavDoctorType')}
            </H9fontRegularGray>
            <H9fontRegularGray style={[isRTL ? pr32 : pl32,{textAlign:isRTL?'right':'left'}]}>
              {t('labels.overViewDate2')}
            </H9fontRegularGray>
            <View style={[styles.rowStyele, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
              <Icon1 name="check" size={20} color={'black'} />
              <H14fontRegularBlackk style={pt5}>
                {t('labels.DoctorName1')}
              </H14fontRegularBlackk>
            </View>
            <H9fontRegularGray style={[isRTL ? pr32 : pl32,{textAlign:isRTL?'right':'left'}]}>
              {t('labels.FavDoctorType')}
            </H9fontRegularGray>
            <H9fontRegularGray style={[isRTL ? pr32 : pl32,{textAlign:isRTL?'right':'left'}]}>
              {t('labels.overViewDate2')}
            </H9fontRegularGray>
          </CardSurface>
        </View>
      </View>
    </View>
  );
};
export default PatientOverView;
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18
  },
  iconSurface: {
    borderRadius: 25,
    height: 40,
    width: 40,
    backgroundColor: colors.white,
    paddingTop: 9,
    justifyContent: 'center',
    alignItems: 'center'
  },
  infoIconStyle: {
    height: 20,
    width: 7
  },
  infoDetailsStyle: {
    height: 140,
    width: DevWidth / 1.35,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
  },
  patientDetails: {
    padding: 5,
    flexDirection: 'row'
  },
  profileImage: {
    height: 70,
    width: 70,
    borderRadius: 40,
    borderWidth: 5,
    borderColor: '#f7f7f7',
    paddingRight: 20,
    overflow: 'hidden'
  },
  otherDetails: {
    paddingTop: 6
  },
  userIconStyle: {
    height: 18,
    width: 15
  },
  drIconStyle: {
    height: 18,
    width: 18
  },
  dashLine:{
    fontSize:8,
    color:colors.black,
    fontWeight:'800'
  },
  bookingDetails: {
    height: 200,
    width: DevWidth / 1.35,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  drNameStyle: {
    paddingLeft: 5
  },
  rowStyele: {
    paddingLeft: 5,
    paddingTop: 5
  },
});

