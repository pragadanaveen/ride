import moment from 'moment';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import LanguageCheck from '../../Language Settings/LanguageCheck';
import {
  flex048,
  flexRow,
  mh10,
  mt10,
  mt15,
  mv15,
  ph15,
  pl10,
  pr10,
  spaceBetween,
} from '../../common/commonStyles';
import {
  H14fontRegularWhite,
  H30fontRegularLightBlack2,
  H8fontMediumBlack,
} from '../../components/commonText';
import {
  CardSurface,
  CommonInput,
  CommonLineDotted,
  CommonLineDottedInner,
} from '../../components/commonViews';
import { DatePicker } from '../../components/dateAndTimePicker';
import { CalendarIcon } from '../../components/svgIcons';
import { colors } from '../../utils/colors';

interface Props { }
const Education: React.FC<Props> = ({ }): JSX.Element => {
  const { t } = useTranslation();
  const isRTL = LanguageCheck();
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [currentPicker, setCurrentPicker] = useState('');
  const [fromDate, setFromdate] = useState('');
  const [toDate, setTodate] = useState('');

  const textBoxField = (label: string) => {
    return (
      <View>
        <H30fontRegularLightBlack2 style={[mt15,{textAlign:isRTL?'right':'left'}]}>
          {label}
        </H30fontRegularLightBlack2>
        <CommonInput style={{ height: 35 }}>
          <TextInput
            placeholderTextColor='black'
            style={[styles.inputStyle, { textAlign: isRTL ? 'right' : 'left' }, isRTL ? pr10 : pl10]} />
        </CommonInput>
      </View>
    );
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
  const today = moment(new Date()).format('DD-MM-YYYY');
  return (
    <CardSurface style={[mh10, ph15,styles.container]}>
      <H8fontMediumBlack style={[mt10,{textAlign:isRTL?'right':'left'}]}>{t('labels.education')}</H8fontMediumBlack>
      <View>
        <View style={[flexRow, spaceBetween]}>
          <View style={flex048}>{textBoxField(t('labels.degree'))}</View>
          <View style={flex048}>{textBoxField(t('labels.yearOfCompletion'))}</View>
        </View>
        {textBoxField(t('labels.collegeInstitute'))}
      </View>
      <View style={{ alignItems: isRTL ? 'flex-end' : 'flex-start' }}>
        <TouchableOpacity onPress={() => { }} style={styles.addIconsStyle}>
          <Icon name="plus" size={22} color={'white'} />
        </TouchableOpacity>
      </View>
      <CommonLineDotted style={mv15}>
        <CommonLineDottedInner />
      </CommonLineDotted>
      <H8fontMediumBlack style={{textAlign:isRTL?'right':'left'}}>{t('labels.Experience')}</H8fontMediumBlack>
      <View>
        {textBoxField(t('labels.hospitalName'))}
        <View style={[spaceBetween, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
          <View style={flex048}>
            {datePickerField(t('labels.fromBasic'), fromDate, 'from')}
          </View>
          <View style={flex048}>{datePickerField(t('labels.to'), toDate, 'to')}</View>
        </View>
      </View>
      <View style={{ alignItems: isRTL ? 'flex-end' : 'flex-start' }}>
        <TouchableOpacity onPress={() => { }} style={styles.addIconsStyle}>
          <Icon name="plus" size={22} color={'white'} />
        </TouchableOpacity>
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
export default Education;

const styles = StyleSheet.create({
  addIconsStyle: {
    height: 24,
    width: 24,
    borderRadius: 15,
    backgroundColor: '#0dcaf0',
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center'
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
  nextButtonStyle: {
    height: 45,
    backgroundColor: '#1B5A90',
    marginVertical: 10,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  inputStyle: {
    width: '100%',
    alignItems:'center',
    flex:1
  },
  container: {
    backgroundColor:colors.white
  },
});

