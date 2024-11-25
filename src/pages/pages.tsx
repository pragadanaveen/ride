import { Route } from '@react-navigation/native';
import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import LanguageCheck from '../Language Settings/LanguageCheck';
import { NavBarPatient } from '../common/commonComponents';
import { alignItemsCenter, mb15, ph10, pt10, } from '../common/commonStyles';
import { H15fontMediumBlack, H7fontRegularBlack } from '../components/commonText';
import { CardSurface, CommonLineView, MainContainer, RowView } from '../components/commonViews';
import { RightArrow } from '../components/svgIcons';
import { GeneralProps } from '../interfaces/generalProps';
import { colors } from '../utils/colors';
import { menuBarOptions, menuOptionsAuth } from '../utils/constant';

interface Props extends GeneralProps {
    route: Route<string, object | undefined>;
}

const Pages: React.FC<Props> = ({ navigation, route }): JSX.Element => {
    const { t, i18n } = useTranslation();
  const isRTL = LanguageCheck();      const renderPages = (data, label: string) => {
        return (
            <View style={[pt10, ph10]}>
                <H7fontRegularBlack style = {{textAlign:isRTL?'right':'left'}}>{label}</H7fontRegularBlack>
                <CommonLineView style={mb15} />
                {data.map((item, index:number) => {
                    return (
                        <CardSurface key={index} style={[mb15]}>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate(item.screenName)
                                }} key={index}>
                                <RowView style={[alignItemsCenter, { flexDirection: isRTL ? 'row-reverse' : 'row' }]} >
                                    <View style={[alignItemsCenter, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                                        <CardSurface style={[styles.iconSurface, { marginRight: isRTL ? 0 : 25, marginLeft: isRTL ? 25 : 0 }]}>
                                            <Icon2
                                                name='pages'
                                                size={18}
                                                color={colors.white}
                                            />
                                        </CardSurface>
                                        <H15fontMediumBlack style={{}}>{t(item.name)}</H15fontMediumBlack>
                                    </View>
                                    {isRTL ?
                                        <RightArrow height={17} width={10} style={{ transform: [{ rotate: '180deg' }] }} /> :
                                        <RightArrow height={17} width={10} />
                                    }
                                </RowView>
                            </TouchableOpacity>
                        </CardSurface>
                    );
                })}
            </View>
        )
    }


    return (
        <Fragment>
            <MainContainer>
                <NavBarPatient title={t('labels.pages')} />
                <ScrollView>
                    {renderPages(menuBarOptions, (t('labels.appPages')))}
                    {renderPages(menuOptionsAuth, (t('labels.authentication')))}
                </ScrollView>
            </MainContainer>
        </Fragment>
    )
}
export default Pages;

const styles = StyleSheet.create({
    iconSurface: {
        borderRadius: 25,
        height: 30,
        width: 30,
        backgroundColor: colors.facebook,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 0,
        paddingVertical: 0
    },
    iconStyle: {
        height: 17,
        width: 10,
    }
})