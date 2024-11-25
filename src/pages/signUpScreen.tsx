import { Route } from '@react-navigation/native';
import React, { Fragment } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import LanguageCheck from '../Language Settings/LanguageCheck';
import { alignItemsCenter, flex1, mt20, pb10 } from '../common/commonStyles';
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
import { FacebookIcon, GoogleIcon, LeftArrow, LockIcon, LoginIcon, LogoIcon, PhoneIcon, UserIcon } from '../components/svgIcons';
import { GeneralProps } from '../interfaces/generalProps';
import { colors } from '../utils/colors';
import { screenName } from '../utils/screenName';
import {
  minLengthValidation,
  numberValidation,
  requiredValidation,
  validationSchema,
} from '../utils/validationConfig';


interface Props extends GeneralProps {
  route: Route<string, object | undefined>;
}

const SignUpScreen: React.FC<Props> = ({ navigation }): JSX.Element => {
  const { t, i18n } = useTranslation();
const isRTL = LanguageCheck();    const formKeys = {
    name: 'name',
    mobileNo: 'mobileNo',
    password: 'password',
  };

  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm();

  const onsubmit = detaila => {
    navigation.navigate(screenName.SignInScreen);
   };

  return (
    <Fragment>
      <MainContainer>
        <ScrollView showsVerticalScrollIndicator={false} style={flex1}>
          <SubContainer style={{ backgroundColor: colors.background }}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ alignItems: isRTL ? 'flex-end' : 'flex-start' }}>
              {isRTL ? <LeftArrow style={{ transform: [{ rotate: '180deg' }] }} /> : <LeftArrow />}
            </TouchableOpacity>
            <View style={flex1}>
              <View style={[alignItemsCenter, pb10]}>
                <LoginIcon fill={"#e0e0e0"} />
                <View>
                  <LogoIcon />
                </View>
              </View>
              <RowView style={[mt20,{flexDirection:isRTL?'row-reverse':'row'}]}>
                <H6fontRegularBlack>{t('labels.doctorRegister')}</H6fontRegularBlack>
                <H9fontRegularBlack>{t('labels.notaDoctor')}</H9fontRegularBlack>
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
                      placeholder={t('labels.name')}
                      image={
                        <View style={styles.passwordIconStyle}>
                          <UserIcon width={18} height={18}/>
                        
                        </View>
                      }
                    />
                  )}
                  rules={{
                    required: requiredValidation(t('labels.name')),
                    minLength: minLengthValidation(
                      validationSchema.name.minLength,
                    ),
                  }}
                />
                <Controller
                  name={formKeys.mobileNo}
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <InputFields
                      value={value}
                      onChangeText={onChange}
                      placeholder={t('labels.mobileNumber')}
                      errorMessage={errors[formKeys.mobileNo]?.message.toString()}
                      image={
                        <View style={styles.passwordIconStyle}>
                          <PhoneIcon />
                        </View>
                      }
                    />
                  )}
                  rules={{
                    required: requiredValidation(t('labels.mobileNumber')),
                    validate: numberValidation,
                    minLength: minLengthValidation(
                      validationSchema.phoneNumber.minLength,
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
                    placeholder={t('labels.createPassword')}
                    errorMessage={errors[formKeys.password]?.message.toString()}
                    image={
                      <View style={styles.passwordIconStyle}>
                        <LockIcon />
                      </View>
                    }
                  />
                )}
                rules={{
                  required: requiredValidation(t('labels.createPassword')),
                  minLength: minLengthValidation(
                    validationSchema.password.minLength,
                  ),
                }}
              />
              </View>
              <Button
                disabled={false}
                funCallback={onsubmit}
                label={t('labels.register')}
              />
            </View>
            <View>
              <View style={[styles.infoTextViewStyle,{flexDirection:isRTL?'row-reverse':'row'}]}>
                <H9fontRegularGray>{t('labels.alreadyAccount')} </H9fontRegularGray>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate(screenName.SignInScreen as any)
                  }>
                  <H9fontRegularBlack>
                    {t('labels.registerLogin')}
                  </H9fontRegularBlack>
                </TouchableOpacity>
              </View>
              <View style={styles.borderLineStyle}>
                <CommonLineView />
              </View>
              <RowView style={styles.footerComponentView}>
                <SocialMediaLogin
                  btnKey={'fb'}
                  label={t('labels.facebook')}
                  image={
                    <View style={styles.socialMediaFBIconStyle}>
                      <FacebookIcon />
                    </View>
                  }
                  onPress={() => { }}
                />
                <SocialMediaLogin
                  label={t('labels.google')}
                  image={
                    <View style={styles.socialMediaFBIconStyle}>
                      <GoogleIcon />
                    </View>
                  }
                  onPress={() => { }}
                />
              </RowView>
            </View>
          </SubContainer>
        </ScrollView>
      </MainContainer>
    </Fragment>
  );
};
export default SignUpScreen;

const styles = StyleSheet.create({
  infoTextViewStyle: {
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  socialMediaIconStyle: {
    height: 15,
    width: 22,
    alignSelf: 'center'
  },
  socialMediaFBIconStyle: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  borderLineStyle: {
    paddingTop: 10
  },
  footerComponentView: {
    paddingTop: 30
  },
  passwordIconStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  userIconsStyle: {
    height: 20,
    width: 20,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
