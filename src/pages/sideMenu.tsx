import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon1 from 'react-native-vector-icons/AntDesign';
import IonicIcons from 'react-native-vector-icons/Ionicons';
import CommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LanguageCheck from '../Language Settings/LanguageCheck';
import { alignItemsCenter, ml15, mr15, mv10, pl15, pr15 } from '../common/commonStyles';
import { H8fontRegularBlack } from '../components/commonText';
import { CardSurface, RowView } from '../components/commonViews';
import { LogoutIcon } from '../components/svgIcons';
import { colors } from '../utils/colors';
import { sidemenuDetails } from '../utils/constant';
import { fontFamily } from '../utils/fontFamily';
import { screenName } from '../utils/screenName';
interface Props {
  closeModal: () => void;

}
interface MenuList {
  name: string;
  screenName: string;
  iconName: string;
  iconsType: string;
}
const SideMenu: React.FC<Props> = ({ closeModal }): JSX.Element => {
  const { t, i18n } = useTranslation();
const isRTL = LanguageCheck();    const navigation = useNavigation();

  const renderOptions = (data: MenuList, index: number) => {
    return (
      <RowView key={index} style={[mv10, alignItemsCenter, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
        <TouchableOpacity
          style={[{ flexDirection: isRTL ? 'row-reverse' : 'row' }, alignItemsCenter]}
          onPress={() => {
            closeModal();
            navigation.navigate(data.screenName as never);
          }}
        >
          <CardSurface style={[styles.surfaceStyle, isRTL ? ml15 : mr15]}>
            {data.iconsType === 'MaterialIcons' ? (
              <MaterialIcons
                name={data.iconName}
                size={15}
                color={colors.white}
              />
            ) : data.iconsType === 'CommunityIcons' ? (
              <CommunityIcons
                name={data.iconName}
                size={15}
                color={colors.white}
              />
            ) : (
              <IonicIcons name={data.iconName} size={15} color={colors.white} />
            )}
          </CardSurface>
          <H8fontRegularBlack>{t(data.name)}</H8fontRegularBlack>
        </TouchableOpacity>
        {data.name === 'Dashboard' ? (
          <TouchableOpacity
            onPress={() => {
              closeModal();
            }}>
            <Icon1 name="close" size={23} color={colors.black} />
          </TouchableOpacity>
        ) : null}
      </RowView>
    );
  };
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContainerStyle}>
        <View>
          {sidemenuDetails.map((item, index) => {
            return renderOptions(item, index);
          })}
        </View>
        <View style={{ alignItems: isRTL ? 'flex-end' : 'flex-start' }}>
          <TouchableOpacity
            onPress={() => navigation.navigate(screenName.SignInScreen as any)}
            style={[styles.loginoutButtonStyle, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
            <LogoutIcon height={11} width={12} />
            <Text style={[styles.logoutBtnStyle, isRTL ? pr15 : pl15]}>{t('labels.logOut')}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default SideMenu;
const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 20,
  },
  loginoutButtonStyle: {
    height: 33,
    backgroundColor: colors.pink,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 25,
  },
  logoutBtnStyle: {
    color: 'white',
    fontSize: 14,
    fontFamily: fontFamily.fontRegular,
  },
  scrollContainerStyle: {
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: 30
  },
  surfaceStyle: {
    borderRadius: 15,
    height: 30,
    width: 30,
    backgroundColor: colors.facebook,
    paddingHorizontal: 0,
    paddingVertical: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
