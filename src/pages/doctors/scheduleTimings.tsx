import { Route } from '@react-navigation/native';
import React, { Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  FlatList,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import * as Progress from 'react-native-progress';
import DeleteIcon from 'react-native-vector-icons/AntDesign';
import { default as AddIcon, default as EditIcon } from 'react-native-vector-icons/MaterialIcons';
import LanguageCheck from '../../Language Settings/LanguageCheck';
import { NavBarPatient } from '../../common/commonComponents';
import { pl10, pr10 } from '../../common/commonStyles';
import {
  H14fontRegularWhite,
  H15fontMediumBlack,
  H8fontMediumBlack,
  H9fontMediumBlack,
  H9fontRegularGray,
} from '../../components/commonText';
import {
  CardSurface,
  MainContainer,
  RowView,
} from '../../components/commonViews';
import { CalendarIcon, FeatherIcon } from '../../components/svgIcons';
import { GeneralProps } from '../../interfaces/generalProps';
import { colors } from '../../utils/colors';
import { days, timeSlotEnd, timeSlotStart } from '../../utils/constant';
import { DevHeight, DevWidth } from '../../utils/device';
import { fontFamily } from '../../utils/fontFamily';

interface Props extends GeneralProps {
  route: Route<string, object | undefined>;
}

const ScheduleTimings: React.FC<Props> = ({ navigation, route }): JSX.Element => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState([]);
  const [isFocus, setIsFocus] = useState(false);
  const [timeslotend, setTimeEnd] = useState('-');
  const [timeslotstart, setTimeStart] = useState('-');
  const { t, i18n } = useTranslation();
  const isRTL = LanguageCheck();
  const [time, setTime] = useState([{ starttime: '-', endtime: '-' }]);

  const [modalHeight, setModalHeight] = useState(200);
  const [scrollHeight, setScrollHeight] = useState(DevHeight / 3.2);

  const addDay = val => {
    if (selectedDay.length == 0) {
      setSelectedDay([val]);
    } else if (selectedDay.some(v => v == val)) {
      setSelectedDay(selectedDay.filter(item => item !== val));
    } else {
      setSelectedDay([...selectedDay, val]);
    }
  };

  const addTime = () => {
    let arr = { starttime: '-', endtime: '-' };
    setTime([...time, arr]);
    setModalHeight(modalHeight + 61);
    setScrollHeight(scrollHeight - 31);
  };

  const removeItem = index => {
    setModalHeight(modalHeight - 61);
    time.splice(index, 1);
    setScrollHeight(scrollHeight + 31);
  };
  const circleRadius = 30;
  const circleStrokeWidth = 4;
  const offBlueColor = '#1B5A90';

  return (
    <Fragment>
      <MainContainer>
        <View >
          <NavBarPatient title={t('labels.doctorScheduleTimings')} />
          <View
            style={{
              height: 100,
              backgroundColor: 'white',
              padding: 20,
              flexDirection: isRTL ? 'row-reverse' : 'row'
            }}>
            <CardSurface
              style={{
                borderRadius: 40,
                height: 60,
                width: 60,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
              <CalendarIcon height={30} width={30} />
            </CardSurface>
            <RowView style={{ flex: 1, flexDirection: isRTL ? 'row-reverse' : 'row' }}>
              <View style={[{ paddingTop: 5 }, isRTL ? pr10 : pl10]}>
                <H8fontMediumBlack>{t('labels.scheduleTimings')}</H8fontMediumBlack>
                <H9fontRegularGray>{t('labels.timingDuration')}</H9fontRegularGray>
              </View>







              <View
                style={{
                  height: 60,
                  width: 60,
                  backgroundColor: 'white',
                  borderRadius: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  elevation: 8,
                }}>



                <Progress.Circle
                  size={60}

                  borderWidth={0}

                  textStyle={{
                    color: '#000000',
                    fontSize: 11,
                    fontFamily: fontFamily.fontMedium,
                    textAlign: 'center',
                    lineHeight: 12,
                  }}
                  thickness={4}
                  unfilledColor='#ffff'
                  color="#1B5A90"
                  progress={0.4}
                  fill={'#ffff'}
                  showsText={true}
                  formatText={progress => '30' + '\n' + t("labels.mins")}
                />
              </View>

            </RowView>
          </View>
          <H15fontMediumBlack
            style={{ paddingHorizontal: 16, paddingTop: 20, paddingBottom: 10, textAlign: isRTL ? 'right' : 'left' }}>
            {t('labels.selectDay')}
          </H15fontMediumBlack>
          <View style={{ marginHorizontal: 16 }}>
            {isRTL ? <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={days.slice().reverse()}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  onPress={() => addDay(item.name)}
                  style={{
                    marginRight: 10,
                    width: 45,
                    height: 85,
                    borderWidth: 1,
                    borderRadius: 50,
                    borderColor: selectedDay.some(v => v == item.name)
                      ? '#0dcaf0'
                      : colors.lightGray,
                    backgroundColor: selectedDay.some(v => v == item.name)
                      ? '#0CE0FF'
                      : colors.white,
                    alignItems: 'center',
                  }}>
                  <H9fontRegularGray
                    style={{
                      color: selectedDay.some(v => v == item.name)
                        ? '#fff'
                        : colors.lightGray,
                      paddingTop: 35,
                    }}>
                    {t(item.name)}
                  </H9fontRegularGray>
                  <View style={{ paddingTop: 5 }}>
                    <FeatherIcon fill={"#fff"} />
                  </View>
                </TouchableOpacity>
              )}
            /> :
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={days}
                renderItem={({ item, index }) => (
                  <TouchableOpacity
                    onPress={() => addDay(item.name)}
                    style={{
                      marginRight: 10,
                      width: 45,
                      height: 85,
                      borderWidth: 1,
                      borderRadius: 50,
                      borderColor: selectedDay.some(v => v == item.name)
                        ? '#0dcaf0'
                        : colors.lightGray,
                      backgroundColor: selectedDay.some(v => v == item.name)
                        ? '#0CE0FF'
                        : colors.white,
                      alignItems: 'center',
                    }}>
                    <H9fontRegularGray
                      style={{
                        color: selectedDay.some(v => v == item.name)
                          ? '#fff'
                          : colors.lightGray,
                        paddingTop: 35,
                      }}>
                      {t(item.name)}
                    </H9fontRegularGray>
                    <View style={{ paddingTop: 5 }}>
                      <FeatherIcon fill={"#fff"} />
                    </View>
                  </TouchableOpacity>
                )}
              />}

          </View>
          <RowView
            style={{

              paddingHorizontal: 16,
              paddingTop: 25,
              paddingBottom: 10,
              flexDirection: isRTL ? 'row-reverse' : 'row'
            }}>
            <H15fontMediumBlack>{t("labels.timeSlotsMonday")}</H15fontMediumBlack>
            <TouchableOpacity
              onPress={() => setModalOpen(true)}
              style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
              <EditIcon
                name="edit"
                size={17}
                color={'black'}
                style={{ paddingRight: isRTL ? 0 : 3, paddingTop: 3, paddingLeft: isRTL ? 3 : 0 }}
              />
              <H15fontMediumBlack>{t('labels.edit')}</H15fontMediumBlack>
            </TouchableOpacity>
          </RowView>
          <View style={{ paddingBottom: 10, paddingHorizontal: 16, flexDirection: isRTL ? 'row-reverse' : 'row' }}>
            <FlatList
              numColumns={2}
              contentContainerStyle={{
                justifyContent: 'space-between',
                width: DevWidth / 1.07,
              }}
              data={[{}, {}, {}]}
              renderItem={({ item, index }) => (
                <View
                  style={{
                    marginRight: 10,
                    width: DevWidth / 2.3,
                    height: 40,
                    borderWidth: 1,
                    borderRadius: 50,
                    borderColor: colors.seaBlue,
                    backgroundColor: colors.white,
                    flexDirection: isRTL ? 'row-reverse' : 'row',
                    paddingHorizontal: 10,
                    marginBottom: 10,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <H9fontMediumBlack>{t('labels.eightToNine')}</H9fontMediumBlack>
                  <View
                    style={{
                      height: 11,
                      width: 11,
                      borderColor: '#FF2D58',
                      borderWidth: 1,
                      borderRadius: 12,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 5,
                        color: '#FF2D58',
                        fontFamily: fontFamily.fontBold,
                      }}>
                      X
                    </Text>
                  </View>
                </View>
              )}
            />
          </View>

          <RowView style={{ paddingHorizontal: 16, paddingBottom: 10, flexDirection: isRTL ? 'row-reverse' : 'row' }}>
            <H15fontMediumBlack>{t("labels.timeSlotThur")}</H15fontMediumBlack>
            <TouchableOpacity
              onPress={() => setModalOpen(true)}
              style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
              <EditIcon
                name="edit"
                size={17}
                color={'black'}
                style={{ paddingRight: isRTL ? 0 : 3, paddingTop: 3, paddingLeft: isRTL ? 3 : 0 }}
              />
              <H15fontMediumBlack>{t('labels.edit')}</H15fontMediumBlack>
            </TouchableOpacity>
          </RowView>
          <RowView style={{ paddingBottom: 10, paddingHorizontal: 16, flexDirection: isRTL ? 'row-reverse' : 'row' }}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              numColumns={2}
              contentContainerStyle={{


                width: DevWidth / 1.07,
                justifyContent: 'space-between',
                flexDirection: isRTL ? 'row-reverse' : 'row'
              }}
              data={[{}, {}]}
              renderItem={({ item, index }) => (
                <View
                  style={{
                    marginRight: 10,
                    width: DevWidth / 2.3,
                    height: 40,
                    borderWidth: 1,
                    borderRadius: 50,
                    borderColor: colors.seaBlue,
                    backgroundColor: colors.white,
                    flexDirection: isRTL ? 'row-reverse' : 'row',
                    paddingHorizontal: 10,
                    marginBottom: 10,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <H9fontMediumBlack>{t('labels.eightToNine')}</H9fontMediumBlack>
                  <View
                    style={{
                      height: 11,
                      width: 11,
                      borderColor: '#FF2D58',
                      borderWidth: 1,
                      borderRadius: 12,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{ fontSize: 5, color: '#FF2D58' }}>X</Text>
                  </View>
                </View>
              )}
            />
          </RowView>
        </View>

        <Modal visible={modalOpen} transparent={true} animationType={'fade'}>
          <ScrollView>
            <View
              style={{

                minHeight: DevHeight,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(100, 100, 100, 0.5)',
              }}>
              <View
                style={{
                  width: DevWidth / 1.1,
                  backgroundColor: '#fff',
                  paddingTop: 20,
                  borderRadius: 5,
                }}>
                <View
                  style={{
                    paddingHorizontal: 15,
                    flexDirection: isRTL ? 'row-reverse' : 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingBottom: 10,
                  }}>
                  <H15fontMediumBlack>{t('labels.editTimeSlots')}</H15fontMediumBlack>
                  <TouchableOpacity
                    onPress={() => setModalOpen(false)}
                    style={{
                      height: 17,
                      width: 17,
                      borderRadius: 17,
                      backgroundColor: '#A0A0A0',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{ color: '#fff', bottom: 3 }}>x</Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{ height: 1, backgroundColor: '#ced4da', width: DevWidth / 1.1 }}
                />

                <View style={{ padding: 15 }}>
                  <H9fontMediumBlack>{t('labels.startTime')}</H9fontMediumBlack>
                  <View style={styles.dropDownStyle}>
                    <Dropdown
                      placeholder='-'
                      style={[
                        styles.dropdown,
                        isFocus && { backgroundColor: '#fff' },
                      ]}
                      fontFamily={fontFamily.fontRegular}
                      iconStyle={styles.iconStyle}
                      data={timeSlotStart}
                      labelField="label"
                      valueField="value"
                      onFocus={() => setIsFocus(true)}
                      onBlur={() => setIsFocus(false)}
                      onChange={item => {
                        setTimeStart(item.value);
                        setIsFocus(false);
                      }}
                      value={timeslotstart}
                    />
                  </View>
                  <H9fontMediumBlack>{t('labels.endTime')}</H9fontMediumBlack>
                  <View style={styles.dropDownStyle}>
                    <Dropdown
                      placeholder='-'
                      style={[
                        styles.dropdown,
                        isFocus && { backgroundColor: '#fff' },
                      ]}
                      fontFamily={fontFamily.fontRegular}
                      iconStyle={styles.iconStyle}
                      data={timeSlotEnd}
                      labelField="label"
                      valueField="value"
                      onFocus={() => setIsFocus(true)}
                      onBlur={() => setIsFocus(false)}
                      onChange={item => {
                        setTimeEnd(item.value);
                        setIsFocus(false);
                      }}
                      value={timeslotend}
                    />
                  </View>
                </View>

                <View style={{ paddingHorizontal: 15 }}>
                  {time.map((item, index) => (
                    <View key={index}>
                      <H9fontMediumBlack>{t('labels.startTime')}</H9fontMediumBlack>
                      <View style={styles.dropDownStyle}>
                        <Dropdown
                          placeholder='-'
                          style={[
                            styles.dropdown,
                            isFocus && { backgroundColor: '#fff' },
                          ]}
                          fontFamily={fontFamily.fontRegular}
                          iconStyle={styles.iconStyle}
                          data={timeSlotEnd}
                          labelField="label"
                          valueField="value"
                          onFocus={() => setIsFocus(true)}
                          onBlur={() => setIsFocus(false)}
                          onChange={(selectedItem) => {
                            // Update the 'starttime' property of the item in 'time'
                            const updatedTime = [...time];
                            updatedTime[index].starttime = selectedItem;
                            setTime(updatedTime); // Assuming you have a 'setTime' function
                          }}
                          value={item.starttime}
                        />
                      </View>
                      <H9fontMediumBlack>{t('labels.endTime')}</H9fontMediumBlack>
                      <View style={styles.dropDownStyle}>
                        <Dropdown
                          placeholder='-'
                          style={[
                            styles.dropdown,
                            isFocus && { backgroundColor: '#fff' },
                          ]}
                          fontFamily={fontFamily.fontRegular}
                          iconStyle={styles.iconStyle}
                          data={timeSlotEnd}
                          labelField="label"
                          valueField="value"
                          onFocus={() => setIsFocus(true)}
                          onBlur={() => setIsFocus(false)}
                          onChange={(selectedItem) => {
                            // Update the 'endtime' property of the item in 'time'
                            const updatedTime = [...time];
                            updatedTime[index].endtime = selectedItem;
                            setTime(updatedTime); // Assuming you have a 'setTime' function
                          }}
                          value={item.endtime}
                        />
                      </View>
                      <TouchableOpacity
                        onPress={() => removeItem(index)}
                        style={{
                          height: 38,
                          backgroundColor: '#dc3545',
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: 5,
                          marginBottom: 15,
                        }}>
                        <DeleteIcon name="delete" size={14} color={'white'} />
                      </TouchableOpacity>
                    </View>
                  ))}
                </View>



                <TouchableOpacity
                  onPress={() => addTime()}
                  style={{ flexDirection: isRTL ? 'row-reverse' : 'row', paddingHorizontal: 15, paddingBottom: 15 }}>
                  <AddIcon
                    name="add-circle"
                    size={18}
                    color={'#777'}
                    style={{ paddingRight: 3 }}
                  />
                  <H9fontRegularGray>{t('labels.addMore')}</H9fontRegularGray>
                </TouchableOpacity>
                <View style={{ alignItems: 'center' }}>
                  <TouchableOpacity
                    onPress={() => setModalOpen(false)}
                    style={{
                      padding: 10,
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: '#0d6efd',
                      borderRadius: 5,
                      marginBottom: 20
                    }}>
                    <H14fontRegularWhite>{t('labels.saveChanges')}</H14fontRegularWhite>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </Modal>
      </MainContainer>
    </Fragment>
  );
};

export default ScheduleTimings;
const styles = StyleSheet.create({
  dropDownStyle: {
    height: 40,
    borderColor: '#CFCFCF',
    borderRadius: 3,
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  dropdown: {
    height: 38,
    paddingLeft: 10,
    paddingRight: 5,
    backgroundColor: '#fff',
  },
  iconStyle: {
    width: 0,
    height: 0,
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: '#1B5A90', // Outer circle color (off-blue)
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'black', // Inner circle color (black)
  },
});