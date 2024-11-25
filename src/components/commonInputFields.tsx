import React, { useState } from 'react';
import { Platform, StyleSheet, TextInput, View } from 'react-native';
import { ml10 } from '../common/commonStyles';
import { colors } from '../utils/colors';
import { FormErrorMessage } from './commonText';
import { CardSurface, RowView } from './commonViews';
import { useTranslation } from 'react-i18next';
import { labels } from '../utils/labels';
import LanguageCheck from '../Language Settings/LanguageCheck';


interface InputFieldsProps {
  value: string;
  placeholder?: string;
  onChangeText: CallableFunction;
  image: JSX.Element;
  errorMessage?: string;
  isisRTL: boolean
}

export const InputFields: React.FC<InputFieldsProps> = ({
  value,
  placeholder,
  onChangeText,
  image,
  errorMessage,
}) => {
  const [selection, setSelection] = useState<any>(
    Platform.OS === 'android' ? { start: 0 } : null,
  );
  const { t } = useTranslation();
  const isRTL = LanguageCheck(); 

  const onFocus = () => {
    if (Platform.OS === 'android') {
      setSelection(null);
      // this.setState({ selection:null });
    }
  };

  const onBlur = () => {
    if (Platform.OS === 'android') {
      setSelection({ start: 0, end: 0 });
    }
  };

  return (
    <>

      <RowView style={styles.testBoxRowStyle}>


        {isRTL ?
          <>
            <View>
              <CardSurface style={[styles.cardSurface,{left:isRTL?0:8}]}>{image}</CardSurface>
            </View>
            <TextInput
              onFocus={() => onFocus()}
              onBlur={() => onBlur()}
              selection={selection}
              style={{ flex: 1 ,textAlign:'right'}}
              placeholder={placeholder}
              value={value}
              placeholderTextColor={'#adb5bd'}
              secureTextEntry={placeholder == (t("labels.password")) ? true : false}
              onChangeText={val => onChangeText(val)}
            />


          </> :
          <>
            <TextInput
              onFocus={() => onFocus()}
              onBlur={() => onBlur()}
              selection={selection}
              style={{ flex: 1 }}
              placeholder={placeholder}
              value={value}
              placeholderTextColor={'#adb5bd'}
              secureTextEntry={placeholder ==  (t("labels.password")) ? true : false}
              onChangeText={val => onChangeText(val)}
            />

            <View>
              <CardSurface style={styles.cardSurface}>{image}</CardSurface>
            </View>
          </>

        }

      </RowView>
      {errorMessage ? (
        <FormErrorMessage style={ml10}>{errorMessage}</FormErrorMessage>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  testBoxRowStyle: {
    borderRadius: 35,
    borderColor: colors.borderTextColor,
    borderWidth: 0.5,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    marginTop: 12,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 0.4
  },
  cardSurface: {
  
    height: 42,
    width: 42,
    borderRadius: 21,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
