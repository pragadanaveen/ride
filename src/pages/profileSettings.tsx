import React, { Fragment, useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { GeneralProps } from '../interfaces/generalProps';
import { Route, useIsFocused } from '@react-navigation/native';
import { NavBarPatient } from '../common/commonComponents';
import { MainContainer } from '../components/commonViews';
import { SegmentControl } from '../components/segmentControl';
import BasicInfo from './profileSettings/basicInfo';
import AboutMe from './profileSettings/aboutMe';
import ClinicInfo from './profileSettings/clinicInfo';
import ContactDetails from './profileSettings/contactDetails';
import Pricing from './profileSettings/pricing';
import Education from './profileSettings/education';
import Awards from './profileSettings/awards';
import Registrations from './profileSettings/registraction';
import { profilesegments } from '../utils/constant';
import { colors } from '../utils/colors';
import { useTranslation } from 'react-i18next';
import LanguageCheck from '../Language Settings/LanguageCheck';
interface Props extends GeneralProps {
  route: Route<string, object | undefined>;
}
const ProfileSettings: React.FC<Props> = ({ navigation, route }): JSX.Element => {
  const { t } = useTranslation();
const isRTL = LanguageCheck();    const [selectedTab, setSelectedTab] = useState<string>(t('labels.basicInfo'));
  const isFocused = useIsFocused();

  useEffect(() => {
    setSelectedTab(t('labels.basicInfo')); // Set the selectedTab to 'Appointments'
  }, [isFocused]);

  return (
    <Fragment>
      <MainContainer style={{ backgroundColor: colors.background }}>
        <ScrollView>
          <NavBarPatient title={t("labels.profileSettings")} />
          {isRTL ?
            <ScrollView
              horizontal={true}
              contentContainerStyle={{
                flexDirection: 'row-reverse', // Reverse the order of children
              }}
              style={{
                transform: [{ scaleX: -1 }], // Reverse the scroll direction
              }}
            >
              <SegmentControl
                tabs={profilesegments}
                defaultTab={selectedTab}
                onTabChanged={(
                  tab:
                    | 'Basic Info'
                    | 'About Me'
                    | 'Clinic Info'
                    | 'Contact Details'
                    | 'Pricing & Services'
                    | 'Education & Experience'
                    | 'Awards & Memberships'
                    | 'Registrations',
                ) => {
                  setSelectedTab(tab);
                }}
              />
            </ScrollView> :
            <ScrollView
              horizontal={true}>
              <SegmentControl
                tabs={profilesegments}
                defaultTab={selectedTab}
                onTabChanged={(
                  tab:
                    | 'Basic Info'
                    | 'About Me'
                    | 'Clinic Info'
                    | 'Contact Details'
                    | 'Pricing & Services'
                    | 'Education & Experience'
                    | 'Awards & Memberships'
                    | 'Registrations',
                ) => {
                  setSelectedTab(tab);
                }}
              />
            </ScrollView>
          }
          {selectedTab == t('labels.basicInfo') ? <BasicInfo /> : null}
          {selectedTab == t("labels.aboutMe") ? <AboutMe /> : null}
          {selectedTab == t("labels.clinicInfo") ? <ClinicInfo /> : null}
          {selectedTab == t("labels.contactDetails") ? <ContactDetails /> : null}
          {selectedTab == t("labels.pricingAndServices") ? <Pricing /> : null}
          {selectedTab == t("labels.educationAndExperience") ? <Education /> : null}
          {selectedTab == t("labels.awardsAndMemberships") ? <Awards /> : null}
          {selectedTab == t("labels.registrations") ? <Registrations /> : null}
        </ScrollView>
      </MainContainer>
    </Fragment>
  );
};
export default ProfileSettings;
