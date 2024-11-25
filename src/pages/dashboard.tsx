import { Route } from '@react-navigation/native';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import LanguageCheck from '../Language Settings/LanguageCheck';
import { NavBar } from '../common/commonComponents';
import { alignItemsCenter, mh10, ml10, mr10, mt10, mv10, ph15, pl15, pr15 } from '../common/commonStyles';
import {
  H7fontMediumBlack,
  H9fontMediumBlack,
  H9fontRegularBlack,
} from '../components/commonText';
import { RowView } from '../components/commonViews';
import DashBoardSearch from '../components/dashboardSearch';
import DoctorDetailsCard from '../components/doctorComponents';
import { GeneralProps } from '../interfaces/generalProps';
import { menu } from '../utils/constant';
import { _testDoctorDetails } from '../utils/mockDetails';
import { screenName } from '../utils/screenName';
interface SpecialitiesList {
  onPressViewAll: CallableFunction;
}
const SpecialitiesList: React.FC<SpecialitiesList> = ({ onPressViewAll }) => {
  const { t, i18n } = useTranslation();
const isRTL = LanguageCheck();    return (
    <View style={[mv10]}>
      <RowView style={[ph15, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
        <H7fontMediumBlack>{t('labels.specialities')}</H7fontMediumBlack>
        <TouchableOpacity
          onPress={() => {
            onPressViewAll();
          }}>
          <H9fontMediumBlack>{t('labels.viewAll')}</H9fontMediumBlack>
        </TouchableOpacity>
      </RowView>
      <View style={isRTL ? { transform: [{ scaleX: -1 }] } : null}>
        <ScrollView horizontal={true} style={[isRTL?mr10:ml10, mt10,]} showsHorizontalScrollIndicator={false}>
          {menu.map(({ name, Img }, index) => {
            return (
              <View key = {index} style={[alignItemsCenter,isRTL?pl15:pr15,isRTL ? { transform: [{ scaleX: -1 }] } : null]}>
                <Img height={67} width={67} />
                <View style={mv10}>
                  <H9fontRegularBlack>{t(name)}</H9fontRegularBlack>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

interface Props extends GeneralProps {
  route: Route<string, object | undefined>;
}

const DashBoardScreen: React.FC<Props> = ({ navigation, route }): JSX.Element => {
  const [doctorDetails, setDoctorDetails] = useState(_testDoctorDetails);
  const { t, i18n } = useTranslation();
const isRTL = LanguageCheck();    return (
    <SafeAreaView>
      <NavBar title={t('labels.findDoctor')} />
      <DashBoardSearch
        searchNow={() => {
          navigation.navigate(screenName.SearchDoctor);
        }}
      />
      <SpecialitiesList
        onPressViewAll={() => {
          navigation.navigate(screenName.SearchDoctor as any);
        }}
      />
      <View style={[mv10]}>
        <RowView style={[ph15, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
          <H7fontMediumBlack>{t('labels.findDoctors')}</H7fontMediumBlack>
          <TouchableOpacity
            onPress={() => navigation.navigate(screenName.SearchDoctor as any)}>
            <H9fontMediumBlack>{t('labels.viewAll')}</H9fontMediumBlack>
          </TouchableOpacity>
        </RowView>
        <View style={isRTL ? { transform: [{ scaleX: -1 }] } : null}>
          <ScrollView style={[mh10]} horizontal={true} showsHorizontalScrollIndicator={false}>
            {doctorDetails.length > 0
              ? doctorDetails.map((item, index) => {
                return (
                  <View key={index} style={isRTL ? { transform: [{ scaleX: -1 }] } : null}>
                    <DoctorDetailsCard
                      page={'home'}
                      details={item}
                      bookAnAppointment={() => {
                        navigation.navigate(screenName.BookAppointment);
                      }}
                      drProfileNavigation={() => {
                        navigation.navigate(screenName.DoctorProfile);
                      }}
                    />
                  </View>
                );
              })
              : null}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default DashBoardScreen;