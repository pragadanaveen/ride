import {ValidationValueMessage} from 'react-hook-form';
import {labels} from '../utils/labels'
import { useTranslation } from 'react-i18next';


export const validationSchema = {

  // medicalCouncil: {
  //   minLength: 8,
  //   maxLength: 15,
  // },
  // bic: {
  //   minLength: 8,
  //   maxLength: 15,
  // },
  // iban: {
  //   minLength: 15,
  //   maxLength: 80,
  // },
  // pincode: {
  //   minLength: 6,
  //   maxLength: 6,
  // },
  // passportOrIdCard: {
  //   minLength: 3,
  //   maxLength: 26,
  // },
  // name: {
  //   minLength: 2,
  //   maxLength: 26,
  // },

  // lastName: {
  //   minLength: 1,
  //   maxLength: 26,
  // },

  // email: {
  //   minLength: 3,
  //   maxLength: 64,
  // },
  // address: {
  //   minLength: 3,
  //   maxLength: 400,
  // },
  // description: {
  //   minLength: 3,
  //   maxLength: 400,
  // },
  phoneNumber: {
    minLength: 6,
    maxLength: 14,
  },
  password: {
    minLength: 2,
    maxLength: 30,
  },
  // categoryName: {
  //   minLength: 2,
  //   maxLength: 30,
  // },
  // storeCode: {
  //   minLength: 2,
  //   maxLength: 30,
  // },
  // barCode: {
  //   minLength: 1,
  //   maxLength: 100,
  // },

  name:{
    minLength: 2,
    maxLength: 50,
  },
};

export const whiteSpaceValidation = (v: string): boolean | string => {
  const { t, i18n } = useTranslation();
  const whiteSpaceRegx = /^\s+|\s+$/g;
  return !whiteSpaceRegx.test(v) || t("labels.WhiteSpaceErrMsg");
};

export const numberValidation = (v: string): boolean | string => {
  const { t, i18n } = useTranslation();
 
  const numberRegx = /^[0-9]*$/g;
  if (v) {
    return numberRegx.test(v) || t("labels.NumErrMsg");
  } else return true;
};

export const alphabetsValidation = (v: string): boolean | string => {
  const { t, i18n } = useTranslation();

  const alphabetsRegx = /^[a-zA-Z\s]*$/;
  return alphabetsRegx.test(v) ||t("labels.AlphabetsErrMsg");
};

export const emailValidation = (v: string): boolean | string => {
  const { t, i18n } = useTranslation();

  const emailRegx = /^[a-z-0-9_+.-]+\@([a-z0-9-]+\.)+[a-z0-9]{2,7}$/i;
  if (v) {
    return emailRegx.test(v) || t("labels.EmailErrMsg");
  } else return true;
};

export const alphaNumericValidation = (v: string): boolean | string => {
  const { t, i18n } = useTranslation();

  const alphabetsRegx = /^[A-Za-z0-9]*$/;
  return alphabetsRegx.test(v) || t("labels.InvalidFormat");
};

export const alphaNumericValidationWithSpace = (
  v: string,
): boolean | string => {
  const { t, i18n } = useTranslation();

  const alphabetsRegx = /^[A-Za-z0-9\s]*$/;
  return alphabetsRegx.test(v) || t("labels.InvalidFormat");
};

export const getMinLengthMessage = (length: number): string => {
  const { t, i18n } = useTranslation();

  return `${t("labels.minLength")} ${length} ${t("labels.charactersRequired")}.`;
};
export const getMaxLengthMessage = (length: number): string => {
  const { t, i18n } = useTranslation();
  return `${t("labels.maximum")} ${length} ${t("labels.charactersRequired")}.`;
};

export const getRquiredMessage = (feild: string): string => {
  const { t} = useTranslation();
 
  return `${feild} ${t("labels.isRequired")}`;
};

export const minLengthValidation = (
  length: number,
): ValidationValueMessage<number> => {
  const { t} = useTranslation();
  return {value: length, message: getMinLengthMessage(length)};
};
export const maxLengthValidation = (
  length: number,
): ValidationValueMessage<number> => {
  const { t} = useTranslation();
  return {value: length, message: getMaxLengthMessage(length)};
};

export const requiredValidation = (
  label: string,
): ValidationValueMessage<boolean> => {
  const { t} = useTranslation();
  return {value: true, message: getRquiredMessage(label)};
};

export const floatNumberValidation = (v: string): boolean | string => {
  const { t} = useTranslation();
  const numberRegx_ = /^[-+]?([0-9]+(\.[0-9]+)?|\.[0-9]+)*$/g;
  return v == '+' || v == '-'
    ? t("labels.invalidNum")
    : numberRegx_.test(v) || t("labels.invalidNum");
};

export const notMorethan100 = (v: string): boolean | string => {
  const { t} = useTranslation();
  return parseFloat(v) < 100 || t("labels.allowed");
};

export const greaterThan = (
  v: string,
  v2: string,
  lable: string,
): boolean | string => {
  const { t} = useTranslation();
  return  parseFloat(v) <= 0  ?  `${t("labels.mini")} ${lable}` : parseFloat(v) <= parseFloat(v2) || `${t("labels.greaterThan")} ${lable}`;
};
