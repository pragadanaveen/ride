import moment from 'moment';
import React, { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import AntDesignIcon from 'react-native-vector-icons/FontAwesome';
import CheckBox from 'react-native-vector-icons/MaterialIcons';

import { useTranslation } from 'react-i18next';
import LanguageCheck from '../Language Settings/LanguageCheck';
import {
  alignItemsCenter,
  alignItemsRight,
  mt0,
  ph15,
  pl10,
  pl13,
  pl18,
  pl5,
  pr10,
  pr13,
  pr18,
  pr5,
  pv15,
  spaceBetween,
} from '../common/commonStyles';
import { colors } from '../utils/colors';
import { genderOptions, specialistOptions } from '../utils/constant';
import { DevWidth } from '../utils/device';
import { SmallButtonSuccess } from './commonButton';
import {
  H15fontMediumBlack,
  H7fontRegularWhite,
  H8fontRegularBlack,
  H8fontRegularWhite,
} from './commonText';
import { CardSurface, CommonLineView, RowView } from './commonViews';
import { DatePicker } from './dateAndTimePicker';
import { CalendarIcon, Doctofemr, Maledoc } from './svgIcons';





interface DoctorFilterProps {
  modalVisible: boolean;
  modalClose: CallableFunction;
}
interface GenderOptionsProps {
  name: string;
  type: string;
  isSelected: boolean;
}

interface SpecialistOptionsProps {
  name: string;
  isSelected: boolean;
}
type dateTypes = 'dob' | 'hide';

const DoctorFilter = (props: DoctorFilterProps) => {
  const today = moment(new Date()).format('DD-MM-YYYY');

  const [genderList, setGenderList] = useState<Array<GenderOptionsProps>>([
    ...genderOptions,
  ]);

  const [specialistList, setSpecialistList] = useState<
    Array<SpecialistOptionsProps>
  >([...specialistOptions]);

  const [showDatePicker, setShowDatePicker] = useState<dateTypes>('hide');
  const [selectedDate, setSelectedDate] = useState<string>(today);
  const { t, i18n } = useTranslation();
const isRTL = LanguageCheck();  
  const closeModalView = () => {

    return (
      <>
        <TouchableOpacity
          style={[alignItemsRight, pv15, ph15]}
          onPress={() => props.modalClose(false)}>
          <AntDesignIcon name="close" size={15} color={colors.black} />
        </TouchableOpacity>
        <CommonLineView />
      </>
    );
  };

  const filterTitleAndClearView = () => {

    return (
      <>
        <RowView style={[styles.filterTitleStyle, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
          <H7fontRegularWhite>{t("labels.Filter")}</H7fontRegularWhite>
          <TouchableOpacity
            onPress={() => {
              var g = [];
              var s = [];

              genderList.map(opt => {
                opt.isSelected = false;
                g.push(opt);
              });

              specialistList.map(spl => {
                spl.isSelected = false;
                s.push(spl);
              });

              setGenderList([...g]);
              setSpecialistList([...s]);
              setSelectedDate(today);
            }}
            style={styles.clearButtonStyles}>
            <H8fontRegularWhite>{t("labels.clear")}</H8fontRegularWhite>
          </TouchableOpacity>
        </RowView>
      </>
    );
  };

  const datePickerView = () => {
    return (
      <>
        <H15fontMediumBlack>{t("labels.date")}</H15fontMediumBlack>
        <TouchableOpacity
          style={[styles.datePickerButtonStyle, { flexDirection: isRTL ? 'row' : 'row-reverse' }]}
          onPress={() => {
            setShowDatePicker('dob');
          }}>
          <CardSurface style={styles.calenderIconStyle}>
            <CalendarIcon height={18} width={16} />
          </CardSurface>
        </TouchableOpacity>
      </>
    );
  };

  const genderSelection = () => {
    return (
      <>
        <H15fontMediumBlack>{t('labels.gender')}</H15fontMediumBlack>
        <RowView style={[{ marginBottom: 20 }, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
          {genderList.map((opt, index) => {
            return (
              <View key = {index} style={[styles.genderBtnStyle, { flexDirection: isRTL ? 'row-reverse' : 'row' }, isRTL ? pl10 : pr10, isRTL ? pr18 : pl18]}>
                <View style={{ paddingTop: 10 }}>
                  {opt.type === 'm' ?
                    <Maledoc height={48} width={37} /> : <Doctofemr height={48} width={37} />
                  }
                </View>

                <RowView style={[alignItemsCenter, { flexDirection: isRTL ? 'row-reverse' : 'row' }]} >
                  <View style={{ right: 10 }}>
                    <H8fontRegularBlack>{t(opt.name)}</H8fontRegularBlack>
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      genderList[index].isSelected = !opt.isSelected;
                      setGenderList([...genderList]);
                    }}>
                    {genderList[index].isSelected = !opt.isSelected ?
                      <CheckBox name="done" size={20} color={colors.black} />
                      :
                      <View style={{ height: 20, width: 20, borderRadius: 20, borderWidth: 1, borderColor: colors.borderTextColor }} />
                    }
                  </TouchableOpacity>
                </RowView>
              </View>
            );
          })}
        </RowView>
      </>
    );
  };

  const specialistSelection = () => {
    return (
      <>
        <H15fontMediumBlack>{t("labels.specialist")}</H15fontMediumBlack>
        <FlatList
          columnWrapperStyle={spaceBetween}
          numColumns={2}
          data={specialistList}
          renderItem={({ item, index }) => {
            const List = t(item.name)
            console.log(List)

            return (
              <View style={[styles.specialistBtnStyle,{flexDirection:isRTL?'row-reverse':'row'},isRTL?pl10:pr10,isRTL?pr13:pl13]}>
                <RowView style={[alignItemsCenter,{flexDirection:isRTL?'row-reverse':'row'}]}>
                  <TouchableOpacity style={isRTL?pl5:pr5}
                    onPress={() => {
                      specialistList[index].isSelected = !item.isSelected;
                      setSpecialistList([...specialistList]);
                    }}>
                    {item.isSelected ? (
                      <CheckBox name="done" size={20} color={colors.black} />
                    ) : (
                      <View style={{ height: 20, width: 20, borderRadius: 20, borderWidth: 1, borderColor: colors.borderTextColor }} />
                    )}
                  </TouchableOpacity>
                  <H8fontRegularBlack>{t(item.name)}</H8fontRegularBlack>
                </RowView>
              </View>
            );
          }}
        />
      </>
    );
  };

  return (
    <>
      <Modal isVisible={props.modalVisible} onBackdropPress={() => { }}>
        <View style={styles.container}>
          {closeModalView()}
          <View style={{ padding: 12 }}>
            {filterTitleAndClearView()}
            {datePickerView()}
            {genderSelection()}
            {specialistSelection()}
          </View>
          <View style={[mt0]}>
            <SmallButtonSuccess
              style={{ borderBottomEndRadius: 0, borderBottomStartRadius: 0, borderTopStartRadius: 50, borderTopEndRadius: 50, width: 220 }}
              disabled={false}
              funCallback={() => props.modalClose(false)}
              label={t("labels.applyFilter")}
            />
          </View>
        </View>
      </Modal>

      {showDatePicker != 'hide' ? (
        <DatePicker
          date={selectedDate ? selectedDate : today}
          selectedDate={(selectedDate: string) => {
            console.log(selectedDate);
            setSelectedDate(selectedDate);
            setShowDatePicker('hide');
          }}
        />
      ) : null}
    </>
  );
};

export default DoctorFilter;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 5,
  },
  filterTitleStyle: {
    height: 50,
    backgroundColor: colors.facebook,
    borderRadius: 30,
    marginBottom: 20,
    alignItems: 'center',
    paddingLeft: 18,
    paddingRight: 8
  },
  clearButtonStyles: {
    height: 35,
    width: 81,
    backgroundColor: '#FF474D',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  datePickerButtonStyle: {
    alignItems: 'center',
    height: 56,
    borderColor: colors.borderTextColor,
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 5,
    marginTop: 5,
    marginBottom: 20
  },
  calenderIconStyle: {
    borderColor: colors.borderTextColor,
    borderWidth: 0.5,
    borderRadius: 25,
    height: 42,
    width: 42,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center'
  },
  calenderImageStyle: { height: 18, width: 16, alignSelf: 'center' },
  genderBtnStyle: {
    height: 60,
    borderColor: colors.borderTextColor,
    borderWidth: 1,
    borderRadius: 30,
    marginVertical: 10,
    width: DevWidth / 2.55,
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  specialistBtnStyle: {
    height: 53,
    borderColor: colors.borderTextColor,
    borderWidth: 1,
    borderRadius: 30,
    marginVertical: 10,
    width: DevWidth / 2.55,
   
    alignItems: 'center',
    justifyContent: 'space-between',
    // paddingRight: 10,
    // paddingLeft: 13
  },
  genderImageStyle: { height: 35, width: 25 },
});
