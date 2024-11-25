import React, { useState } from 'react';
import { TextInput, View, TouchableOpacity, StyleSheet } from 'react-native';
import { CardSurface, CommonInput } from '../../components/commonViews';
import {
  H14fontRegularWhite,
  H30fontRegularLightBlack2,
  H8fontMediumBlack,
} from '../../components/commonText';
import { colors } from '../../utils/colors';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import { mh10,mt15,ph15, pl10, pr10, pt10 } from '../../common/commonStyles';
import { useTranslation } from 'react-i18next';
import LanguageCheck from '../../Language Settings/LanguageCheck';


interface Props { }
const defaultList = { registrations: '', year: '' };
const Registrations: React.FC<Props> = ({ }): JSX.Element => {
  const [registrationList, setList] = useState([defaultList]);
  const { t } = useTranslation();
  const isRTL = LanguageCheck();    



  const textBoxField = (
    label: string,
    value: string,
    index: number,
    componentKey: string,
  ) => {
    return (
      <View>
        <H30fontRegularLightBlack2 style={mt15}>
          {label}
        </H30fontRegularLightBlack2>
        <CommonInput style={{ height: 35 }}>
          <TextInput
            onChangeText={txt => {
              var list = registrationList;
              list[index][componentKey] = txt;
              setList([...list]);
            }}
            value={value}
            style={[styles.inputStyle,{textAlign:isRTL?'right':'left'},isRTL?pr10:pl10]}
          />
        </CommonInput>
      </View>
    );
  };

  const deleteIcons = (index: number) => {
    return (
      <TouchableOpacity
        onPress={() => {
          if (registrationList.length > 1) {
            registrationList.splice(index, 1);
            setList([...registrationList]);
          }
        }}
        style={[styles.deleteIconStyle,{alignSelf:isRTL?'flex-start':'flex-end'}]}>
        <Icon1 name="trash-o" size={18} color={'white'} />
      </TouchableOpacity>
    );
  };

  return (

    <CardSurface style={[mh10, ph15,styles.containerStyle]}>
      <H8fontMediumBlack style={[pt10,{textAlign:isRTL?'right':'left'}]}>{t('labels.registration')}</H8fontMediumBlack>
      {registrationList.map((item, index) => {
        return (
          <View key={index}>
            {textBoxField(
              t('labels.registration'),
              item.registrations,
              index,
              'registrations',
            )}
            {textBoxField(t('labels.year'), item.year, index, 'year')}
            {registrationList.length > 1 ? deleteIcons(index) : null}
          </View>
        );
      })}
      <TouchableOpacity
        onPress={() => {
          registrationList.push(defaultList);
          setList([...registrationList]);
        }}
        style={[styles.addIconsStyle,{alignSelf:isRTL?'flex-end':'flex-start'}]}>
        <Icon name="plus" size={24} color={'white'} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.nextButtonStyle}>
        <H14fontRegularWhite>{t('labels.done')}</H14fontRegularWhite>
      </TouchableOpacity>
    </CardSurface>
  );
};
export default Registrations;
const styles = StyleSheet.create({
  inputStyle: {  width: '100%' ,alignItems:'center',flex:1},
  addIconsStyle: {
    height: 28,
    width: 28,
    borderRadius: 15,
    backgroundColor: '#0dcaf0',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
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
  deleteIconStyle: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: colors.red,
    paddingLeft: 8,
    paddingTop: 5,
    marginTop: 10,
  
  },
  containerStyle: { 
    backgroundColor:colors.white
  }
});

