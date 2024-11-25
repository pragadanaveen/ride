import React, {Fragment, useState} from 'react';
import {ScrollView} from 'react-native';
import {GeneralProps} from '../interfaces/generalProps';
import {Route} from '@react-navigation/native';
import {NavBarPatient} from '../common/commonComponents';
import {
  MainContainer,
} from '../components/commonViews';
import {screenName} from '../utils/screenName';
import {_testDoctorDetails} from '../utils/mockDetails';
import DoctorDetailsCard from '../components/doctorComponents';
import { useTranslation } from 'react-i18next';
interface Props extends GeneralProps {
  route: Route<string, object | undefined>;
}

const FavouritesScreen: React.FC<Props> = ({
  navigation
}): JSX.Element => {
  const { t } = useTranslation();
  const [doctorDetails, setDoctorDetails] = useState(_testDoctorDetails);
return (
    <Fragment>
      <MainContainer>
        <NavBarPatient title={t("labels.favourites")} />
        <ScrollView style={{paddingLeft: 10, marginVertical: 10}}>
          {doctorDetails.length > 0
            ? doctorDetails.map((item, index) => {
                return (
                  <DoctorDetailsCard
                    key={index}
                    details={item}
                    bookAnAppointment={() => {
                      navigation.navigate(screenName.BookAppointment);
                    }}
                    drProfileNavigation={() => {
                      navigation.navigate(screenName.DoctorProfile);
                    }}
                  />
                );
              })
            : null}
        </ScrollView>
      </MainContainer>
    </Fragment>
  );
};
export default FavouritesScreen;
