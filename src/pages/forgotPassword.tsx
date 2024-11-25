import { Route } from '@react-navigation/native';
import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import LanguageCheck from '../Language Settings/LanguageCheck';
import { pl20, pr20 } from '../common/commonStyles';
import { Button } from '../components/commonButton';
import { H9fontRegularBlack, H9fontRegularGray } from '../components/commonText';
import {
  CardSurface,
  MainContainer,
  RowView,
  TextInputStyle,
} from '../components/commonViews';
import { EmailIcon, LeftArrow, LoginIcon, LogoIcon } from '../components/svgIcons';
import { GeneralProps } from '../interfaces/generalProps';
import { colors } from '../utils/colors';
import { screenName } from '../utils/screenName';

interface Props extends GeneralProps {
  route: Route<string, object | undefined>;
}

const ForgotPassword: React.FC<Props> = ({navigation, route}): JSX.Element => {
  const { t, i18n } = useTranslation();
const isRTL = LanguageCheck();    return (
    <Fragment>
      <MainContainer>
        <ScrollView>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{alignItems:isRTL?'flex-end':'flex-start',padding:20}}>
        {isRTL?  <LeftArrow style={{ transform: [{ rotate: '180deg' }] }} />: <LeftArrow  />}
            </TouchableOpacity>
          <View style={styles.imageContainer}>
            <LoginIcon fill="#e0e0e0" height={230} width={230}/>
            <View style={isRTL?pr20:pl20}>
              <LogoIcon height={50} width={200}/>
            </View>
          </View>
          <View style={styles.txtBoxStyle}>
            <TextInputStyle>
              <RowView style={{flexDirection:isRTL?'row-reverse':'row'}}>
                <TextInput
                  style={[isRTL?pr20:pl20,{textAlign:isRTL?'right':'left'}]}
                  placeholder={t("labels.email")}
                  placeholderTextColor={'#adb5bd'}
                />
                <View style={styles.iconContainer}>
                  <CardSurface style={styles.surfaceStyle}>
                    <EmailIcon />
                  </CardSurface>
                </View>
              </RowView>
            </TextInputStyle>
            
          </View>
          <View style={styles.buttonStyle}>
            <Button
              disabled={false}
              funCallback={() => navigation.navigate(screenName.ChangePassword)}
              label={t("labels.resetPassword")}
            />
          </View>
          <View style={[styles.footerText,{flexDirection:isRTL?'row-reverse':'row'}]}>
            <H9fontRegularGray>{t("labels.goBackLogin")} </H9fontRegularGray>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(screenName.SignInScreen as any)
              }>
              <H9fontRegularBlack>{t("labels.registerLogin")}</H9fontRegularBlack>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </MainContainer>
    </Fragment>
  );
};
export default ForgotPassword;

const styles = StyleSheet.create({
  imageContainer: {
    alignSelf: 'center',
  },
  logoStyle: {
    height: 230,
    width: 230,
  },
  logoTxtStyle: {
    height: 50, 
    width: 200
  },
  txtBoxStyle: {
    paddingHorizontal:20,
    paddingTop: 50,
  },
  iconContainer: {
    right: 7, 
    justifyContent: 'center'
  },
  surfaceStyle: {
    borderRadius: 21,
    height: 42,
    width: 42,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emailLogostyle: {
    height: 17, 
    width: 25, 
    alignSelf: 'center'
  },
  buttonStyle: {
    marginHorizontal: 20,
    marginTop: 5,
  },
  footerText: {
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
