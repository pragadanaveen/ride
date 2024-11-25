import { Route } from '@react-navigation/native';
import React, { Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, StyleSheet, View } from 'react-native';
import LanguageCheck from '../Language Settings/LanguageCheck';
import { NavBarPatient } from '../common/commonComponents';
import { flex1, mh10, mv15, p5, ph10 } from '../common/commonStyles';
import {
  H14fontRegularGray,
  H14fontRegularLightBlack,
} from '../components/commonText';
import { CardSurface, MainContainer } from '../components/commonViews';
import { Patient } from '../components/svgIcons';
import { GeneralProps } from '../interfaces/generalProps';
import { DevWidth } from '../utils/device';
import { _testNotificationDetails } from '../utils/mockDetails';

interface Props extends GeneralProps {
  route: Route<string, object | undefined>;
}

const NotificationScreen: React.FC<Props> = (): JSX.Element => {
  const [refresh, setRefresh] = useState(false);
  const { t, i18n } = useTranslation();
const isRTL = LanguageCheck();  
  return (
    <Fragment>
      <MainContainer>
        <NavBarPatient title={t("labels.notifications")} />
        <View style={[mv15, mh10, flex1]}>
          <FlatList
            showsVerticalScrollIndicator={false}
            refreshing={refresh}
            onRefresh={() => {
              setRefresh(false);
            }}
            data={_testNotificationDetails}
            renderItem={({item, index}) => {
              return (
                <CardSurface style={styles.cardSurface}>
                  <View style={[ { flexDirection: isRTL ? 'row-reverse' : 'row' }, p5]}>
                    <View style={{height: 50, width: 50, borderRadius: 50, overflow: 'hidden'}}>
                      <Patient height={50} width={50} />
                    </View>
                    <View style={[ph10,{width: DevWidth/2.5}]}>
                      <View style={ { flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                        <H14fontRegularLightBlack>
                          {t("labels.you")}
                        </H14fontRegularLightBlack>
                        <H14fontRegularGray>
                          {t("labels.missedCall")}
                        </H14fontRegularGray>
                        <H14fontRegularLightBlack>
                          {t(item.name)}
                        </H14fontRegularLightBlack>
                      </View>
                      <H14fontRegularGray>{t(item.date)}</H14fontRegularGray>
                    </View>
                  </View>
                </CardSurface>
              );
            }}
          />
        </View>
      </MainContainer>
    </Fragment>
  );
};
export default NotificationScreen;

const styles = StyleSheet.create({
  cardSurface: {
    backgroundColor: 'white',
    borderRadius: 20,
    marginBottom: 10,
  },
  imageStyle: {
    height: 50, 
    width: 50,
     borderRadius: 30
    },
});
