import { Route } from '@react-navigation/native';
import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import LanguageCheck from '../Language Settings/LanguageCheck';
import { NavBarPatient } from '../common/commonComponents';
import { p5, ph10, pt10 } from '../common/commonStyles';
import {
  H10fontRegularWhite,
  H14fontRegularBlackk,
  H8fontMediumBlack,
  H9fontRegularGray,
} from '../components/commonText';
import {
  CardSurface,
  MainContainer,
  RowView
} from '../components/commonViews';
import { CalendarIcon, Patient4 } from '../components/svgIcons';
import { GeneralProps } from '../interfaces/generalProps';
import { DevWidth } from '../utils/device';
import { screenName } from '../utils/screenName';


interface Props extends GeneralProps {
  route: Route<string, object | undefined>;
}
const InvoiceList: React.FC<Props> = ({ navigation }): JSX.Element => {
  const { t, i18n } = useTranslation();
  const isRTL = LanguageCheck();
  return (
    <Fragment>
      <MainContainer>
        <NavBarPatient title={t('labels.invoices')} />
        <View style={styles.constaier}>
          <CardSurface style={styles.cardSurfaceStyle}>
            <RowView style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
              <H14fontRegularBlackk>{t('labels.invoiceNum')}</H14fontRegularBlackk>
              <View style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                <View style={p5}>
                  <CalendarIcon height={12} width={12} />
                </View>
                <H9fontRegularGray>{t('labels.invoiceDate')}</H9fontRegularGray>
              </View>
            </RowView>
            <View style={{ height: 1, width: '100%', marginTop: 10, borderRadius: 1, borderWidth: 1, borderColor: '#DBDBDB', borderStyle: 'dashed', zIndex: 0, }}>
              <View style={{ position: 'absolute', left: 0, bottom: 0, width: '100%', height: 1, backgroundColor: 'white', zIndex: 1 }} />
            </View>
            {/* <CommonLineDotted>
              <CommonLineDottedInner />
            </CommonLineDotted> */}
            <RowView style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
              <View style={[styles.detailsContainer, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                <View style={styles.profileImageStyle}>
                  <Patient4 height={60} width={60} />
                </View>
                <View style={[ph10, pt10]}>
                  <View style={[styles.nameAndPriceDetails, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                    <H8fontMediumBlack>{t('labels.patientName1')}</H8fontMediumBlack>
                    <H8fontMediumBlack>{t('labels.invoiceAmount')}</H8fontMediumBlack>
                  </View>
                  <View style={[styles.idAndViewDetails, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                    <H9fontRegularGray>{t('labels.invoiceTxt')}</H9fontRegularGray>
                    <View style={{ marginLeft: isRTL ? 0 : 125, marginRight: isRTL ? 125 : 0 }}>
                      <TouchableOpacity
                        style={styles.viewButtonStyle}
                        onPress={() =>
                          navigation.navigate(screenName.InvoiceView)
                        }>
                        <H10fontRegularWhite>{t('labels.view')}</H10fontRegularWhite>
                      </TouchableOpacity>
                    </View>

                  </View>


                </View>
              </View>
            </RowView>
          </CardSurface>
        </View>
      </MainContainer>
    </Fragment>
  );
};
export default InvoiceList;
const styles = StyleSheet.create({
  constaier: {
    marginVertical: 20,
    marginHorizontal: 20,
  },
  cardSurfaceStyle: {
    backgroundColor: 'white',
    borderRadius: 10,
  },
  imageStyle: {
    height: 12,
    width: 12,
    paddingRight: 5,
  },
  detailsContainer: {
    padding: 5,
    alignItems: 'center'
  },
  profileImageStyle: {
    height: 60,
    width: 60,
    borderRadius: 60,
    overflow: 'hidden'
  },
  nameAndPriceDetails: {
    justifyContent: 'space-between'
  },
  idAndViewDetails: {
    paddingTop: 5,
    width: DevWidth / 1.8,

  },
  viewButtonStyle: {
    height: 30,
    width: 60,
    borderRadius: 40,
    backgroundColor: '#0DD8F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
