import React, {Fragment, useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import {GeneralProps} from '../../interfaces/generalProps';
import {Route, useIsFocused} from '@react-navigation/native';
import {NavBarPatient} from '../../common/commonComponents';
import {MainContainer} from '../../components/commonViews';
import {SegmentControl} from '../../components/segmentControl';
import AppointmentList from './appointments';
import PrescriptionList from './prescriptions';
import MedicalRecords from './medicalRecords';
import Billing from './billing';
import PatientOverView from './overView';
import {patientsegments} from '../../utils/constant';
import { useTranslation } from 'react-i18next';
import { labels } from '../../utils/labels';
import LanguageCheck from '../../Language Settings/LanguageCheck';
            
interface Props extends GeneralProps {
  route: Route<string, object | undefined>;
}

const PatientProfile: React.FC<Props> = ({navigation, route}): JSX.Element => {
  const { t, i18n } = useTranslation();
const isRTL = LanguageCheck();    const [selectedTab, setSelectedTab] = useState<string>(t("labels.overView"));

  const isFocused = useIsFocused();               
  useEffect(() => {
    setSelectedTab(t("labels.overView"));
  }, [isFocused]);

  return (
    <Fragment>
      <MainContainer>
        <ScrollView>
          <NavBarPatient title={t("labels.ptTitle")} />

          {isRTL?
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
              tabs={patientsegments}
              defaultTab={selectedTab}
              onTabChanged={(
                tab:
                  | 'OverView'
                  | 'Appointments'
                  | 'Prescriptions'
                  | 'Medical Records'
                  | 'Billing',
              ) => {
                setSelectedTab(tab);
              }}
            />
          </ScrollView>:  <ScrollView horizontal={true}>
            <SegmentControl
              tabs={patientsegments}
              defaultTab={selectedTab}
              onTabChanged={(
                tab:
                  | 'OverView'
                  | 'Appointments'
                  | 'Prescriptions'
                  | 'Medical Records'
                  | 'Billing',
              ) => {
                setSelectedTab(tab);
              }}
            />
          </ScrollView>
          
        }
        
          {selectedTab == t("labels.overView") ? <PatientOverView /> : null}
          {selectedTab == t("labels.appointments") ? <AppointmentList /> : null}
          {selectedTab == t("labels.prescriptions") ? <PrescriptionList /> : null}
          {selectedTab == t("labels.medicalRecords") ? <MedicalRecords /> : null}
          {selectedTab == t("labels.billing") ? <Billing /> : null}
        </ScrollView>
      </MainContainer>
    </Fragment>
  );
};
export default PatientProfile;
