import React, { useState } from 'react';
import { TextInput, View, TouchableOpacity, StyleSheet } from 'react-native';
import {
  CardSurface,
  CommonInput,
  CommonLineDotted,
  CommonLineDottedInner,
} from '../../components/commonViews';
import {
  H14fontRegularWhite,
  H30fontRegularLightBlack2,
  H8fontMediumBlack,
} from '../../components/commonText';
import { colors } from '../../utils/colors';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/AntDesign';
import {
  mh10,
  mt15,
  mv10,
  ph15,
  pl10,
  pl13,
  pr10,
} from '../../common/commonStyles';
import { useTranslation } from 'react-i18next';
import LanguageCheck from '../../Language Settings/LanguageCheck';

interface Props { }

const Pricing: React.FC<Props> = ({ }): JSX.Element => {
  const { t } = useTranslation();
  const isRTL = LanguageCheck();
  const options = [
    { name: t('labels.male'), value: 'male', isSeleted: false },
    { name: t('labels.customPrice'), value: 'custome', isSeleted: false },
  ];

  const [priceOptions, setOptions] = useState(options);
  const [price, setPrice] = useState('');

  const textBoxField = (label: string, showAdd: boolean) => {
    const isRTL = LanguageCheck();
    const leftOrRight = isRTL ? { left: 5 } : { right: 5 };

    return (
      <View>
        {label ? (
          <H30fontRegularLightBlack2 style={[mt15,{textAlign:isRTL?'right':'left'}]}>
            {label}
          </H30fontRegularLightBlack2>
        ) : null}
        <CommonInput style={{ height: 35 }}>
          <TextInput style={[styles.inputStyle, { textAlign: isRTL ? 'right' : 'left' }, isRTL ? pr10 : pl10]} />
          {showAdd ? (
            <TouchableOpacity onPress={() => { }} style={[styles.addIconsStyle, leftOrRight]}>
              <Icon name="plus" size={24} color={'white'} />
            </TouchableOpacity>
          ) : null}
        </CommonInput>
      </View>
    );
  };

  return (
    <CardSurface style={[mh10, ph15,styles.container]}>
      <H8fontMediumBlack style={{ paddingTop: 10, paddingBottom: 5,textAlign:isRTL?'right':'left'}}>{t('labels.pricing')}</H8fontMediumBlack>
      {priceOptions.map((item, index) => {
        return (
          <TouchableOpacity
            style={isRTL ? styles.rtloptionsStyle : styles.optionsStyle}
            onPress={() => setPrice(item.value)} key={index}>
            <View
              style={[
                styles.iconStyle,
                {
                  marginRight: isRTL ? 0 : 5,
                  marginLeft: isRTL ? 5 : 0,


                },
                price === item.value ? { backgroundColor: colors.ligtBlue } : {},
              ]}
            >
              <Icon1 name="check" size={15} color={colors.white} />
            </View>
            <H30fontRegularLightBlack2 style={{ fontSize: 12 }}>{item.name}</H30fontRegularLightBlack2>
          </TouchableOpacity>
        );
      })}
      <View style={{ paddingTop: 20 }} />
      {textBoxField('', false)}
      <CommonLineDotted style={mv10}>
        <CommonLineDottedInner />
      </CommonLineDotted>
      {textBoxField(t('labels.services'), true)}
      {textBoxField(t('labels.specialization'), true)}
      <TouchableOpacity style={styles.nextButtonStyle}>
        <H14fontRegularWhite>{t('labels.next')}</H14fontRegularWhite>
      </TouchableOpacity>
    </CardSurface>
  );
};
export default Pricing;

const styles = StyleSheet.create({
  nextButtonStyle: {
    height: 45,
    backgroundColor: '#1B5A90',
    marginVertical: 10,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  iconStyle: {
    height: 20,
    width: 20,
    borderRadius: 50,
    borderColor: colors.borderTextColor,
    borderWidth: 1,
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center',

  },
  optionsStyle: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  rtloptionsStyle: {
    flexDirection: 'row-reverse',
    marginVertical: 5,

  },
  inputStyle: {
    width: '100%',
    alignItems:'center',
    flex:1
  },
  addIconsStyle: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: '#0dcaf0',
    position: 'absolute',
    top: 5,
  },
  container: {

    backgroundColor:colors.white
  },
});

