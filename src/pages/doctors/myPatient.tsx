import { Route } from '@react-navigation/native';
import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LanguageCheck from '../../Language Settings/LanguageCheck';
import { NavBarPatient } from '../../common/commonComponents';
import { pl10, pl5, pl6, pl7, pr10, pr5, pr6, pr7 } from '../../common/commonStyles';
import {
  H14fontRegularBlackk,
  H8fontMediumBlack,
  H9fontMediumBlack,
  H9fontRegularGray,
} from '../../components/commonText';
import {
  CardSurface,
  CommonLineDotted,
  CommonLineDottedInner,
  MainContainer,
  RowView,
} from '../../components/commonViews';
import { Patient, Patient7 } from '../../components/svgIcons';
import { GeneralProps } from '../../interfaces/generalProps';
import { colors } from '../../utils/colors';
import { DevWidth } from '../../utils/device';
import { screenName } from '../../utils/screenName';


interface Props extends GeneralProps {
  route: Route<string, object | undefined>;
}

const MyPatient: React.FC<Props> = ({ navigation, route }): JSX.Element => {
  const { t, i18n } = useTranslation();
  const isRTL = LanguageCheck(); return (
    <Fragment>
      <MainContainer>
        <ScrollView>
          <NavBarPatient title={t("labels.myPatientTitle")} />
          <View
            style={{
              height: 85,
              backgroundColor: 'white',
              padding: 10,
              flexDirection: isRTL ? 'row-reverse' : 'row'
            }}>
            <CardSurface
              style={{
                borderRadius: 40,
                height: 60,
                width: 60,
                backgroundColor: 'white',
              }}>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Patient height={35} width={28} />
              </View>
            </CardSurface>
            <View style={[isRTL ? pr10 : pl10, { paddingTop: 5 }]}>
              <H8fontMediumBlack>{t('labels.myPatientList')}</H8fontMediumBlack>
              <H9fontRegularGray>{t('labels.patients125')}</H9fontRegularGray>
            </View>
          </View>
          <View style={{ paddingHorizontal: 10, paddingTop: 20 }}>
            <CardSurface
              style={{
                height: 141,
                backgroundColor: 'white',
                borderRadius: 10,
                paddingHorizontal: 15,
              }}>
              <RowView style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                <View style={{ flexDirection: isRTL ? 'row-reverse' : 'row', paddingTop: 5 }}>
                  <H14fontRegularBlackk>{t('labels.patientId')}</H14fontRegularBlackk>
                  <H14fontRegularBlackk>{t('labels.idOfPatient')}</H14fontRegularBlackk>
                </View>
                <View style={{ flexDirection: isRTL ? 'row-reverse' : 'row', alignItems: 'center' }}>
                  <Icon name="map-marker" size={15} color={'black'} />
                  <H9fontMediumBlack style={isRTL ? pr5 : pl5}>
                    {t('labels.myPatientCity')}
                  </H9fontMediumBlack>
                </View>
              </RowView>
              <CommonLineDotted>
                <CommonLineDottedInner />
              </CommonLineDotted>
              <RowView style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                <View style={{ padding: 5, flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate(screenName.PatientProfile)
                    }>
                    <View style={{ height: 60, width: 60, borderRadius: 60, overflow: 'hidden' }}>
                      <Patient7 height={60} width={60} />
                    </View>
                  </TouchableOpacity>
                  <View style={isRTL ? pr10 : pl10}>
                    <H8fontMediumBlack>{t('labels.patientName1')}</H8fontMediumBlack>
                    <RowView style={{ width: DevWidth / 1.53, flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                      <View style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                        <H9fontRegularGray>{t('labels.patientAge')}</H9fontRegularGray>
                        <H9fontRegularGray>{t('labels.patientGender')}</H9fontRegularGray>
                      </View>
                      <View style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                        <H9fontRegularGray style={isRTL ? pr7 : pl7}>
                          {t('labels.bloodGroup')}
                        </H9fontRegularGray>
                        <H9fontRegularGray>{t('labels.typeOfbloodGroup1')}</H9fontRegularGray>
                      </View>
                    </RowView>
                    <View style={{ flexDirection: isRTL ? 'row-reverse' : 'row', paddingTop: 5 }}>
                      <CardSurface
                        style={{
                          borderRadius: 20,
                          height: 20,
                          width: 20,
                          backgroundColor: colors.white,
                          paddingHorizontal: 0,
                          paddingVertical: 0,
                          justifyContent: 'center',
                          alignItems: 'center'
                        }}>
                        <Icon name="phone" size={12} color={'black'} />
                      </CardSurface>
                      <H9fontMediumBlack
                        style={[isRTL ? pr6 : pl6, { paddingTop: 5 }]}>
                        {'+1 504 368 6874'}
                      </H9fontMediumBlack>
                    </View>
                  </View>
                </View>
              </RowView>
            </CardSurface>
          </View>
        </ScrollView>
      </MainContainer>
    </Fragment>
  );
};
export default MyPatient;

