import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import LanguageCheck from '../Language Settings/LanguageCheck';
import { ml5, mr5, ph15, pl20, pl5, pr20, pr5, pt10 } from '../common/commonStyles';
import {
  H13fontRegularGray,
  H14fontMediumBlack,
  H8fontMediumBlack,
  H9fontRegularGray,
  TCMessage,
} from '../components/commonText';
import { RowView } from '../components/commonViews';
import { CreditCard, Paypal, PriceCheck } from '../components/svgIcons';
import { colors } from '../utils/colors';
import { DevWidth } from '../utils/device';


interface Props { }
const Payment: React.FC<Props> = ({ }): JSX.Element => {
  const { t, i18n } = useTranslation();
  const isRTL = LanguageCheck(); const [paypal, setPaypal] = useState(false);
  const [creditcard, setcreditcard] = useState(false);

  const labelWithTextBox = (label: string, placeholder?: string) => {
    return (
      <>
        <View style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
          <H13fontRegularGray>{label} </H13fontRegularGray>
          <Text style={styles.labelTextStyle}>*</Text>
        </View>
        <View
          style={styles.textBoxBorderStyle}>
          <TextInput
            style={[styles.textBoxStyle, isRTL ? pr5 : pl5, { textAlign: isRTL ? 'right' : 'left' }]}
            placeholder={placeholder}
          />
        </View>
      </>
    );
  };

  return (
    <KeyboardAvoidingView>
      <View style={[ph15, pt10]}>
        <H8fontMediumBlack style={{ textAlign: isRTL ? 'right' : 'left' }}>{t('labels.paymentInformation')}</H8fontMediumBlack>
        <View style={styles.constainer}>
          <RowView style={{ alignItems: 'center', paddingBottom: 15, flexDirection: isRTL ? 'row-reverse' : 'row' }}>
            <RowView style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
              <TouchableOpacity
                onPress={() => setcreditcard(!creditcard)}
                style={[styles.radioBtnStyle, isRTL ? ml5 : mr5]}>
                {creditcard == true && (
                  <View style={{ height: 20, width: 20, borderRadius: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.ligtBlue }}>
                    <PriceCheck height={10} width={10} />
                  </View>
                )}
              </TouchableOpacity>
              <H9fontRegularGray>{t('labels.creditCard')}</H9fontRegularGray>
            </RowView>
            <View>
              <CreditCard height={50} width={50} />
            </View>
          </RowView>
          {labelWithTextBox(t('labels.nameOnCard'))}
          {labelWithTextBox(t('labels.cardNum'))}
          <RowView style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
            <View style={styles.expiryMonthAndYearStyles}>
              {labelWithTextBox((t('labels.expiryMonth')), (t('labels.MM')))}
            </View>
            <View style={styles.expiryMonthAndYearStyles}>
              {labelWithTextBox((t('labels.expiryMonth')), (t('labels.YY')))}
            </View>
          </RowView>
          {labelWithTextBox((t('labels.CVV')), '123')}
        </View>
        <View style={styles.paypalContainer}>
          <RowView style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
            <RowView style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
              <TouchableOpacity
                onPress={() => setPaypal(!paypal)}
                style={[styles.radioBtnStyle, isRTL ? ml5 : mr5]}>
                {paypal == true && (
                  <View style={{ height: 20, width: 20, borderRadius: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.ligtBlue }}>
                    <PriceCheck height={10} width={10} />
                  </View>
                )}
              </TouchableOpacity>
              <H9fontRegularGray>{t('labels.paypal')}</H9fontRegularGray>
            </RowView>
            <View>
              <Paypal height={20} width={20} />
            </View>
          </RowView>
        </View>
        <View style={[{ flexDirection: isRTL ? 'row-reverse' : 'row' }, isRTL ? pr20 : pl20]}>
          <H14fontMediumBlack> {t('labels.readAndAccept')} </H14fontMediumBlack>
          <TouchableOpacity>
            <TCMessage>{t('labels.tcMessage')} </TCMessage>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Payment;

const styles = StyleSheet.create({
  constainer: {
    backgroundColor: '#fff',
    height: 370,
    marginTop: 10,
    borderRadius: 10,
    elevation: 3,
    padding: 15,
  },
  radioBtnStyle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#777777',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paypalContainer: {
    marginVertical: 20,
    padding: 10,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
  },
  paymentTypeLogo: {
    height: 21,
    width: 21
  },
  masterCardImageStyle: {
    height: 30,
    width: 30
  },
  expiryMonthAndYearStyles: {
    width: DevWidth / 2.5
  },
  paypalLogoStyle: {
    height: 20,
    width: 20
  },
  textBoxBorderStyle: {
    height: 35,
    marginTop: 5,
    marginBottom: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#CFCFCF',
  },
  labelTextStyle: {
    color: 'red',
    fontSize: 9
  },
  textBoxStyle: {
    top: 2,
    fontSize: 12
  }
});
