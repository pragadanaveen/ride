import { Route } from '@react-navigation/native';
import React, { Fragment,useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import LanguageCheck from '../Language Settings/LanguageCheck';
import {
  alignItemsCenter,
  flex1,
  mt10,
  mt20,
  pb10,
} from '../common/commonStyles';
import { Button, SocialMediaLogin } from '../components/commonButton';
import { InputFields } from '../components/commonInputFields';
import {
  H6fontRegularBlack,
  H9fontRegularBlack,
  H9fontRegularGray,
} from '../components/commonText';
import {
  CommonLineView,
  MainContainer,
  RowView,
  SubContainer,
} from '../components/commonViews';
import { EmailIcon, FacebookIcon, GoogleIcon, LockIcon, LoginIcon, LogoIcon } from '../components/svgIcons';
import { GeneralProps } from '../interfaces/generalProps';
import { colors } from '../utils/colors';
import { DevWidth } from '../utils/device';
import { fontFamily } from '../utils/fontFamily';
import { screenName } from '../utils/screenName';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import {
  minLengthValidation,
  requiredValidation,
  validationSchema,
} from '../utils/validationConfig';



interface Props extends GeneralProps {
  route: Route<string, object | undefined>;
}

const SignInScreen: React.FC<Props> = ({ navigation, route }): JSX.Element => {
  const { t } = useTranslation();
const isRTL = LanguageCheck();    const formKeys = {
    name: 'name',
    password: 'password',
  };

  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm();

  const onsubmit = detaila => {
    navigation.navigate(screenName.DashBoardScreen);
  };
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '42156896196-efrlev2vrmmcoe2spis6v554g8r39r26.apps.googleusercontent.com', // From Google Cloud Console
      offlineAccess: true, // Optional
    });
  }, []);
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices(); // Check 
      const userInfo = await GoogleSignin.signIn();
      console.log('User Info:', userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User cancelled the login process');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Sign in is in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Google Play Services not available');
      } else {
        console.log('Some other error:', error);
      }
    }
  };

  return (
    <Fragment>
      <MainContainer>
        <ScrollView showsVerticalScrollIndicator={false} style={flex1}>


          <SubContainer style={{ backgroundColor: colors.background }}>


            <View style={[alignItemsCenter, pb10]}>
              <LoginIcon fill={'#e0e0e0'} />
              <View>
                <LogoIcon />
              </View>
            </View>
            <RowView style={[mt20, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
              <H6fontRegularBlack>{t('labels.login')}</H6fontRegularBlack>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(screenName.SignUpScreen as any)
                }>
                <H9fontRegularBlack>{t('labels.areUdoctor')}</H9fontRegularBlack>
              </TouchableOpacity>
            </RowView>
            <View>
              <Controller
                name={formKeys.name}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <InputFields
                    errorMessage={errors[formKeys.name]?.message.toString()}
                    value={value}
                    onChangeText={onChange}
                    placeholder={t('labels.emailOrUserName')}
                    image={
                      <View style={styles.userIconsStyle}>
                        <EmailIcon />
                      </View>
                    }
                  />
                )}
                rules={{
                  required: requiredValidation(t("labels.emailOrUserName")),
                  minLength: minLengthValidation(
                    validationSchema.name.minLength,
                  ),
                }}
              />
              <Controller
                name={formKeys.password}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <InputFields
                    value={value}
                    onChangeText={onChange}
                    placeholder={t('labels.password')}
                    errorMessage={errors[formKeys.password]?.message.toString()}
                    image={
                      <View style={styles.passwordIconStyle}>
                        <LockIcon />
                      </View>
                    }
                  />
                )}
                rules={{
                  required: requiredValidation(t('labels.password')),
                  minLength: minLengthValidation(
                    validationSchema.password.minLength,
                  ),
                }}
              />
            </View>
            <View style={[mt10, { alignItems: isRTL ? 'flex-start' : 'flex-end' }]}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(screenName.ForgotPassword as any)
                }>
                <H9fontRegularGray>{t('labels.forgotPassword')}</H9fontRegularGray>
              </TouchableOpacity>
            </View>
            <Button
              disabled={false}
              funCallback={handleSubmit(onsubmit)}
              label={t('labels.loginNow')}
            />
            <View>
              <View style={[styles.infoTextViewStyle, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                <H9fontRegularGray>{t('labels.dntHaveAccount')} </H9fontRegularGray>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate(screenName.SignUpScreen as any)
                  }>
                  <H9fontRegularBlack>{t('labels.signUp')}</H9fontRegularBlack>
                </TouchableOpacity>
              </View>
              <View style={styles.borderLineStyle}>
                <CommonLineView />
              </View>
              <RowView style={[styles.footerComponentView, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                <SocialMediaLogin
                  btnKey={'fb'}
                  label={t('labels.facebook')}
                  image={
                    <View style={styles.socialMediaFBIconStyle}>
                      <FacebookIcon />
                    </View>
                  }
                  onPress={signIn}
                />
                <TouchableOpacity>
                <SocialMediaLogin
                  label={t('labels.google')}
                  image={
                    <View style={styles.socialMediaFBIconStyle}>
                      <GoogleIcon />
                    </View>
                  }
                  onPress={signIn}
                />
                </TouchableOpacity>
              </RowView>
            </View>
          </SubContainer>
        </ScrollView>
      </MainContainer>
    </Fragment>
  );
};
export default SignInScreen;

const styles = StyleSheet.create({
  infoTextViewStyle: {
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  socialMediaBtnIconsStyle: { position: 'absolute', marginLeft: 15, top: -19 },
  socialMediaBtnIconContainerStyle: {
    borderRadius: 25,
    height: 30,
    width: 30,
    backgroundColor: colors.white,
    paddingTop: 10,
    paddingLeft: 3,
  },
  socialMediaIconStyle: { height: 15, width: 22, alignSelf: 'center' },
  socialMediaBtnStyle: {
    zIndex: -1,
    height: 45,
    width: DevWidth / 3,
    backgroundColor: colors.google,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialMediaBtnTextStyele: {
    color: 'white',
    fontSize: 14,
    fontFamily: fontFamily.fontRegular,
  },
  socialMediaFBIconStyle: { alignItems: 'center' },
  userIconsStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  passwordIconStyle: { alignItems: 'center', justifyContent: 'center' },
  borderLineStyle: { paddingTop: 10 },
  footerComponentView: { paddingTop: 30 }
});





