import moment from 'moment';
import React, { Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import LanguageCheck from '../Language Settings/LanguageCheck';
import {
  alignItemsCenter,
  mr25,
  pb10,
  pl5,
  pr5
} from '../common/commonStyles';
import {
  H15fontMediumBlack,
  H8fontMediumBlack,
  H8fontMediumWhite,
  H9fontRegularGray,
} from '../components/commonText';
import { MainContainer, RowView } from '../components/commonViews';
import { LeftArrowIcon, RightArrowIcon, TimeIcon } from '../components/svgIcons';
import { colors } from '../utils/colors';
import { dayOptions } from '../utils/constant';
import { DevWidth } from '../utils/device';

interface Props { }

const TimeAndDate: React.FC<Props> = ({ }): JSX.Element => {
  const { t, i18n } = useTranslation();
  const isRTL = LanguageCheck(); const [selectTime, setSelectTime] = useState(0);
  const [selectedDay, setSelectedDay] = useState('Th');
  const currentMonth = moment().format('MMMM'); // Get the current month in English
  const currentYear = moment().format('YYYY');
  return (
    <Fragment>
      <MainContainer>

        <View style={[styles.container, { flexDirection: 'row-reverse' }]}>
          <TouchableOpacity>
            {isRTL ?
              <LeftArrowIcon height={25} width={25} fill="#000" style={{ transform: [{ rotate: '180deg' }] }} />
              :
              <LeftArrowIcon height={25} width={25} fill="#000" />
            }

          </TouchableOpacity>
          <H15fontMediumBlack>
            {t(`common.months.${currentMonth}`, { defaultValue: currentMonth })} {currentYear}
          </H15fontMediumBlack>
          <TouchableOpacity>
            {isRTL ?
              <RightArrowIcon height={25} width={25} fill="#000" style={{ transform: [{ rotate: '180deg' }] }} />
              :
              <RightArrowIcon height={25} width={25} fill="#000" />
            }
          </TouchableOpacity>
        </View>
          <View style={{ flexDirection: isRTL ? 'row-reverse' : 'row', marginLeft : isRTL ? -10 : 12}}>
            {dayOptions.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setSelectedDay(t(item.name))}
                style={[alignItemsCenter, mr25, pb10]}>
                <View
                  style={[
                    styles.dayBtnStyle,
                    {
                      backgroundColor:
                        selectedDay == (t(item.name)) ? colors.blue : colors.ligtBlue,
                    },
                  ]}>
                  <H8fontMediumWhite>{item.no}</H8fontMediumWhite>
                </View>
                <H8fontMediumBlack>{t(item.name)}</H8fontMediumBlack>
              </TouchableOpacity>
            ))}
          </View>
        <View style={{ flex: 1, flexDirection: isRTL ? 'row-reverse' : 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
          {[{}, {}, {}, {}, {}, {}].map((item, index) => {
            let color = index === selectTime ? colors.white : colors.black;
            let backgroundColor = index === selectTime ? colors.ligtBlue : colors.white;

            return (
              <TouchableOpacity
                key={index}
                onPress={() => setSelectTime(index)}
                style={[
                  styles.timingCardContainerStyle,
                  {
                    backgroundColor: backgroundColor,
                  },
                ]}
              >
                <RowView
                  style={[
                    styles.timingRowStyle,
                    {
                      borderBottomColor: index === selectTime ? colors.white : colors.imageGray,
                      flexDirection: isRTL ? 'row-reverse' : 'row',
                    },
                  ]}
                >
                  <H8fontMediumBlack style={{ color: color }}>
                    {t("labels.timings")}
                  </H8fontMediumBlack>
                  <TimeIcon height={13} width={13} />
                </RowView>
                <View style={[styles.timepickerRowStyle, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                  <View>
                    <H9fontRegularGray style={{ color: color, textAlign: isRTL ? 'right' : 'left' }}>
                      {t("labels.fromTime")}
                    </H9fontRegularGray>
                    <TextInput
                      style={[styles.textBoxStyle, isRTL ? pr5 : pl5]}
                      placeholder="10:00 AM"
                    />
                  </View>
                  <View>
                    <H9fontRegularGray style={{ color: color, textAlign: isRTL ? 'right' : 'left' }}>
                      {t("labels.toTime")}
                    </H9fontRegularGray>
                    <TextInput
                      style={[styles.textBoxStyle, isRTL ? pr5 : pl5]}
                      placeholder="10:00 AM"
                    />
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

      </MainContainer>
    </Fragment>
  );
};

export default TimeAndDate;

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: '#fff',
    margin: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 15,
    elevation: 3
  },
  iconStyle: {
    height: 25,
    width: 25
  },
  dayBtnStyle: {
    height: 33,
    width: 33,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timingCardContainerStyle: {
    height: 107,
    width: DevWidth / 2.32,
    marginBottom: 15,
    padding: 10,
    borderRadius: 10,
    elevation: 2,
  },
  timerImageStyle: {
    height: 13,
    width: 13,
  },
  timingRowStyle: {
    borderBottomWidth: 1,
    alignItems: 'center',
    paddingBottom: 4
  },
  timepickerRowStyle: {
    paddingTop: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textBoxStyle: {
    borderColor: '#CFCFCF',
    borderWidth: 1,
    height: 32,
    width: 62,
    borderRadius: 5,
    backgroundColor: '#fff',
    paddingLeft: 5,
    paddingTop: 5,
    fontSize: 12,
    alignItems: 'center',
  },
});
