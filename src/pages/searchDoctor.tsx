import { Route } from '@react-navigation/native';
import React, { Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import LanguageCheck from '../Language Settings/LanguageCheck';
import { NavBarPatient } from '../common/commonComponents';
import { ml10, pt5 } from '../common/commonStyles';
import { H14fontRegularGray, H15fontMediumBlack } from '../components/commonText';
import { CardSurface, MainContainer } from '../components/commonViews';
import DoctorDetailsCard from '../components/doctorComponents';
import DoctorFilter from '../components/doctorFilter';
import { FilterIcon } from '../components/svgIcons';
import { GeneralProps } from '../interfaces/generalProps';
import { colors } from '../utils/colors';
import { searchMenuOptions } from '../utils/constant';
import { _testDoctorDetails } from '../utils/mockDetails';
import { screenName } from '../utils/screenName';

interface Props extends GeneralProps {
    route: Route<string, object | undefined>;
}
const SearchDoctor: React.FC<Props> = ({ navigation, route }): JSX.Element => {
    const [isModalVisible, setModalVisible] = useState(false);
    const { t } = useTranslation();
    const isRTL = LanguageCheck();
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    return (
        <Fragment>
            <MainContainer>
                <NavBarPatient title={t("labels.searchByDr")} />
                <View style={{ backgroundColor: 'white', padding: 10 }}>
                    {isRTL ? <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={{
                            transform: [{ scaleX: -1, }],
                            // Reverse the scroll direction
                        }}
                    >
                        {searchMenuOptions.map(({ Img, name }, index) => {
                            return (
                                <View key={index} style={{ transform: [{ scaleX: -1, }] }} >
                                    <TouchableOpacity style={{
                                        margin: 3, height: 37, borderWidth: 1, borderColor: '#D5D5D5D5', backgroundColor: '#fff', borderRadius: 30, paddingRight: 10, flexDirection: 'row-reverse'
                                    }}
                                        onPress={() => { toggleModal() }}>
                                        <CardSurface style={{
                                            borderRadius: 25,
                                            height: 25,
                                            width: 25,
                                            backgroundColor: colors.white,
                                            marginLeft: 7,
                                            marginVertical: 5,
                                            alignItems: 'center',
                                            justifyContent: 'center'

                                        }}>
                                            <Img height={15} width={16} />
                                        </CardSurface>
                                        <H14fontRegularGray style={{ alignSelf: 'center', marginLeft: 5 }}>{t(name)}</H14fontRegularGray>
                                    </TouchableOpacity>

                                </View>
                            );
                        })}
                    </ScrollView> :
                        <ScrollView horizontal={true}
                            showsHorizontalScrollIndicator={false}>
                            {searchMenuOptions.map(({ Img, name }, index) => {
                                return (
                                    <TouchableOpacity key= {index} style={{
                                        margin: 3, height: 37, borderWidth: 1, borderColor: '#D5D5D5D5', backgroundColor: '#fff', borderRadius: 30, paddingRight: 10, flexDirection: 'row'
                                    }}
                                        onPress={() => { toggleModal() }}>
                                        <CardSurface style={{
                                            borderRadius: 25,
                                            height: 25,
                                            width: 25,
                                            backgroundColor: colors.white,
                                            marginLeft: 7,
                                            marginVertical: 5,
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            <Img height={15} width={16} />
                                        </CardSurface>
                                        <H14fontRegularGray style={{ alignSelf: 'center', marginLeft: 5 }}>{t(name)}</H14fontRegularGray>
                                    </TouchableOpacity>
                                );
                            })}

                        </ScrollView>}
                    <H14fontRegularGray style={[{ paddingTop: 15,textAlign:isRTL?'right':'left'}]}>{t('labels.matchesFound')}</H14fontRegularGray>
                    <H15fontMediumBlack style={{textAlign:isRTL?'right':'left'}}>{t('labels.dentalSpecialist')}</H15fontMediumBlack>
                </View>
                <FlatList
                    data={_testDoctorDetails}
                    contentContainerStyle={[ml10, pt5]}
                    renderItem={({ item, index }) => {
                        return <DoctorDetailsCard
                            page={'search'}
                            details={item}
                            bookAnAppointment={() => {
                                navigation.navigate(screenName.BookAppointment);
                            }}
                            drProfileNavigation={() => {
                                navigation.navigate(screenName.DoctorProfile);
                            }}
                        />
                    }}
                />
                <View style={[styles.sortByImageStyle, { alignSelf: isRTL ? 'flex-start' : 'flex-end' }]}>
                    <FilterIcon />
                </View>
                <DoctorFilter modalClose={() => { setModalVisible(false) }} modalVisible={isModalVisible} />
            </MainContainer>
        </Fragment>
    )
}
export default SearchDoctor;
const styles = StyleSheet.create({
    datePickerStyle: {
        width: 230,
    },
    sortByImageStyle: {
        height: 100,
        width: 100,
        marginRight: 10,
        position: "absolute",
        bottom: 0
    }
});