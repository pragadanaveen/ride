import { screenName } from "./screenName";





import { BrainIcon, CardiologyIcon, DentistIcon, FacebookIcon1, Feature1, Feature2, Feature3, Feature4, GooglePlusIcon, InstagramIcon, KidneysIcon, LinkedinIcon, Patient1, Patient2, Patient3, Patient4, PurseIcon, SmileIcon, StarIcon, StethoscopeIcon, TwitterIcon } from "../components/svgIcons";


export const dayOptions = [

  { name: "labels.mo", no: 10 },
  { name: "labels.tu", no: 11 },
  { name: "labels.we", no: 12 },
  { name: "labels.th", no: 13 },
  { name: "labels.fr", no: 14 },
  { name:"labels.sa", no: 15 },
  { name:  "labels.su",no: 16 },
];

//schedule timings
export const days = [
  { name: "labels.sun" },
  { name: "labels.mon" },
  { name: "labels.tue"},
  { name: "labels.wed"},
  { name: "labels.thur" },
  { name: "labels.fri" },
  { name: "labels.sat"},
];

//doctor profile
export const segments = ["labels.overView", "labels.location", "labels.reviews", "labels.hours"];

//location
export const menuOptions = [
  { Img: Feature1 },
  { Img: Feature2 },
  { Img: Feature3 },
  { Img: Feature4 },
];

//patient appointment
export const segment = [
  "labels.appointments",
  "labels.prescriptions",
  "labels.medicalRecords",
  "labels.billing"
];

//patient profile
export const patientsegments = [
  "labels.overView",
  "labels.appointments",
  "labels.prescriptions",
  "labels.medicalRecords",
  "labels.billing"
];

//basic info
export const data = [
  { label: "labels.male", value: '1' },
  { label: "labels.patientGender", value: '2' },
];

//book appointment
export const tab = [
  { name: "labels.TimeAndDate" },
  { name: "labels.checkout" },
  { name: "labels.Payment" },
];

//chatList
export const chatArray = [
  {
    name: 'labels.chatListName1',
    Img: Patient1,
    content: 'labels.chatListContent1',
    date: '09:25 AM',
    active: true,
    noofmessage: null,
    message: 'read',
    Icon: SmileIcon,
  },
  {
    name: 'labels.chatListName2',
    Img: Patient2,
    content: 'labels.chatListContent2',
    date: 'Mar 27, 2020',
    active: false,
    noofmessage: null,
    message: 'notread',
    Icon: null,
  },
  {
    name: 'labels.chatListName3',
    Img: Patient3,
    content: 'labels.chatListContent3',
    date: '12:15 PM',
    active: true,
    noofmessage: 2,
    message: 'notread',
    Icon: null,
  },
  {
    name: 'labels.chatListName4',
    Img: Patient4,
    content: 'labels.chatListContent4',
    date: '09:25 AM',
    active: false,
    noofmessage: null,
    message: 'notread',
    Icon: SmileIcon,
  },
];

//dashboard
export const menu = [
  { Img:KidneysIcon, name: "labels.urology" },
  { Img: BrainIcon, name: "labels.Neurology" },
  { Img: CardiologyIcon, name: "labels.Cardiology" },
  { Img: DentistIcon, name: "labels.Dentist" },
  { Img: KidneysIcon, name: "labels.urology" },
  { Img: BrainIcon, name: "labels.Neurology" },
  { Img: CardiologyIcon, name: "labels.Cardiology" },
  { Img: DentistIcon, name: "labels.Dentist" },
];

//invoice view
export const tableHead = ["labels.description", "labels.quantity", "labels.vat", "labels.total"];
export const tableTitle = ["labels.generalConsultation", '1', '$0', '$100'];
export const tableData = ["labels.videoCallBooking", '1', '$0', '$520'];

//pages
export const menuBarOptions = [
  { name: "labels.searchDoctor", screenName: screenName.SearchDoctor },
  { name: "labels.dashboard", screenName: screenName.DoctorDashBoard },
  { name: "labels.doctorProfile", screenName: screenName.DoctorProfile },
  { name: "labels.doctorScheduleTimings", screenName: screenName.ScheduleTimings },
  { name: "labels.favourites", screenName: screenName.FavouritesScreen },
  { name: "labels.profileSettings", screenName: screenName.ProfileSettings },
  { name: "labels.appointments", screenName: screenName.PatientAppointments },
  { name: "labels.patientProfileSettings", screenName: screenName.ProfileSettings },
  { name: "labels.patientProfile", screenName: screenName.PatientProfile },
  { name: "labels.patientDateTime", screenName: screenName.BookAppointment },
  { name: "labels.bookingSuccess", screenName: screenName.BookingSuccess },
  { name: "labels.invoices", screenName: screenName.InvoiceList },
  { name: "labels.invoiceView", screenName: screenName.InvoiceView },
  { name: "labels.chat", screenName: screenName.ChatList },
  { name: "labels.view", screenName: screenName.ChatView },
  { name: "labels.voiceCall", screenName: screenName.VoiceCall },
  { name: "labels.videoCall", screenName: screenName.VideoCall },
];

export const menuOptionsAuth = [
  { name: "labels.Login", screenName: screenName.SignInScreen },
  { name: "labels.register", screenName: screenName.SignUpScreen },
  { name: "labels.forgotPassword", screenName: screenName.ForgotPassword },
  { name: "labels.changePassword", screenName: screenName.ChangePassword },
];

//profile settings
export const profilesegments = [
  "labels.basicInfo",
  "labels.aboutMe",
  "labels.clinicInfo",
  "labels.contactDetails",
  "labels.pricingAndServices",
  "labels.educationAndExperience",
  "labels.awardsAndMemberships",
  "labels.registrations",
];

//search doctor
export const searchMenuOptions = [
  { Img: StarIcon, name: "labels.Rating" },
  { Img: StethoscopeIcon, name: "labels.Stethoscope" },
  { Img: PurseIcon, name: "labels.Purse" },
  { Img: StarIcon, name: "labels.Rating" },
  { Img: StethoscopeIcon, name: "labels.Stethoscope" },
  { Img: PurseIcon, name: "labels.Purse" },
];

//social media
export const socialMediaMenuOptions = [
  { Img: FacebookIcon1, name: 'labels.facebook' }, // Use translation key here
  { Img: TwitterIcon, name: 'labels.twitter' },   // Use translation key here
  { Img: GooglePlusIcon, name: 'labels.googlePlus' }, // Use translation key here
  { Img: LinkedinIcon, name: 'labels.linkedin' },   // Use translation key here
  { Img: InstagramIcon, name: 'labels.instagram' }  // Use translation key here
];

export const genderOptions = [
  { name: "labels.male", type: 'm', isSelected: false },
  { name: "labels.Fem", type: 'f', isSelected: false },
];

export const specialistOptions = [
  { name: "labels.urology", isSelected: false },
  { name: "labels.Cardiology", isSelected: false },
  { name: "labels.Dentist", isSelected: false },
  { name: "labels.Neurology", isSelected: false },
  { name: "labels.Orthologist", isSelected: false },
  { name: "labels.Gynaecology", isSelected: false },
];


export const dateFormats = {
  sender: 'YYYY-MM-DD',
  reciever: 'DD-MM-YYYY',
};


export const sidemenuDetails = [
  { name: "labels.dashboard", screenName: screenName.DashBoardScreen, iconName: "view-dashboard", iconsType: "CommunityIcons" },
  { name: "labels.appointments", screenName: screenName.PatientAppointments, iconName: "date-range", iconsType: "MaterialIcons" },
  { name: "labels.myPatients", screenName: screenName.MyPatient, iconName: "person", iconsType: "IonicIcons" },
  { name: "labels.scheduleTimings", screenName: screenName.ScheduleTimings, iconName: "access-time", iconsType: "MaterialIcons" },
  { name: "labels.invoices", screenName: screenName.InvoiceList, iconName: "insert-drive-file", iconsType: "MaterialIcons" },
  { name: "labels.pages", screenName: screenName.Pages, iconName: "pages", iconsType: "MaterialIcons" },
  { name: "labels.message", screenName: screenName.ChatList, iconName: "message", iconsType: "MaterialIcons" },
  { name: "labels.profileSettings", screenName: screenName.ProfileSettings, iconName: "settings", iconsType: "MaterialIcons" },
  { name: "labels.socialMedia", screenName: screenName.SocialMedia, iconName: "share", iconsType: "MaterialIcons" },
  { name: "labels.changePassword", screenName: screenName.ChangePassword, iconName: "lock-open", iconsType: "MaterialIcons" },
  { name: "labels.languageSettings", screenName: screenName.LanguageSettings, iconName: "settings", iconsType: "MaterialIcons" },

]

//schedule timing
export const timeSlotStart = [
  { label: '12:00 am', value: '1' },
  { label: '12:30 am', value: '2' },
  { label: '01:00 am', value: '3' },
  { label: '01:30 am', value: '4' },
]

export const timeSlotEnd = [
  { label: '12:00 am', value: '1' },
  { label: '12:30 am', value: '2' },
  { label: '01:00 am', value: '3' },
  { label: '01:30 am', value: '4' },
];
