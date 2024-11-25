import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import LanguageCheck from '../../Language Settings/LanguageCheck';
import { pl10, pr10, spaceBetween } from '../../common/commonStyles';
import {
  H10fontRegularGreen,
  H10fontRegularRed,
  H14fontMediumBlack,
  H14fontRegulargray,
  H15fontMediumBlack,
  H9fontRegularBlack,
} from '../../components/commonText';
import { CardSurface, RowView } from '../../components/commonViews';
import { TodayIcon } from '../../components/svgIcons';
import { colors } from '../../utils/colors';

interface Props { }

const HoursView: React.FC<Props> = ({ }): JSX.Element => {
  const { t } = useTranslation();
  const isRTL = LanguageCheck();
  const scheduleTimeList = [
    { day: "labels.monday", time: "labels.sevenToNine", isClosed: false },
    { day: "labels.tuesday", time: "labels.sevenToNine", isClosed: false },
    { day: "labels.wednesday", time: "labels.sevenToNine", isClosed: false },
    { day: "labels.thrusday", time: "labels.sevenToNine", isClosed: false },
    { day: "labels.friday", time: "labels.sevenToNine", isClosed: false },
    { day: "labels.saturday", time: "labels.sevenToNine", isClosed: false },
    { day: "labels.sunday", time: "labels.sevenToNine", isClosed: true },
  ];

  const scheduleTime = item => {
    const { t } = useTranslation();
    const isRTL = LanguageCheck(); return (
      <RowView style={{ padding: 8, flexDirection: isRTL ? 'row-reverse' : 'row' }} >
        <View style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
          <Icon
            name="check-circle"
            size={20}
            color={item.isClosed ? colors.red : colors.black}
          />
          <H14fontMediumBlack style={isRTL ? pr10 : pl10}>
            {t(item.day)}
          </H14fontMediumBlack>
        </View>
        {item.isClosed ? (
          <View style={styles.closedStatus}>
            <H10fontRegularRed>{t('labels.closed')}</H10fontRegularRed>
          </View>
        ) : (
          <H14fontRegulargray>{t(item.time)}</H14fontRegulargray>
        )}
      </RowView>
    );
  };
  return (
    <View style={styles.constainer}>
      <CardSurface style={styles.cardStyle}>
        <RowView style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
          <TodayIcon height={50} width={50} />
          <View style={spaceBetween}>
            <H15fontMediumBlack style = {{textAlign:isRTL?'right':'left'}}>{t('labels.today')}</H15fontMediumBlack>
            <H9fontRegularBlack>{t('labels.fifthNov')}</H9fontRegularBlack>
          </View>
          <View>
            <View style={styles.timeAndStatus}>
              <H10fontRegularGreen>{t('labels.openNow')}</H10fontRegularGreen>
            </View>
            <H14fontRegulargray>{t('labels.sevenToNine')}</H14fontRegulargray>
          </View>
        </RowView>
      </CardSurface>
      <View style={styles.bodyContainer}>
        <CardSurface style={styles.bodySurfaceStyle}>
          {scheduleTimeList.map((item, index) => {
            return <View key={index}>{scheduleTime(item)}</View>;
          })}

        </CardSurface>
      </View>
    </View>
  );
};
export default HoursView;
const styles = StyleSheet.create({
  constainer: { paddingHorizontal: 18 },
  cardStyle: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  timerStyle: { height: 50, width: 50 },
  timeAndStatus: {
    height: 25,
    width: 90,
    borderRadius: 5,
    backgroundColor: 'rgba(0, 167, 105, 0.3)',
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  bodyContainer: { paddingTop: 20 },
  bodySurfaceStyle: {
    height: 300,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
  },
  closedStatus: {
    height: 25,
    width: 90,
    borderRadius: 6,
    backgroundColor: 'rgba(255, 49, 49, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
