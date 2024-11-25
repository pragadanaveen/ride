import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import LanguageCheck from '../../Language Settings/LanguageCheck';
import {
    alignItemsCenter,
    ml30,
    ml5,
    mr10,
    mr30,
    p5,
    pb10,
    pb5,
    ph10,
    pl10,
    pl18,
    pl30,
    pl5,
    pr10,
    pr18,
    pr30,
    pr5,
    pt10,
    pt5,
    pv10,
    pv5,
} from '../../common/commonStyles';
import {
    H14fontRegularBlackk,
    H14fontRegularBlue,
    H14fontRegularRed,
    H14fontRegulargray,
    H15fontMediumBlack,
    H18fontMediumBlack,
    H9fontMediumBlack,
    H9fontRegularGray
} from '../../components/commonText';
import { CardSurface, RowView } from '../../components/commonViews';
import { BookIcon, Doctor2A, Iicon, MapDoctor, MedicalIcon, NurseIcon, Specialities5, UserIcon } from '../../components/svgIcons';
import { colors } from '../../utils/colors';
import { DevWidth } from '../../utils/device';




interface Props { }

export const Dash = () => {
    const dashes = new Array(Math.min(15)).fill(null);
    return (
        <View style={{ paddingLeft: 20 }}>
            {dashes.map((_, index) => (
                <Text key={index} style={styles.dashLine}>
                    |
                </Text>
            ))}
        </View>

    );
};

const DoctorDetails = () => {
    const { t } = useTranslation();
    const isRTL = LanguageCheck();
    return (
        <View style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
            <View>
                <CardSurface style={styles.cardSurfaceStyle}>
                    <Iicon fill="#000" height={20} width={7} />
                </CardSurface>
                <Dash />
            </View>
            <View style={ph10}>
                <CardSurface style={styles.detailCardSurfaceStyle}>
                    <RowView style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                        <View style={[p5, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                            <View style={styles.profileImageStyle}>
                                <Doctor2A height={'100%'} width={'150%'} />
                            </View>
                            <View style={[pl10, pv5]}>
                                <H18fontMediumBlack style={{ lineHeight: 25 }}>{t('labels.DoctorName1')}</H18fontMediumBlack>
                                <View style={[{ flexDirection: isRTL ? 'row-reverse' : 'row' }, alignItemsCenter]}>
                                    <CardSurface style={styles.dentalIconStyle}>
                                        <Specialities5 height={14} width={14} />
                                    </CardSurface>
                                    <H14fontRegularBlue>{t('labels.Dentist')}</H14fontRegularBlue>
                                </View>
                            </View>
                        </View>
                    </RowView>
                    <View style={[{ flexDirection: isRTL ? 'row' : 'row-reverse', alignSelf: isRTL ? 'flex-end' : 'flex-start' }, pt5]}>
                        <H14fontRegulargray>{t('labels.oralMaxillofacial')}</H14fontRegulargray>
                        <H14fontRegulargray >{isRTL ? ' - SDM,SDB ' : 'BDS, MDS -'}</H14fontRegulargray>
                    </View>

                    <RowView style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                        <H14fontRegularRed style={[pl10, pt5]}>
                            {t('labels.fifteenExp')}
                        </H14fontRegularRed>
                        <View style={[{ flexDirection: isRTL ? 'row-reverse' : 'row' }, pt5, pb10]}>
                            <Icon name="map-marker" size={15} color={'black'} />
                            <H9fontMediumBlack style={[mr10, ml5]}>
                                {t('labels.floridaUSA')}
                            </H9fontMediumBlack>
                        </View>
                    </RowView>
                </CardSurface>
            </View>
        </View>
    );
};

const AboutUs = () => {
    const { t, i18n } = useTranslation();
    const isRTL = LanguageCheck();
    return (
        <View style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
            <View>
                <CardSurface style={styles.cardSurfaceStyle}>
                    <UserIcon fill="#000" height={18} width={15} />
                </CardSurface>
                <Dash/>
            </View>
            <View style={ph10}>
                <CardSurface style={styles.detailCardSurfaceStyle}>
                    <H15fontMediumBlack style={[pt10, isRTL ? pr10 : pl10, { textAlign: isRTL ? 'right' : 'left' }]}>{t('labels.aboutUs')}</H15fontMediumBlack>
                    <H9fontRegularGray style={[isRTL ? pr10 : pl10, pv10, isRTL ? ml30 : mr30, { lineHeight: 20 }]}>
                        {t('labels.text2')}
                    </H9fontRegularGray>
                </CardSurface>
            </View>
        </View>
    );
};

const EducationDetails = () => {
    const { t } = useTranslation();
    const isRTL = LanguageCheck();

    return (
        <View style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
            <View>
                <CardSurface style={styles.cardSurfaceStyle}>
                    <BookIcon fill="#000" height={18} width={18} />
                </CardSurface>
                <Dash/>
            </View>
            <View style={ph10}>
                <CardSurface style={styles.detailCardSurfaceStyle}>
                    <H15fontMediumBlack style={[p5, { textAlign: isRTL ? 'right' : 'left' }]}>{t('labels.education')}</H15fontMediumBlack>
                    <View style={[{ flexDirection: isRTL ? 'row-reverse' : 'row' }, pl5]}>
                        <Icon1 name="check" size={20} color={'black'} />
                        <H14fontRegularBlackk style={[isRTL ? pr5 : pl5, isRTL ? ml30 : mr30]}>
                            {t('labels.medicalUniverity')}
                        </H14fontRegularBlackk>
                    </View>
                    <H9fontRegularGray style={[pt10, isRTL ? pr30 : pl30, { textAlign: isRTL ? 'right' : 'left' }]}>{t('labels.BDS')}</H9fontRegularGray>
                    <View style={{ alignItems: isRTL ? 'flex-end' : 'flex-start' }}>
                        <H9fontRegularGray style={[isRTL ? pr30 : pl30, pb10]}>{'1998 - 2003'}</H9fontRegularGray>
                    </View>
                </CardSurface>
            </View>
        </View>
    );
};

const WorkExperience = () => {
    const { t, i18n } = useTranslation();
    const isRTL = LanguageCheck(); return (
        <View style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
            <View>
                <CardSurface style={styles.cardSurfaceStyle}>
                    <MapDoctor fill={"#000"} height={18} width={18} />
                </CardSurface>
                <Dash/>
            </View>
            <View style={isRTL ? pr10 : pl10}>
                <CardSurface style={styles.detailCardSurfaceStyle}>
                    <H15fontMediumBlack style={[p5, pt10, { textAlign: isRTL ? 'right' : 'left' }]}>
                        {t('labels.experience')}
                    </H15fontMediumBlack>
                    <View style={[{ flexDirection: isRTL ? 'row-reverse' : 'row' }, isRTL ? pr5 : pl5]}>
                        <Icon1 name="check" size={20} color={'black'} />
                        <H14fontRegularBlackk style={[isRTL ? pr5 : pl5, isRTL ? ml30 : mr30]}>
                            {t('labels.glowingSmiles')}
                        </H14fontRegularBlackk>
                    </View>
                    <H9fontRegularGray style={[pt5, isRTL ? pr30 : pl30]}>
                        {t('labels.wrkExp1')}
                    </H9fontRegularGray>
                    <View style={[{ flexDirection: isRTL ? 'row-reverse' : 'row' }, isRTL ? pr5 : pl5, pt5]}>
                        <Icon1 name="check" size={20} color={'black'} />
                        <H14fontRegularBlackk style={isRTL ? pr5 : pl5}>
                            {t('labels.comfortCare')}
                        </H14fontRegularBlackk>
                    </View>
                    <H9fontRegularGray style={[pt5, isRTL ? pr30 : pl30, pb10]}>
                        {t('labels.wrkExp2')}
                    </H9fontRegularGray>
                </CardSurface>
            </View>
        </View>
    );
};

const Services = () => {
    const { t, i18n } = useTranslation();
    const isRTL = LanguageCheck(); return (
        <View style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
            <View>
                <CardSurface style={styles.cardSurfaceStyle}>
                    <NurseIcon fill={"#000"} height={18} width={18} />
                </CardSurface>
                <Dash/>
            </View>
            <View style={ph10}>
                <CardSurface style={styles.detailCardSurfaceStyle}>
                    <H15fontMediumBlack style={[p5, { textAlign: isRTL ? 'right' : 'left' }]}>{t('labels.services')}</H15fontMediumBlack>
                    <View style={[{ flexDirection: isRTL ? 'row-reverse' : 'row' }, pl5, pt5]}>
                        <Icon1 name="check" size={20} color={colors.lightGray} />
                        <H14fontRegulargray style={[isRTL ? pr5 : pl5, pb5]}>
                            {t('labels.toothCleaning')}
                        </H14fontRegulargray>
                    </View>
                    <View style={[isRTL ? pr5 : pl5, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                        <Icon1 name="check" size={20} color={colors.lightGray} />
                        <H14fontRegulargray style={[isRTL ? pr5 : pl5, pb5]}>
                            {t('labels.rootCanalTherapy')}
                        </H14fontRegulargray>
                    </View>
                    <View style={[isRTL ? pr5 : pl5, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                        <Icon1 name="check" size={20} color={colors.lightGray} />
                        <H14fontRegulargray style={[isRTL ? pr5 : pl5, pb10]}>{t('labels.implants')}</H14fontRegulargray>
                    </View>
                </CardSurface>
            </View>
        </View>
    );
};

const Specializations = () => {
    const { t } = useTranslation();
    const isRTL = LanguageCheck();
    return (
        <View style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
            <CardSurface style={styles.cardSurfaceStyle}>
                <MedicalIcon fill={"#000"} height={18} width={18} />
            </CardSurface>
            <View style={ph10}>
                <CardSurface style={styles.detailCardSurfaceStyle}>
                    <H15fontMediumBlack style={[p5, { textAlign: isRTL ? 'right' : 'left' }]}>
                        {t('labels.specializations')}
                    </H15fontMediumBlack>
                    <View style={[isRTL ? pr5 : pl5, pt5, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                        <Icon1 name="check" size={20} color={colors.lightGray} />
                        <H14fontRegulargray style={[isRTL ? pr5 : pl5, pb5]}>{t('labels.dentalCare')}</H14fontRegulargray>
                    </View>
                    <View style={[isRTL ? pr5 : pl5, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                        <Icon1 name="check" size={20} color={colors.lightGray} />
                        <H14fontRegulargray style={[isRTL ? pr5 : pl5, pb5]}>
                            {t('labels.oralMaxillofacial')}
                        </H14fontRegulargray>
                    </View>
                    <View style={[isRTL ? pr5 : pl5, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                        <Icon1 name="check" size={20} color={colors.lightGray} />
                        <H14fontRegulargray style={[isRTL ? pr5 : pl5, pb10]}>
                            {t('labels.prosthodontics')}
                        </H14fontRegulargray>
                    </View>
                </CardSurface>
            </View>
        </View>
    );
};

const DoctorOverView: React.FC<Props> = ({ }): JSX.Element => {
    const isRTL = LanguageCheck();

    return (
        <View style={isRTL ? pr18 : pl18}>
            <DoctorDetails />
            <AboutUs />
            <EducationDetails />
            <WorkExperience />
            <Services />
            <Specializations />
        </View>
    );
};
export default DoctorOverView;

const styles = StyleSheet.create({
    cardSurfaceStyle: {
        borderRadius: 25,
        height: 40,
        width: 40,
        backgroundColor: colors.white,
        paddingTop: 9,
        alignItems: 'center',
        justifyContent: 'center'
    },

    infoIconDetaisl: {
        height: 20,
        width: 7,
    },

    detailCardSurfaceStyle: {

        width: DevWidth / 1.35,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 15,
    },
    doctorImageStyle: {
        height: 65,
        width: 65,
        borderRadius: 65,
        overflow: 'hidden'
    },
    dentalIconStyle: {
        borderRadius: 25,
        height: 24,
        width: 24,
        backgroundColor: colors.white,
        marginRight: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5
    },
    dashLine: {
        fontSize: 8,
        color: colors.black,
        fontWeight: '800'
    },
    dentalImageStyle: {
        height: 17,
        width: 17,
        alignSelf: 'center',
    },
    aboutUsIconstyle: {
        height: 18,
        width: 15,
    },
    profileImageStyle: {
        height: 70,
        width: 70,
        borderRadius: 40,
        borderWidth: 5,
        borderColor: '#f7f7f7',
        overflow: 'hidden'
    },
    imageCommonSize: {
        height: 18,
        width: 18,
    },
});
