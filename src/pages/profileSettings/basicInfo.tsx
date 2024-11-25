import moment from 'moment';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import * as ImagePicker from 'react-native-image-picker';
import LanguageCheck from '../../Language Settings/LanguageCheck';
import { flex075, flexRow, mt15, pb10, pl10, pr10 } from '../../common/commonStyles';
import {
  H14fontRegularWhite,
  H30fontRegularLightBlack2,
  H30fontRegularLightRed,
  H8fontMediumLightBlack,
} from '../../components/commonText';
import { CardSurface, CommonInput } from '../../components/commonViews';
import { DatePicker } from '../../components/dateAndTimePicker';
import { CalendarIcon, Doctor2, PlaceholderIcon } from '../../components/svgIcons';
import { colors } from '../../utils/colors';
import { data } from '../../utils/constant';
import { DevWidth } from '../../utils/device';
import { fontFamily } from '../../utils/fontFamily';



interface Props { }
const BasicInfo: React.FC<Props> = ({ }): JSX.Element => {
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState('Male');
  const [selectedImage, setSelectedImage] = useState<any>();
  const [fromDate, setFromdate] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [currentPicker, setCurrentPicker] = useState('');
  const [toDate, setTodate] = useState('');
  const { t } = useTranslation();
  const isRTL = LanguageCheck(); 

  const screenWidth = Dimensions.get('window').width;
  const dynamicRightPosition = screenWidth >= 350 ? 125 : 10; 
  const today = moment(new Date()).format('DD-MM-YYYY');

  const cameraOpt = () => {
    launchCamera();
  };
  const launchCamera = () => {
    try {
      let options: ImagePicker.CameraOptions = {
        includeBase64: false,
        quality: 0.3,
        mediaType: 'photo',
      };
      ImagePicker.launchCamera(options, response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else {
          if (response && response.assets) {
            const file = {
              name: response.assets[0].fileName,
              uri: response.assets[0].uri,
              type: response.assets[0].type,
              size: response.assets[0].fileSize,
            };
            setSelectedImage(file);
          }
        }
      });
    } catch (error) { }
  };

  const datePickerField = (label: string, value: string, type: string) => {
    return (
      <View>
        <H30fontRegularLightBlack2 style={[mt15,{textAlign:isRTL?'right':'left'}]}>
          {label}
        </H30fontRegularLightBlack2>
        <TouchableOpacity
          onPress={() => {
            setShowDatePicker(true);
            setCurrentPicker(type);
          }}
          style={[styles.datePickerStyle, { alignItems: isRTL ? 'flex-start' : 'flex-end' }]}  >
          <CalendarIcon />
        </TouchableOpacity>
      </View>
    );
  };

const textBoxStyle = (label: string, isisRTL: boolean) => {
    if (isisRTL) {
      return (
        <View style={pb10}>
          <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
            <H30fontRegularLightRed style={{ marginRight: 5 }}>{'\u200F*'}</H30fontRegularLightRed>
            <H30fontRegularLightBlack2>{label}</H30fontRegularLightBlack2>
          </View>
          <CommonInput style={{ marginTop: 0, height: 35 }}>
            <TextInput style={[{ textAlign: 'right',alignItems:'center',flex:1},isRTL?pr10:pl10]} />
          </CommonInput>
        </View>
      );
    } else {
      return (
        <View style={pb10}>
          <View style={[flexRow]}>
            <H30fontRegularLightBlack2>{label} </H30fontRegularLightBlack2>
            <H30fontRegularLightRed>{'*'}</H30fontRegularLightRed>
          </View>
          <CommonInput style={{ marginTop: 0, height: 35 }}>
            <TextInput style={[isRTL?pr10:pl10,{alignItems:'center',flex:1}]} />
          </CommonInput>
        </View>
      );
    }
  };
  const translatedString = t('labels.aboutMe');
  console.log(translatedString);
  const translatedData = data.map(item => ({
    label: t(item.label),
    value: item.value,
  }));
  return (
   

  
    <CardSurface style={styles.containerStyle}>
      <View style={styles.bodyStyle}>
        <H8fontMediumLightBlack style = {{textAlign:isRTL?'right':'left'}}>
          {t('labels.basicInformation')}
        </H8fontMediumLightBlack>
        <View style={styles.bodyContainerStyle}>
          <View style={styles.profileImageStyle}>
            <Doctor2 height={'100%'} width={'150%'} />
          </View>
          <TouchableOpacity
            onPress={() => {
              cameraOpt();
            }}
            style={styles.profileImage}>
            <PlaceholderIcon height={13} width={13} />
          </TouchableOpacity>
        </View>
        {textBoxStyle(t('labels.username'), isRTL)}
        {textBoxStyle(t('labels.email'),isRTL)}
        {textBoxStyle(t('labels.firstName'),isRTL)}
        {textBoxStyle(t('labels.lastName'), isRTL)}
        {textBoxStyle(t('labels.phoneNo'), isRTL)}
        <View style={{ flexDirection:'row', justifyContent: 'space-between' }}>
          <View>
            <Text style={{textAlign:isRTL?'right':'left'}}>{t('labels.gender')}</Text>
            <View style={styles.dropDownStyle}>
              <Dropdown
                style={[
                  styles.dropdown,
                  isFocus && { backgroundColor: '#FFF' },
                ]}
                fontFamily={fontFamily.fontRegular}
                iconStyle={[isRTL ? { width: 20, height: 20,right:dynamicRightPosition } : styles.iconStyle]}
                data={translatedData}
                labelField="label"
                placeholder={t('labels.male')}
                placeholderStyle={{ fontSize: 13,textAlign:isRTL?'right':'left' }}
                valueField="value"
             
                dropdownPosition='top'
                itemTextStyle={{textAlign:isRTL?'right':'left'}}
                
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setValue(item.value);
                  setIsFocus(false);
                }}
                value={value}
              />
            </View>
          </View>
          {/* <View>
            <H30fontRegularLightBlack2 style={[pl20,{textAlign:isRTL?'right':'left'}]}>
              {t('labels.fromBasic')}
            </H30fontRegularLightBlack2>
            <View style={styles.fromStyle}>
              <View style={{ padding: 7, alignItems: isRTL? 'flex-start' : 'flex-end' }}>
                <CalendarIcon height={18} width={16} />
              </View>
            </View>
          </View> */}
          <View style={[flex075, {bottom : 10}]}>
            {datePickerField(t('labels.fromBasic'), fromDate, 'from')}
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.nextButtonStyle}>
        <H14fontRegularWhite>{t('labels.next')}</H14fontRegularWhite>
      </TouchableOpacity>
      {showDatePicker ? (
        <DatePicker
          date={today}
          selectedDate={(date: string) => {
            currentPicker == 'from' ? setFromdate(date) : setTodate(date);
            setShowDatePicker(false);
            setCurrentPicker('');
          }}
        />
      ) : null}
    </CardSurface>
    
  );
};
export default BasicInfo;
const styles = StyleSheet.create({
  dropdown: {
    paddingLeft: 10,
    backgroundColor: '#FFF',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  datePickerStyle: {
    height: 35,
    borderColor: '#CFCFCF',
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 10,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  containerStyle: { 
    marginHorizontal: 10 ,
    backgroundColor:colors.white
  },
  bodyStyle: {
     paddingHorizontal: 10, 
     paddingTop: 10
     },
  bodyContainerStyle: {
    borderRadius: 50,
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginVertical: 10
  },
  profileImageUploadStyle: {
     borderRadius: 50,
      width: 100,
       height: 100
       },
  profileImage: {
    width: 30,
    height: 30,
    backgroundColor: 'white',
    position: 'absolute',
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
  },
  profileImageStyle: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: '#f7f7f7',
    overflow: 'hidden',
  },
  dropDownStyle: {
    width: DevWidth / 2.7,
    borderColor: '#CFCFCF',
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 10,
    backgroundColor: '#CFCFCF',
  },
  fromStyle: {
    height: 35,
    width: DevWidth / 2.8,
    borderColor: '#CFCFCF',
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 20,
  },
  calenderIconStyle: {
    height: 18, 
    width: 16 
  },
  nextButtonStyle: {
    height: 45,
    backgroundColor: '#1B5A90',
    marginVertical: 15,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10
  },
});

