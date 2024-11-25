import React, { Fragment, useState, useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import { GeneralProps } from '../../interfaces/generalProps';
import { Route, useIsFocused } from '@react-navigation/native';
import { NavBarPatient } from '../../common/commonComponents';
import { MainContainer } from '../../components/commonViews';
import { SegmentControl } from '../../components/segmentControl';
import DoctorOverView from './doctorOverview';
import LocationView from './location';
import Reviews from './reviews';
import HoursView from './hours';
import { ButtonFull } from '../../components/commonButton';
import { segments } from '../../utils/constant';
import { useTranslation } from 'react-i18next';
import LanguageCheck from '../../Language Settings/LanguageCheck';


interface Props extends GeneralProps {
  route: Route<string, object | undefined>;
}

const DoctorProfile: React.FC<Props> = (): JSX.Element => {
  const { t } = useTranslation();
const isRTL = LanguageCheck();    
const [selectedTab, setSelectedTab] = useState(t('labels.overView'));
  const isFocused = useIsFocused();

  useEffect(() => {
    setSelectedTab(t("labels.overView"))
  }, [isFocused]);
  return (
    <Fragment>
      <MainContainer>
        {isRTL ?
          <ScrollView >
            <NavBarPatient title={t("labels.doctorProf")} />
            <View style={{ alignSelf: 'flex-end', flex: 1 }}>
              <ScrollView horizontal={true} >
                <SegmentControl
                  tabs={segments.slice().reverse()}
                  defaultTab={selectedTab}
                  onTabChanged={(
                    tab: 'OverView' | 'Location' | 'Reviews' | 'Hours',
                  ) => {
                    setSelectedTab(tab);
                  }}
                />
              </ScrollView>
            </View>
            {selectedTab == t("labels.overView") ? <DoctorOverView /> : null}
            {selectedTab == t("labels.location") ? <LocationView /> : null}
            {selectedTab == t("labels.reviews") ? <Reviews /> : null}
            {selectedTab == t("labels.hours") ? <HoursView /> : null}

          </ScrollView>
          : <ScrollView >
            <NavBarPatient title={t("labels.doctorProf")} />
            <ScrollView horizontal={true} >
              <SegmentControl
                tabs={segments}
                defaultTab={selectedTab}
                onTabChanged={(
                  tab: 'OverView' | 'Location' | 'Reviews' | 'Hours',
                ) => {
                  setSelectedTab(tab);
                }}
              />
            </ScrollView>
            {selectedTab == t("labels.overView") ? <DoctorOverView /> : null}
            {selectedTab == t("labels.location") ? <LocationView /> : null}
            {selectedTab == t("labels.reviews") ? <Reviews /> : null}
            {selectedTab == t("labels.hours") ? <HoursView /> : null}
          </ScrollView>}
        <ButtonFull
          disabled={false}
          funCallback={() => { }}
          label={t("labels.bookAppoinitment")}
          style={{ marginVertical: 0 }}
        />
      </MainContainer>
    </Fragment>
  );
};
export default DoctorProfile;
