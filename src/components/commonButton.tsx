//import liraries
import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { DevWidth } from '../utils/device';
import { colors } from '../utils/colors';
import {
  ButtonText,
  TextNow,
  CommonButton,
  TextButtonText,
  CommonSmallButtonSuccess,
  CommonSmallButtonCancel,
  CommonButtonInvoice,
  CommonButtonNow,
  CommonButtonBook,
  CommonButtonLogout,
  CommonButtonBlue,
  CommonButtonAppointment,
  TextAppointments,
  CommonButtonNext,
} from './commonViews';
import { fontFamily } from '../utils/fontFamily';
import { useTranslation } from 'react-i18next';
import LanguageCheck from '../Language Settings/LanguageCheck';

type ButtonProps = {
  disabled?: boolean;
  funCallback: CallableFunction;
  label: string;
  style?: StyleProp<ViewStyle>;
  success?: boolean;
};
export const ButtonFull: React.FC<ButtonProps> = ({
  style,
  disabled,
  funCallback,
  label,
  success,
}) => {
  return (
    <CommonButtonBlue
      disabled={disabled}
      style={[style, success ? { backgroundColor: colors.blue } : null]}
      onPress={() => {
        funCallback();
      }}>
      <TextNow>{label}</TextNow>
    </CommonButtonBlue>
  );
};

export const ButtonAppointment: React.FC<ButtonProps> = ({
  style,
  disabled,
  funCallback,
  label,
  success,
}) => {
  return (
    <CommonButtonAppointment
      disabled={disabled}
      style={[style, success ? { backgroundColor: colors.blue } : null]}
      onPress={() => {
        funCallback();
      }}>
      <TextAppointments>{label}</TextAppointments>
    </CommonButtonAppointment>
  );
};

export const Button: React.FC<ButtonProps> = ({
  style,
  disabled,
  funCallback,
  label,
  success,
}) => {
  return (
    <CommonButton
      disabled={disabled}
      style={[style, success ? { backgroundColor: colors.blue } : null]}
      onPress={() => {
        funCallback();
      }}>
      <ButtonText>{label}</ButtonText>
    </CommonButton>
  );
};

export const ButtonNow: React.FC<ButtonProps> = ({
  style,
  disabled,
  funCallback,
  label,
  success,
}) => {
  return (
    <CommonButtonNow
      disabled={disabled}
      style={[style, success ? { backgroundColor: colors.blue } : null]}
      onPress={() => {
        funCallback();
      }}>
      <TextNow>{label}</TextNow>
    </CommonButtonNow>
  );
};

export const ButtonBook: React.FC<ButtonProps> = ({
  style,
  disabled,
  funCallback,
  label,
  success,
}) => {
  return (
    <CommonButtonBook
      disabled={disabled}
      style={[style, success ? { backgroundColor: colors.blue } : null]}
      onPress={() => {
        funCallback();
      }}>
      <TextNow>{label}</TextNow>
    </CommonButtonBook>
  );
};

export const ButtonInvoice: React.FC<ButtonProps> = ({
  style,
  disabled,
  funCallback,
  label,
  success,
}) => {
  return (
    <CommonButtonInvoice
      disabled={disabled}
      style={[style, success ? { backgroundColor: colors.ligtBlue } : null]}
      onPress={() => {
        funCallback();
      }}>
      <ButtonText>{label}</ButtonText>
    </CommonButtonInvoice>
  );
};

export const ButtonNext: React.FC<ButtonProps> = ({
  style,
  disabled,
  funCallback,
  label,
  success,
}) => {
  return (
    <CommonButtonNext
      disabled={disabled}
      style={[style, success ? { backgroundColor: colors.ligtBlue } : null]}
      onPress={() => {
        funCallback();
      }}>
      <ButtonText>{label}</ButtonText>
    </CommonButtonNext>
  );
};

export const SmallButtonSuccess: React.FC<ButtonProps> = ({
  style,
  funCallback,
  label,
  success,
}) => {
  return (
    <CommonSmallButtonSuccess
      disabled={success}
      style={[style]}
      onPress={() => {
        funCallback();
      }}>
      <TextButtonText>{label}</TextButtonText>
    </CommonSmallButtonSuccess>
  );
};
export const SmallButtonCancel: React.FC<ButtonProps> = ({
  style,
  funCallback,
  label,
  success,
}) => {
  return (
    <CommonSmallButtonCancel
      disabled={success}
      style={[style]}
      onPress={() => {
        funCallback();
      }}>
      <TextButtonText>{label}</TextButtonText>
    </CommonSmallButtonCancel>
  );
};
export const ButtonLogout: React.FC<ButtonProps> = ({
  style,
  disabled,
  funCallback,
  label,
  success,
}) => {
  return (
    <CommonButtonLogout
      disabled={success}
      style={[style]}
      onPress={() => {
        funCallback();
      }}>
      <TextButtonText>{label}</TextButtonText>
    </CommonButtonLogout>
  );
};

interface SocialMediaLoginBtnProps {
  label: string;
  image: JSX.Element;
  btnKey?: string;
  onPress: CallableFunction;
}

export const SocialMediaLogin: React.FC<SocialMediaLoginBtnProps> = ({
  label,
  image,
  onPress,
  btnKey,
}) => {
  const { i18n } = useTranslation();
const isRTL = LanguageCheck();    return (
    <View>
      <View style={[styles.socialMediaBtnIconsStyle, { marginLeft: isRTL ? 115 : 15 }]}>
        <View style={styles.socialMediaBtnIconContainerStyle}>{image}</View>
      </View>

      <TouchableOpacity
        style={[
          styles.socialMediaBtnStyle, { paddingRight: isRTL ? 40 : 0, paddingLeft: isRTL ? 0 : 40 },
          btnKey === 'fb' ? { backgroundColor: colors.facebook } : {},
        ]}
        onPress={() => {
          onPress();
        }}>
        <Text style={styles.socialMediaBtnTextStyele}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  socialMediaBtnIconsStyle: { position: 'absolute', top: -19 },
  socialMediaBtnIconContainerStyle: {
    borderRadius: 25,
    height: 38,
    width: 38,
    backgroundColor: colors.white,
    justifyContent: 'center',
    elevation: 3
  },
  socialMediaIconStyle: { height: 15, width: 22, alignSelf: 'center' },
  socialMediaBtnStyle: {
    zIndex: -1,
    height: 38,
    width: DevWidth / 2.4,
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
  socialMediaFBIconStyle: { height: 18, width: 8, alignSelf: 'center' },
});
