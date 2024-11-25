import { useNavigation } from '@react-navigation/native';
import React, { Fragment, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LanguageCheck from '../Language Settings/LanguageCheck';
import { H6fontMediumWhite, H7fontMediumWhite } from '../components/commonText';
import { RowView } from '../components/commonViews';
import { BackIcon, Patient6, PhoneIcon } from '../components/svgIcons';
import SideMenu from '../pages/sideMenu';
import { colors } from '../utils/colors';
import { fontFamily } from '../utils/fontFamily';
import { screenName } from '../utils/screenName';
import { pl10, pl15, pl5, pr10, pr15, pr5 } from './commonStyles';


interface NavBarProps {
  title: string;
  chat?: boolean;
}
const { width } = Dimensions.get('window');
export const NavBar: React.FC<NavBarProps> = ({ title, chat }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const { t, i18n } = useTranslation();
const isRTL = LanguageCheck();    useEffect(() => {
    setModalVisible(false);
  }, []);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const navigation = useNavigation();
  
  return (
    
    <Fragment>
      <RowView
        style={{
          borderBottomColor: colors.borderTextColor,
          borderBottomWidth: 1,
          backgroundColor: colors.blue,
          height: 160,
          flexDirection: isRTL ? 'row-reverse' : 'row'
        }} >
        <View
          style={{
            flexDirection: isRTL ? 'row-reverse' : 'row'
          }}>
          {chat ? (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={[{ paddingTop: 20 }, isRTL ? pr15 : pl15]}>
              {isRTL ? <BackIcon height={10} width={20} style={{ transform: [{ rotate: '180deg' }] }} />
                :

                <BackIcon height={10} width={20} />
              }

            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                toggleModal();
              }}
              style={[{ paddingTop: 20 }, isRTL ? pr15 : pl15]}>
              <View
                style={{ height: 3, width: 30, backgroundColor: 'white' }}></View>
              <View style={[{paddingTop: 5,alignItems:isRTL?'flex-end':'flex-start'}]}>
                <View
                  style={{
                    height: 3,
                    width: 20,
                    backgroundColor: 'white',
                  }}></View>
              </View>

              <View style={{ paddingTop: 5 }}>
                <View
                  style={{
                    height: 3,
                    width: 30,
                    backgroundColor: 'white',
                  }}></View>
              </View>
            </TouchableOpacity>
          )}



          {chat && (
            
            <View style={[{ paddingTop: 10},isRTL?pr10:pl10]}>
              <View style={{ height: 37, width: 37, borderRadius: 37, overflow: 'hidden' }}>
                <Patient6 height={37} width={37} />
              </View>
            </View>
          )}
          {isRTL ?
            <H6fontMediumWhite
              style={{ paddingRight: chat ? 7 : 20, paddingTop: 13 }}>
              {title}
            </H6fontMediumWhite> :
            <H6fontMediumWhite
              style={{ paddingLeft: chat ? 7 : 20, paddingTop: 13 }}>
              {title}
            </H6fontMediumWhite>}

        </View>
        <View
          style={{
            flexDirection: isRTL ? 'row-reverse' : 'row',
            paddingTop: 16,
            paddingRight: 10,
          }}>
          {chat ? (
            <TouchableOpacity
              onPress={() => navigation.navigate(screenName.VoiceCall as any)}
              style={{ paddingTop: 5 }}>
              <PhoneIcon height={19} width={19} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(screenName.NotificationScreen as any)
              }>
              <Icon name="notifications" size={30} color={'white'} />
            </TouchableOpacity>
          )}

          <View style={isRTL ? pr5 : pl5}>
            <Menu>
              <MenuTrigger>
                <Icon name="more-vert" size={30} color={'white'} />
              </MenuTrigger>
              <MenuOptions
                optionsContainerStyle={{ marginTop: 50 }}
                customStyles={{
                  optionsContainer: [
                    {
                      borderWidth: 0.5,
                      borderColor: colors.borderTextColor,
                      borderRadius: 5,
                    },
                  ],
                }}>
                <MenuOption
                  onSelect={() =>
                    navigation.navigate(screenName.DoctorProfile as any)
                  }>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 13,
                      fontFamily: fontFamily.fontRegular,
                      paddingLeft: 7,
                      paddingTop: 2,
                    }}>
                    {t("labels.myProfile")}
                  </Text>
                </MenuOption>
                <MenuOption
                  onSelect={() =>
                    navigation.navigate(screenName.ProfileSettings as any)
                  }>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 13,
                      fontFamily: fontFamily.fontRegular,
                      paddingLeft: 7,
                      paddingTop: 2,
                    }}>
                    {t("labels.settings")}
                  </Text>
                </MenuOption>
                <MenuOption
                  onSelect={() =>
                    navigation.navigate(screenName.SignInScreen as any)
                  }>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 13,
                      fontFamily: fontFamily.fontRegular,
                      paddingLeft: 7,
                      paddingTop: 2,
                    }}>
                    {t("labels.Logout")}
                  </Text>
                </MenuOption>
              </MenuOptions>
            </Menu>
          </View>
        </View>
      </RowView>


      {isRTL ?
        <Modal
          isVisible={isModalVisible}
          onBackdropPress={toggleModal}
          onSwipeComplete={toggleModal}
          animationIn="slideInRight"
          animationOut="slideOutRight"
          swipeDirection="right"
          useNativeDriver
          hideModalContentWhileAnimating
          propagateSwipe
          style={[styles.sideMenuStyle, { alignSelf: 'flex-end' }]}>
          <SideMenu closeModal={() => { toggleModal() }} />
        </Modal>
        :

        <Modal
          isVisible={isModalVisible}
          onBackdropPress={toggleModal}
          onSwipeComplete={toggleModal}
          animationIn="slideInLeft"
          animationOut="slideOutLeft"
          swipeDirection="left"
          useNativeDriver
          hideModalContentWhileAnimating
          propagateSwipe
          style={styles.sideMenuStyle}>
          <SideMenu closeModal={() => { toggleModal() }} />
        </Modal>


      }
    </Fragment>
  );
};





export const NavBarPatient: React.FC<NavBarProps> = ({ title }) => {
  const { t, i18n } = useTranslation();
const isRTL = LanguageCheck();  
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const navigation = useNavigation();

  return (
    <Fragment>
      <RowView
        style={{
          borderBottomColor: colors.borderTextColor,
          borderBottomWidth: 1,
          backgroundColor: colors.blue,
          height: 60,
          flexDirection: isRTL ? 'row-reverse' : 'row',
        }}>
        <View
          style={{
            flexDirection: isRTL ? 'row-reverse' : 'row',
          }}>
          <TouchableOpacity
            onPress={() => {
              toggleModal();
            }}
            style={[{ paddingTop: 18 ,alignItems:isRTL?'flex-end':'flex-start' }, isRTL ? pr15 : pl15]}>
            <View
              style={{ height: 2, width: 25, backgroundColor: 'white' }}></View>
            <View style={{ paddingTop: 5 }}>
              <View
                style={{ height: 2, width: 15, backgroundColor: 'white' }}></View>
            </View>
            <View style={{ paddingTop: 5 }}>
              <View
                style={{
                  height: 2.2,
                  width: 25,
                  backgroundColor: 'white',
                }}></View>
            </View>
          </TouchableOpacity>

          {isRTL ?
            <H7fontMediumWhite style={{ paddingRight: 20, paddingTop: 13 }}>
              {title}
            </H7fontMediumWhite> :
            <H7fontMediumWhite style={{ paddingLeft: 20, paddingTop: 13 }}>
              {title}
            </H7fontMediumWhite>
          }


        </View>
        <View
          style={{
            flexDirection: isRTL ? 'row-reverse' : 'row',
            paddingTop: 16,
            paddingRight: 10,
          }}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(screenName.NotificationScreen as any)
            }>
            <Icon name="notifications" size={24} color={'white'} />
          </TouchableOpacity>
          <View style={isRTL ? pr5 : pl5}>
            <Menu>
              <MenuTrigger>
                <Icon name="more-vert" size={24} color={'white'} />
              </MenuTrigger>
              <MenuOptions
                optionsContainerStyle={{ marginTop: 50 }}
                customStyles={{
                  optionsContainer: [
                    {
                      borderWidth: 0.5,
                      borderColor: colors.borderTextColor,
                      borderRadius: 5,
                    },
                  ],
                }}>
                <MenuOption
                  onSelect={() =>
                    navigation.navigate(screenName.DoctorProfile as any)
                  }>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 13,
                      fontFamily: fontFamily.fontRegular,
                      paddingLeft: 7,
                      paddingTop: 2,
                    }}>
                   {t("labels.myProfile")}
                  </Text>
                </MenuOption>
                <MenuOption
                  onSelect={() =>
                    navigation.navigate(screenName.ProfileSettings as any)
                  }>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 13,
                      fontFamily: fontFamily.fontRegular,
                      paddingLeft: 7,
                      paddingTop: 2,
                    }}>
                    {t("labels.settings")}
                  </Text>
                </MenuOption>
                <MenuOption
                  onSelect={() =>
                    navigation.navigate(screenName.SignInScreen as any)
                  }>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 13,
                      fontFamily: fontFamily.fontRegular,
                      paddingLeft: 7,
                      paddingTop: 2,
                    }}>
                    {t("labels.Logout")}
                  </Text>
                </MenuOption>
              </MenuOptions>
            </Menu>
          </View>
        </View>
      </RowView>
      {isRTL ?
        <Modal
          isVisible={isModalVisible}
          onBackdropPress={toggleModal}
          onSwipeComplete={toggleModal}
          animationIn="slideInRight"
          animationOut="slideOutRight"
          swipeDirection="right"
          useNativeDriver
          hideModalContentWhileAnimating
          propagateSwipe
          style={[styles.sideMenuStyle, { alignSelf: isRTL ? 'flex-end' : 'flex-start' }]}>
          <SideMenu closeModal={() => { toggleModal() }} />
        </Modal> : <Modal
          isVisible={isModalVisible}
          onBackdropPress={toggleModal}
          onSwipeComplete={toggleModal}
          animationIn="slideInLeft"
          animationOut="slideOutLeft"
          swipeDirection="left"
          useNativeDriver
          hideModalContentWhileAnimating
          propagateSwipe
          style={[styles.sideMenuStyle]}>
          <SideMenu closeModal={() => { toggleModal() }} />
        </Modal>}
    </Fragment>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  sideMenuStyle: {
    margin: 0,
    width: width * 0.65,

  },
});
