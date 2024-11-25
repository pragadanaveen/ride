import { Route } from '@react-navigation/native';
import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import { Row, Table } from 'react-native-reanimated-table';
import LanguageCheck from '../Language Settings/LanguageCheck';
import { NavBarPatient } from '../common/commonComponents';
import { pl10, pl5, pr10, pr5 } from '../common/commonStyles';
import {
  H10fontRegularBlack,
  H10fontRegularLight,
  H9fontMediumBlack,
} from '../components/commonText';
import {
  CommonLineInvoice,
  MainContainer,
  RowView,
} from '../components/commonViews';
import { LogoIcon } from '../components/svgIcons';
import { GeneralProps } from '../interfaces/generalProps';
import { tableData, tableHead, tableTitle } from '../utils/constant';
import { fontFamily } from '../utils/fontFamily';


interface Props extends GeneralProps {
  route: Route<string, object | undefined>;
}
const InvoiceView: React.FC<Props> = ({ navigation }): JSX.Element => {
  const { t } = useTranslation();
  const isRTL = LanguageCheck();
  const englishColumnOrder = [0, 1, 2, 3]; // For English: Description, Quantity, VAT, Total
  const arabicColumnOrder = [3, 2, 1, 0];
  const selectedColumnOrder = isRTL ? arabicColumnOrder : englishColumnOrder;
  const rearrangedTableHead = selectedColumnOrder.map((index) => tableHead[index]);
  const translatedTableTitle = selectedColumnOrder.map((index) => tableTitle[index]);
  const translatedTableData = selectedColumnOrder.map((index) => tableData[index])
  return (
    <Fragment>
      <MainContainer style={{ backgroundColor: 'white' }}>
        <NavBarPatient title={t('labels.invoices')} />
        <RowView style={{ marginTop: 20, marginHorizontal: 15, flexDirection: isRTL ? 'row-reverse' : 'row' }} >
          <LogoIcon height={40} width={160} />
          <View>
            <View style={{ flexDirection: isRTL ? 'row-reverse' : 'row', alignSelf: 'flex-end' }}>
              <H10fontRegularBlack style={{ marginLeft: 0 }}>
                {t('labels.order')}
              </H10fontRegularBlack>
              <H10fontRegularLight>{'#00124'}</H10fontRegularLight>
            </View>
            <View style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
              <H10fontRegularBlack style={{ paddingRight: 4 }}>
                {t('labels.issued')}
              </H10fontRegularBlack>
              <H10fontRegularLight>{'20/07/2019'}</H10fontRegularLight>
            </View>
          </View>
        </RowView>
        <View style={{ paddingHorizontal: 15 }}>
          <CommonLineInvoice />
          <RowView style={{ paddingTop: 20, flexDirection: isRTL ? 'row-reverse' : 'row' }} >
            <View>
              <H9fontMediumBlack style = {{textAlign:isRTL?'right':'left'}}>{t('labels.from')}</H9fontMediumBlack>
              <H10fontRegularLight>{t('labels.DoctorName1')}</H10fontRegularLight>
              <H10fontRegularLight>
                {t('labels.invoiceViewAddress')}
              </H10fontRegularLight>
              <H10fontRegularLight>
                {t('labels.invoiceDistrict')}
              </H10fontRegularLight>
              <H10fontRegularLight>{t('labels.invoiceCity')}</H10fontRegularLight>
              <H9fontMediumBlack style={{ paddingTop: 15 ,textAlign:isRTL?'right':'left'}}>
                {t('labels.to')}
              </H9fontMediumBlack>
              <H10fontRegularLight>{t('labels.patientName1')}</H10fontRegularLight>
              <H10fontRegularLight>
                {t('labels.invoiceViewAddress')}
              </H10fontRegularLight>
              <H10fontRegularLight>
                {t('labels.invoiceDistrict')}
              </H10fontRegularLight>
              <H10fontRegularLight>{t('labels.invoiceCity')}</H10fontRegularLight>
            </View>
            <View
              style={[{ height: 100, width: 170, backgroundColor: '#F6F6F6' }, isRTL ? pr10 : pl10]}>
              <H9fontMediumBlack style={{ paddingTop: 15 ,textAlign:isRTL?'right':'left'}}>
                {t('labels.payment')}
              </H9fontMediumBlack>
              <H10fontRegularLight style = {{textAlign:isRTL?'right':'left'}}>{t('labels.debitCard')}</H10fontRegularLight>
              <H10fontRegularLight style={{ textAlign: isRTL ? 'right' : 'left' }}>{t('labels.accountNum')}</H10fontRegularLight>
              <H10fontRegularLight style = {{textAlign:isRTL?'right':'left'}}>{t('labels.bankName')}</H10fontRegularLight>
            </View>
          </RowView>
          <View style={{ paddingTop: 20 }}>
            <Table borderStyle={{ borderWidth: 1, borderColor: '#ced4da', }}>
              <Row
                data={rearrangedTableHead.map((key) => t(key))}
                flexArr={[2, 1, 1, 1]}
                style={styles.head}
                textStyle={[styles.text, isRTL ? pr10 : pl10,{textAlign:isRTL?'right':'left'}]}
              />
              <Row
                data={translatedTableTitle.map((key) => t(key))}
                flexArr={[2, 1, 1, 1]}
                style={styles.head}
                textStyle={[{ ...styles.textGray }, { textAlign: isRTL ? 'right' : 'left' }, isRTL ? pr5 : pl5]}
              />
              <Row
                data={translatedTableData.map((key) => t(key))}
                flexArr={[2, 1, 1, 1]}
                style={styles.head}
                textStyle={[{ ...styles.textGray }, { textAlign: isRTL ? 'right' : 'left' }, isRTL ? pr5 : pl5]} />
            </Table>
          </View>
          <RowView style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
            <View></View>
            <View style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
              <H10fontRegularBlack style={{ paddingTop: 15, paddingRight: 30 }}>
                {t('labels.subTotal')}
              </H10fontRegularBlack>
              <H10fontRegularLight style={{ paddingTop: 15, paddingRight: 5 }}>
                {'$350'}
              </H10fontRegularLight>
            </View>
          </RowView>
          <CommonLineInvoice />
          <RowView style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
            <View></View>
            <View style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
              <H10fontRegularBlack style={{ paddingTop: 15, paddingRight: 30 }}>
                {t('labels.discount')}
              </H10fontRegularBlack>
              <H10fontRegularLight style={{ paddingTop: 15, paddingRight: 5 }}>
                {'-10%'}
              </H10fontRegularLight>
            </View>
          </RowView>
          <CommonLineInvoice />
          <RowView style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
            <View></View>
            <View style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
              <H10fontRegularBlack style={{ paddingTop: 15, paddingRight: 30 }}>
                {t('labels.totalAmount')}
              </H10fontRegularBlack>
              <H10fontRegularLight style={{ paddingTop: 15, paddingRight: 5 }}>
                {'$315'}
              </H10fontRegularLight>
            </View>
          </RowView>
          <H9fontMediumBlack style = {{textAlign:isRTL?'right':'left'}}>{t('labels.otherInformation')}</H9fontMediumBlack>
          <H10fontRegularLight style = {{textAlign:isRTL?'right':'left'}}>
            {t('labels.text')}
          </H10fontRegularLight>
        </View>
      </MainContainer>
    </Fragment>
  );
};
export default InvoiceView;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#fff'
  },
  head: {
    height: 30
  },
  textGray: {
    fontSize: 10,
    fontFamily: fontFamily.fontRegular,
    color: '#777777',
    // paddingLeft: 5,

  },
  title: {
    flex: 1
  },
  row: {
    height: 28
  },
  text: {
    fontSize: 10,
    fontFamily: fontFamily.fontMedium,
    color: 'black',

  },
});
