import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LanguageCheck from '../../Language Settings/LanguageCheck';
import { ml5, mr5, ph10, pl5, pr5, pt10, pt15, pt5 } from '../../common/commonStyles';
import {
    H14fontRegularBlackk,
    H8fontMediumBlack,
    H9fontRegularBlack,
    H9fontRegularGray,
} from '../../components/commonText';
import {
    CardSurface,
    CommonLineDotted,
    CommonLineDottedInner,
    RowView,
} from '../../components/commonViews';
import { AwesomeEye, Doctor1, Doctor2, Doctor3, Doctor4, MetroPrintor } from '../../components/svgIcons';
import { DevWidth } from '../../utils/device';
import { fontFamily } from '../../utils/fontFamily';

interface Props { }

const MedicalRecords: React.FC<Props> = ({ }): JSX.Element => {
    const { t, i18n } = useTranslation();
    const isRTL = LanguageCheck(); return (
        <View style={styles.container}>
            <CardSurface style={styles.cardSurface}>
                <RowView style={[pt5, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                    <H14fontRegularBlackk>{'#MR-0010'}</H14fontRegularBlackk>
                    <H9fontRegularGray>{t('labels.Nov14')}</H9fontRegularGray>
                </RowView>
                <CommonLineDotted>
                    <CommonLineDottedInner />
                </CommonLineDotted>
                <RowView style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                    <View style={[styles.detailsContainer, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                        <View style={styles.profileImageStyle}>
                            <Doctor1 height={60} width={100} />
                        </View>
                        <View style={ph10}>
                            <H8fontMediumBlack style={{textAlign:isRTL?'right':'left'}}>{t('labels.FavDoctorName')}</H8fontMediumBlack>
                            <RowView style={{ width: DevWidth / 1.6, paddingBottom: 5, flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                                <H9fontRegularGray style={pt5}>{t('labels.dental')}</H9fontRegularGray>
                                <H9fontRegularBlack style={pt5}>{t('labels.dentalFilling')}</H9fontRegularBlack>
                            </RowView>
                            <H9fontRegularBlack style={[pt5,{textAlign:isRTL?'right':'left'}]}>{t('labels.dentalTest')}</H9fontRegularBlack>
                            <View style={[styles.buttonContainer, { flexDirection: isRTL ? 'row-reverse' : 'row' }, pt15]}>
                                <TouchableOpacity style={[styles.viewButtonStyle, isRTL ? ml5 : mr5]}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                                        <AwesomeEye height={10} width={15} />
                                        <Text style={[styles.viewTextStyle, isRTL ? pr5 : pl5]}>{t('labels.view')}</Text>
                                    </View>
                                </TouchableOpacity>
                                <View>
                                    <TouchableOpacity style={styles.printBtnStyle}>
                                        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                                            <MetroPrintor height={13} width={13} />
                                            <Text style={[styles.printTextStyle, isRTL ? pr5 : pl5]}>{t('labels.print')}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </RowView>
            </CardSurface>

            <CardSurface style={styles.cardSurface}>
                <RowView style={[pt5, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                    <H14fontRegularBlackk>{'#MR-0010'}</H14fontRegularBlackk>
                    <H9fontRegularGray>{t('labels.Nov14')}</H9fontRegularGray>
                </RowView>
                <CommonLineDotted>
                    <CommonLineDottedInner />
                </CommonLineDotted>
                <RowView style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                    <View style={[styles.detailsContainer, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                        <View style={{ height: 60, width: 60, borderRadius: 50, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', paddingLeft: 28 }}>
                            <Doctor2 height={60} width={100} />
                        </View>
                        <View style={ph10}>
                            <H8fontMediumBlack style={{textAlign:isRTL?'right':'left'}}>{t('labels.DoctorName1')}</H8fontMediumBlack>
                            <RowView style={{ width: DevWidth / 1.6, paddingBottom: 5, flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                                <H9fontRegularGray style={pt5}>{t('labels.dental')}</H9fontRegularGray>
                                <H9fontRegularBlack style={pt5}>{t('labels.dentalFilling')}</H9fontRegularBlack>
                            </RowView>
                            <H9fontRegularBlack style={[pt5,{textAlign:isRTL?'right':'left'}]}>{t('labels.dentalTest')}</H9fontRegularBlack>
                            <View style={[styles.buttonContainer, { flexDirection: isRTL ? 'row-reverse' : 'row' }, pt15]}>
                                <TouchableOpacity style={[styles.viewButtonStyle, isRTL ? ml5 : mr5]}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                                        <AwesomeEye height={10} width={15} />
                                        <Text style={[styles.viewTextStyle, isRTL ? pr5 : pl5]}>{t('labels.view')}</Text>
                                    </View>
                                </TouchableOpacity>
                                <View>
                                    <TouchableOpacity style={styles.printBtnStyle}>
                                        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                                            <MetroPrintor height={13} width={13} />
                                            <Text style={[styles.printTextStyle, isRTL ? pr5 : pl5]}>{t('labels.print')}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </RowView>
            </CardSurface>
            <CardSurface style={styles.cardSurface}>
                <RowView style={[pt5, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                    <H14fontRegularBlackk>{'#MR-0010'}</H14fontRegularBlackk>
                    <H9fontRegularGray>{t('labels.Nov14')}</H9fontRegularGray>
                </RowView>
                <CommonLineDotted>
                    <CommonLineDottedInner />
                </CommonLineDotted>
                <RowView style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                    <View style={[styles.detailsContainer, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                        <View style={{ height: 60, width: 60, borderRadius: 50, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', paddingRight: 15 }}>
                            <Doctor3 height={60} width={100} />
                        </View>
                        <View style={ph10}>
                            <H8fontMediumBlack style={{textAlign:isRTL?'right':'left'}}>{t('labels.doctorName2')}</H8fontMediumBlack>
                            <RowView style={{ width: DevWidth / 1.6, paddingBottom: 5, flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                                <H9fontRegularGray style={pt5}>{t('labels.dental')}</H9fontRegularGray>
                                <H9fontRegularBlack style={pt5}>{t('labels.dentalFilling')}</H9fontRegularBlack>
                            </RowView>
                            <H9fontRegularBlack style={[pt5,{textAlign:isRTL?'right':'left'}]}>{t('labels.dentalTest')}</H9fontRegularBlack>
                            <View style={[styles.buttonContainer, { flexDirection: isRTL ? 'row-reverse' : 'row' }, pt15]}>
                                <TouchableOpacity style={[styles.viewButtonStyle, isRTL ? ml5 : mr5]}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                                        <AwesomeEye height={10} width={15} />
                                        <Text style={[styles.viewTextStyle, isRTL ? pr5 : pl5]}>{t('labels.view')}</Text>
                                    </View>
                                </TouchableOpacity>
                                <View>
                                    <TouchableOpacity style={styles.printBtnStyle}>
                                        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                                            <MetroPrintor height={13} width={13} />
                                            <Text style={[styles.printTextStyle, isRTL ? pr5 : pl5]}>{t('labels.print')}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </RowView>
            </CardSurface>
            <CardSurface style={styles.cardSurface}>
                <RowView style={[pt5, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                    <H14fontRegularBlackk>{'#MR-0010'}</H14fontRegularBlackk>
                    <H9fontRegularGray>{t('labels.Nov14')}</H9fontRegularGray>
                </RowView>
                <CommonLineDotted>
                    <CommonLineDottedInner />
                </CommonLineDotted>
                <RowView style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                    <View style={[styles.detailsContainer, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                        <View style={{ height: 60, width: 60, borderRadius: 50, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', paddingRight: 15 }}>
                            <Doctor4 height={60} width={100} />
                        </View>
                        <View style={ph10}>
                            <H8fontMediumBlack style={{textAlign:isRTL?'right':'left'}}>{t('labels.FavDoctorName')}</H8fontMediumBlack>
                            <RowView style={{ width: DevWidth / 1.6, paddingBottom: 5, flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                                <H9fontRegularGray style={pt5}>{t('labels.dental')}</H9fontRegularGray>
                                <H9fontRegularBlack style={pt5}> {t('labels.dentalFilling')}</H9fontRegularBlack>
                            </RowView>
                            <H9fontRegularBlack style={[pt5,{textAlign:isRTL?'right':'left'}]}> {t('labels.dentalTest')}</H9fontRegularBlack>
                            <View style={[styles.buttonContainer, { flexDirection: isRTL ? 'row-reverse' : 'row' }, pt10]}>
                                <TouchableOpacity style={[styles.viewButtonStyle, isRTL ? ml5 : mr5]}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                                        <AwesomeEye height={10} width={15} />
                                        <Text style={[styles.viewTextStyle, isRTL ? pr5 : pl5]}>{t('labels.view')}</Text>
                                    </View>
                                </TouchableOpacity>
                                <View>
                                    <TouchableOpacity style={styles.printBtnStyle}>
                                        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                                            <MetroPrintor height={13} width={13} />
                                            <Text style={[styles.printTextStyle, isRTL ? pr5 : pl5]}>{t('labels.print')}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </RowView>
            </CardSurface>

        </View>
    );
};
export default MedicalRecords;

const styles = StyleSheet.create({
    container: { paddingHorizontal: 10 },
    cardSurface: {
        height: 175,
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 10
    },
    detailsContainer: { padding: 5 },
    imageStyle: { height: 80, width: 80, borderRadius: 50 },
    profileImageStyle: { height: 60, width: 60, borderRadius: 50, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', paddingRight: 25 },
    buttonContainer: { paddingTop: 10 },
    viewButtonStyle: {
        height: 28,
        width: 78,
        backgroundColor: 'rgba(29, 185, 170, 0.65)',
        borderRadius: 30,
        // marginLeft: 5,
        justifyContent: 'center'
    },
    imageContainer: { paddingTop: 10 },
    viewImageStyle: { height: 10, width: 15 },
    viewTextStyle: {
        paddingLeft: 5,
        color: 'white',
        fontSize: 11,
        fontFamily: fontFamily.fontRegular,
    },
    printBtnStyle: {
        height: 28,
        width: 78,
        backgroundColor: '#D4D4D4',
        borderRadius: 30,
        justifyContent: 'center'
    },
    printImage: { height: 13, width: 13 },
    printTextStyle: {
        color: '#8B8A8A',
        fontSize: 11,
        fontFamily: fontFamily.fontRegular,
        paddingLeft: 5
    },
});
