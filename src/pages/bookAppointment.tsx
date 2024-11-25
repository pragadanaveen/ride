import React, { Fragment, useState, useEffect } from 'react';
import {
  ScrollView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';
import { GeneralProps } from '../interfaces/generalProps';
import { Route } from '@react-navigation/native';
import { NavBarPatient } from '../common/commonComponents';
import { MainContainer, SubContainer } from '../components/commonViews';
import { H14fontRegularWhite, H8fontMediumBlack } from '../components/commonText';
import TimeAndDate from './timeAndDate';
import Checkout from './checkout';
import Payment from './payment';
import { screenName } from '../utils/screenName';
import { tab } from '../utils/constant';
import { p0, ph1, ph10, pt0, pt10 } from '../common/commonStyles';
import { colors } from '../utils/colors';
import { useTranslation } from 'react-i18next';
import { useIsFocused } from '@react-navigation/native';
import LanguageCheck from '../Language Settings/LanguageCheck';




interface Props extends GeneralProps {
  route: Route<string, object | undefined>;
}
const BookAppointment: React.FC<Props> = ({ navigation, route }): JSX.Element => {
  const { t, i18n } = useTranslation();
  const isRTL = LanguageCheck(); const [selectedtab, setSelectedTab] = useState<string>(t("labels.TimeAndDate"))
  const isFocused = useIsFocused();

  useEffect(() => {
    setSelectedTab(t("labels.TimeAndDate")); // Set the selectedTab to 'Appointments'
  }, [isFocused]);
  return (
    // <Fragment>
    //   <MainContainer>
    //     <View style={{ flex: 1 }}>

    //       <NavBarPatient title={t("labels.TimeAndDate")} />

    //       <SubContainer style={[p0, ph1, { backgroundColor: colors.background }]}>
    //         {isRTL ?
    //           <View style={{ alignItems: 'flex-end' }}>
    //             <FlatList
    //               horizontal={true}
    //               showsHorizontalScrollIndicator={false}
    //               contentContainerStyle={[pt10, ph10, { backgroundColor: colors.background }]}
    //               data={tab.slice().reverse()}
    //               renderItem={({ item, index }) => (
    //                 <TouchableOpacity
    //                   onPress={() => setSelectedTab(t(item.name))}
    //                   style={{}}>
    //                   <H8fontMediumBlack
    //                     style={[
    //                       styles.tabButtonStyle,
    //                       {
    //                         backgroundColor:
    //                           selectedtab == t(item.name) ? '#0DD8F9' : null,
    //                         color: selectedtab == t(item.name) ? '#fff' : '#000',
    //                       },
    //                     ]}>
    //                     {t(item.name)}
    //                   </H8fontMediumBlack>
    //                 </TouchableOpacity>
    //               )}
    //             />
    //           </View>
    //           : <View>
    //             <FlatList
    //               horizontal={true}
    //               showsHorizontalScrollIndicator={false}
    //               contentContainerStyle={[pt10, ph10, { backgroundColor: colors.background }]}
    //               data={tab}
    //               renderItem={({ item, index }) => (
    //                 <TouchableOpacity
    //                   onPress={() => setSelectedTab(t(item.name))}
    //                   style={{}}>
    //                   <H8fontMediumBlack
    //                     style={[
    //                       styles.tabButtonStyle,
    //                       {
    //                         backgroundColor:
    //                           selectedtab == t(item.name) ? '#0DD8F9' : null,
    //                         color: selectedtab == t(item.name) ? '#fff' : '#000',
    //                       },
    //                     ]}>
    //                     {t(item.name)}
    //                   </H8fontMediumBlack>
    //                 </TouchableOpacity>
    //               )}
    //             />
    //           </View>
    //         }
    //         {selectedtab == t("labels.TimeAndDate") ? (
    //           <TimeAndDate />
    //         ) : selectedtab == t("labels.checkout") ? (
    //           <Checkout
    //             onpress={() =>
    //               navigation.navigate(screenName.DoctorProfile as any)
    //             }
    //           />
    //         ) : (
    //           <Payment />
    //         )}
    //       </SubContainer>




    //       <TouchableOpacity
    //         style={[
    //           styles.footerButtonStyle, { flexDirection: isRTL ? 'row-reverse' : 'row' },
    //           {
    //             justifyContent:
    //               selectedtab != t("labels.checkout") ? 'center' : 'space-between',
    //             alignItems: 'center', marginBottom: selectedtab != t("labels.checkout") ? '18%' : '45%'
    //           },
    //         ]} >
    //         {selectedtab == t("labels.checkout") && (
    //           <H14fontRegularWhite>{t("labels.total")}- $75</H14fontRegularWhite>
    //         )}
    //         <H14fontRegularWhite>
    //           {selectedtab == t("labels.Payment") ? t("labels.ConfirmandPay") : t("labels.continue")}
    //         </H14fontRegularWhite>
    //       </TouchableOpacity>

    //     </View>
    //   </MainContainer>
    // </Fragment>



    <Fragment>
      <MainContainer>
        <ScrollView>
          <NavBarPatient title={t("labels.TimeAndDate")} />
          <SubContainer style={[p0, ph1, { backgroundColor: colors.background }]}>

                  <View style={[pt10, ph10, { backgroundColor: colors.background, flexDirection : isRTL ? 'row-reverse' : 'row' }]}>
                    {tab.map((item, index) => (
                      <TouchableOpacity
                        key={index}
                        onPress={() => setSelectedTab(t(item.name))}
                        style={{
                          // Add your custom styles here for each TouchableOpacity
                        }}>
                        <H8fontMediumBlack
                          style={[
                            styles.tabButtonStyle,
                            {
                              backgroundColor:
                                selectedtab == t(item.name) ? '#0DD8F9' : null,
                              color: selectedtab == t(item.name) ? '#fff' : '#000',
                            },
                          ]}>
                          {t(item.name)}
                        </H8fontMediumBlack>
                      </TouchableOpacity>
                    ))}
                  </View>
                
              


            {selectedtab == t("labels.TimeAndDate") ? (
              <TimeAndDate />
            ) : selectedtab == t("labels.checkout") ? (
              <Checkout
                onpress={() =>
                  navigation.navigate(screenName.DoctorProfile as any)
                }
              />
            ) : (
              <Payment />
            )}
          </SubContainer>

          <TouchableOpacity
            style={[
              styles.footerButtonStyle,
              {
                flexDirection : isRTL ? 'row-reverse' : 'row',
                justifyContent:
                  selectedtab != 'Checkout' ? 'center' : 'space-between',
                alignItems: 'center',
              },
            ]}>
            {selectedtab == 'Checkout' && (
              <H14fontRegularWhite>Total - $75</H14fontRegularWhite>
            )}
            <H14fontRegularWhite>
              {selectedtab == 'Payment' ? 'Confirm and Pay' : 'CONTINUE'}
            </H14fontRegularWhite>
          </TouchableOpacity>
        </ScrollView>
      </MainContainer>
    </Fragment>

  );
};

export default BookAppointment;

const styles = StyleSheet.create({
  tabButtonStyle: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    overflow: 'hidden',
    borderRadius: 20,
    marginRight: 10,
  },
  footerButtonStyle: {
    marginTop: 15,
    bottom: 10,
    height: 45,
    backgroundColor: '#1B5A90',
    marginHorizontal: 12,
    borderRadius: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
});

