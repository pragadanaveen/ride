import * as React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../utils/colors';
import {CardSurface} from './commonViews';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Fontisto';
import {DevWidth} from '../utils/device';
import {H8fontRegularWhite} from './commonText';
import {ph10,pl10,pr10 } from '../common/commonStyles';
import { useTranslation } from 'react-i18next';
import LanguageCheck from '../Language Settings/LanguageCheck';


interface DashBoardSearchProps {
  searchNow: CallableFunction;
}

const DashBoardSearch = (props: DashBoardSearchProps) => {
  const { t, i18n } = useTranslation();
const isRTL = LanguageCheck();    return (
    <View style={styles.container}>
      <CardSurface style={styles.containerStyle} >
        <View style={{flexDirection: isRTL ? 'row-reverse' : 'row' }}>
          <CardSurface style={styles.logoContainer}>
            {/* <Icon name="map-marker-alt" size={15} color={colors.lightGray} /> */}
            <Icon2 name='map-marker-alt' size={15} color={colors.lightGray}/>
          </CardSurface>
          <View style={ph10}>
            <TextInput
              style={styles.textBoxStyle}
              placeholder={t('labels.fromLocation')}
              placeholderTextColor={'#adb5bd'}
            />
          </View>
        </View>
        <View style={[{alignItems:isRTL?'flex-end':'flex-start'},isRTL?pr10:pl10]}>
          <Icon1 name="more-vert" size={15} color={colors.lightGray} />
        </View>
        <View style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
          <CardSurface style={styles.logoContainer}>
            <Icon name="office-building-outline" size={15} color={colors.lightGray} />
          </CardSurface>
          <View style={ph10}>
            <TextInput
              style={[styles.textBoxStyle,{marginRight:isRTL?0:45}]}
              placeholder={t('labels.toLocation')}
              placeholderTextColor={'#adb5bd'}
            />
          </View>
        </View>

        <TouchableOpacity
          onPress={() => {
            props.searchNow();
          }}
          style={styles.buttonStyle}>
          <H8fontRegularWhite>{t('labels.searchNow')}</H8fontRegularWhite>
        </TouchableOpacity>
      </CardSurface>
    </View>
  );
};

export default DashBoardSearch;

const styles = StyleSheet.create({
  container: {
    marginTop: -90,
    paddingLeft: 15,
    marginBottom: 10
  },
  containerStyle: {
    height: 170,
    marginRight: 15,
    backgroundColor: 'white',
    borderRadius: 15,
    paddingHorizontal: 15
  },
  logoContainer: {
    borderRadius:30,
    height: 35,
    width: 35,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center'
  },
  dotsStyle: {
    borderBottomWidth: 1,
    borderBottomColor: '#ced4da',
    width: DevWidth / 1.5,
    marginRight: 45,
  },
  textBoxStyle: {
    borderBottomWidth: 1,
    borderBottomColor: '#ced4da',
    width: DevWidth / 1.45,
    height: 40
  },
  buttonStyle: {
    marginTop: 12,
    height: 39,
    borderRadius: 5,
    backgroundColor: '#0CE0FF',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
