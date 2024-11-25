import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import LanguageSettings from './src/Language Settings/LanguageSettings';
import CircularProgress from './src/components/circularProgress';
import BookAppointment from './src/pages/bookAppointment';
import BookingSuccess from './src/pages/bookingSuccess';
import ChangePassword from './src/pages/changePassword';
import ChatList from './src/pages/chatList';
import ChatView from './src/pages/chatView';
import DashBoardScreen from './src/pages/dashboard';
import DoctorDashBoard from './src/pages/doctors/doctorDashboard';
import DoctorOverView from './src/pages/doctors/doctorOverview';
import DoctorProfile from './src/pages/doctors/doctorProfile';
import HoursView from './src/pages/doctors/hours';
import LocationView from './src/pages/doctors/location';
import MyPatient from './src/pages/doctors/myPatient';
import Reviews from './src/pages/doctors/reviews';
import ScheduleTimings from './src/pages/doctors/scheduleTimings';
import FavouritesScreen from './src/pages/favourites';
import ForgotPassword from './src/pages/forgotPassword';
import InvoiceList from './src/pages/invoiceList';
import InvoiceView from './src/pages/invoiceView';
import NotificationScreen from './src/pages/notifications';
import Pages from './src/pages/pages';
import AppointmentList from './src/pages/patients/appointments';
import Billing from './src/pages/patients/billing';
import MedicalRecords from './src/pages/patients/medicalRecords';
import PatientOverView from './src/pages/patients/overView';
import PatientAppointments from './src/pages/patients/patientAppointment';
import PatientProfile from './src/pages/patients/patientProfile';
import PrescriptionList from './src/pages/patients/prescriptions';
import ProfileSettings from './src/pages/profileSettings';
import AboutMe from './src/pages/profileSettings/aboutMe';
import Awards from './src/pages/profileSettings/awards';
import BasicInfo from './src/pages/profileSettings/basicInfo';
import ClinicInfo from './src/pages/profileSettings/clinicInfo';
import ContactDetails from './src/pages/profileSettings/contactDetails';
import Education from './src/pages/profileSettings/education';
import Pricing from './src/pages/profileSettings/pricing';
import Registrations from './src/pages/profileSettings/registraction';
import SearchDoctor from './src/pages/searchDoctor';
import SideMenu from './src/pages/sideMenu';
import SignInScreen from './src/pages/signInScreen';
import SignUpScreen from './src/pages/signUpScreen';
import SocialMedia from './src/pages/socialMedia';
import VideoCall from './src/pages/videoCall';
import VoiceCall from './src/pages/voiceCall';
import { screenName } from './src/utils/screenName';

const Stack = createNativeStackNavigator();

interface NavigationProps {
  initialRouteName: string;
}

const HomeNavigation = (props: NavigationProps) => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={props.initialRouteName}>
      <Stack.Screen name={screenName.SignUpScreen} component={SignUpScreen} />
      <Stack.Screen name={screenName.SignInScreen} component={SignInScreen} />
      <Stack.Screen name={screenName.ForgotPassword} component={ForgotPassword} />
      <Stack.Screen name={screenName.ChangePassword} component={ChangePassword} />
      <Stack.Screen name={screenName.BookingSuccess} component={BookingSuccess} />
      <Stack.Screen name={screenName.DashBoardScreen} component={DashBoardScreen} />
      <Stack.Screen name={screenName.SideMenu} component={SideMenu} />
      <Stack.Screen name={screenName.PatientAppointments} component={PatientAppointments} />
      <Stack.Screen name={screenName.AppointmentList} component={AppointmentList} />
      <Stack.Screen name={screenName.PrescriptionList} component={PrescriptionList} />
      <Stack.Screen name={screenName.MedicalRecords} component={MedicalRecords} />
      <Stack.Screen name={screenName.Billing} component={Billing} />
      <Stack.Screen name={screenName.DoctorProfile} component={DoctorProfile} />
      <Stack.Screen name={screenName.DoctorOverView} component={DoctorOverView} />
      <Stack.Screen name={screenName.LocationView} component={LocationView} />
      <Stack.Screen name={screenName.Reviews} component={Reviews} />
      <Stack.Screen name={screenName.HoursView} component={HoursView} />
      <Stack.Screen name={screenName.PatientProfile} component={PatientProfile} />
      <Stack.Screen name={screenName.PatientOverView} component={PatientOverView} />
      <Stack.Screen name={screenName.MyPatient} component={MyPatient} />
      <Stack.Screen name={screenName.DoctorDashBoard} component={DoctorDashBoard} />
      <Stack.Screen name={screenName.CircularProgress} component={CircularProgress} />
      <Stack.Screen name={screenName.InvoiceList} component={InvoiceList} />
      <Stack.Screen name={screenName.InvoiceView} component={InvoiceView} />
      <Stack.Screen name={screenName.FavouritesScreen} component={FavouritesScreen} />
      <Stack.Screen name={screenName.NotificationScreen} component={NotificationScreen} />
      <Stack.Screen name={screenName.Pages} component={Pages} />
      <Stack.Screen name={screenName.SearchDoctor} component={SearchDoctor} />
      <Stack.Screen name={screenName.SocialMedia} component={SocialMedia} />
      <Stack.Screen name={screenName.ProfileSettings} component={ProfileSettings} />
      <Stack.Screen name={screenName.BasicInfo} component={BasicInfo} />
      <Stack.Screen name={screenName.AboutMe} component={AboutMe} />
      <Stack.Screen name={screenName.ClinicInfo} component={ClinicInfo} />
      <Stack.Screen name={screenName.ContactDetails} component={ContactDetails} />
      <Stack.Screen name={screenName.Pricing} component={Pricing} />
      <Stack.Screen name={screenName.Education} component={Education} />
      <Stack.Screen name={screenName.Awards} component={Awards} />
      <Stack.Screen name={screenName.Registrations} component={Registrations} />
      <Stack.Screen name={screenName.ChatList} component={ChatList} />
      <Stack.Screen name={screenName.ChatView} component={ChatView} />
      <Stack.Screen name={screenName.ScheduleTimings} component={ScheduleTimings} />
      <Stack.Screen name={screenName.BookAppointment} component={BookAppointment} />
      <Stack.Screen name={screenName.VoiceCall} component={VoiceCall} />
      <Stack.Screen name={screenName.VideoCall} component={VideoCall} />
      <Stack.Screen name={screenName.LanguageSettings} component={LanguageSettings} />
    </Stack.Navigator>
  );
};
interface RootNavigationProps {
  initialRouteName: string;
  currentLanguage: string; // Add this prop
  onLanguageChange: (language: string) => void;
}
const RootNavigation = (props: RootNavigationProps) => {
  return (
    <NavigationContainer>
      <HomeNavigation initialRouteName={props.initialRouteName} />
    </NavigationContainer>
  );
};

export default RootNavigation;
