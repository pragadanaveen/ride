import { Route } from '@react-navigation/native';
import React, { Fragment } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  alignItemsCenter,
  mt20,
  pv10,
} from '../common/commonStyles';
import { Button } from '../components/commonButton';
import { InputFields } from '../components/commonInputFields';
import {
  H9fontRegularBlack,
  H9fontRegularGray,
} from '../components/commonText';
import {
  MainContainer,
  SubContainer,
} from '../components/commonViews';
import { GeneralProps } from '../interfaces/generalProps';
import { colors } from '../utils/colors';
import { screenName } from '../utils/screenName';
import {
  minLengthValidation,
  requiredValidation,
  validationSchema,
} from '../utils/validationConfig';

import { useTranslation } from 'react-i18next';
import LanguageCheck from '../Language Settings/LanguageCheck';
import { LeftArrow, LockIcon, LoginIcon, LogoIcon } from '../components/svgIcons';


interface Props extends GeneralProps {
  route: Route<string, object | undefined>;
}
const ChangePassword: React.FC<Props> = ({ navigation, route }): JSX.Element => {
  const { t, i18n } = useTranslation();
const isRTL = LanguageCheck();    const formKeys = {
    password: 'password',
    changePassword: 'changePassword',
  };
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onsubmit = () => {
    navigation.navigate(screenName.DashBoardScreen);
  };
  return (
    <Fragment>
      <MainContainer>
        <ScrollView>
          <SubContainer style={{ backgroundColor: colors.background }}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ alignItems: i18n.language === 'ar' || i18n.language === 'he' ? 'flex-end' : 'flex-start' }}>
              {isRTL ? <LeftArrow style={{ transform: [{ rotate: '180deg' }] }} /> : <LeftArrow />}
            </TouchableOpacity>
            <View style={alignItemsCenter}>
              <LoginIcon fill={"#e0e0e0"} />
              <View>
                <LogoIcon />
              </View>
            </View>
            <View style={[mt20]}>
              <Controller
                name={formKeys.password}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <InputFields
                    errorMessage={errors[formKeys.password]?.message.toString()}
                    value={value}
                    onChangeText={onChange}
                    placeholder={t('labels.password')}
                    image={
                      <LockIcon />
                    }
                     />
                )}
                rules={{
                  required: requiredValidation(t("labels.password")),
                  minLength: minLengthValidation(
                    validationSchema.password.minLength,
                  ),
                }}
              />
              <Controller
                name={formKeys.changePassword}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <InputFields
                    value={value}
                    onChangeText={onChange}
                    placeholder={t('labels.confirmpassword')}
                    errorMessage={errors[
                      formKeys.changePassword
                    ]?.message.toString()}
                    image={
                      <View style={styles.passwordIconStyle}>
                        <LockIcon />
                      </View>
                    }
                  />
                )}
                rules={{
                  required: requiredValidation(t("labels.password")),
                  minLength: minLengthValidation(
                    validationSchema.password.minLength,
                  ),
                }}
              />
            </View>
            <View style={pv10}>
              <Button
                disabled={false}
                funCallback={handleSubmit(onsubmit)}
                label={t('labels.changePassword')}
              />
            </View>
            <View style={[styles.infoTextViewStyle,{flexDirection:isRTL?'row-reverse':'row'}]}>
              <View>
                <H9fontRegularGray>{t('labels.gobacktoLogin')} </H9fontRegularGray>
              </View>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(screenName.SignInScreen as any)
                }>
                <H9fontRegularBlack>
                  {t('labels.registerLogin')}
                </H9fontRegularBlack>
              </TouchableOpacity>
            </View>
          </SubContainer>
        </ScrollView>
      </MainContainer>
    </Fragment>
  );
};
export default ChangePassword;
const styles = StyleSheet.create({
  passwordImageStye: {
    height: 25,
    width: 25,
    alignSelf: 'center',
  },
  infoTextViewStyle: {
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  passwordIconStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  },
});
