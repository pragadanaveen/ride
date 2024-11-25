import { Route } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import LanguageCheck from '../Language Settings/LanguageCheck';
import { p15 } from '../common/commonStyles';
import { H7fontRegularWhite } from '../components/commonText';
import { RowView } from '../components/commonViews';
import { BackIcon, CallClose, MuteIcon, Patient4, SettingsIcon, VideoCallIcon, VideoIcon1 } from '../components/svgIcons';
import { GeneralProps } from '../interfaces/generalProps';
import { DevHeight, DevWidth } from '../utils/device';
import { screenName } from '../utils/screenName';


interface Props extends GeneralProps {
    route: Route<string, object | undefined>;
}
const VideoCall: React.FC<Props> = ({ navigation, route }): JSX.Element => {
    const { i18n } = useTranslation();
  const isRTL = LanguageCheck();      return (
        <View style={styles.container}>
            <View style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, alignItems: 'center' }}>
                <VideoCallIcon height={DevHeight} width={DevWidth * 1.6} />
            </View>
            <RowView style={[p15, { flexDirection: isRTL ? 'row-reverse' : 'row' }]} >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    {isRTL ? <BackIcon style={{ transform: [{ rotate: '180deg' }] }} /> : <BackIcon />}
                </TouchableOpacity>
                <TouchableOpacity>
                    <SettingsIcon height={27} width={27} />
                </TouchableOpacity>
            </RowView>
            <View style={styles.videoCallStyle}>
                <View style={styles.videoCallViewStyle}>
                    <Patient4 height={90} width={90} />
                </View>
                <H7fontRegularWhite>04:15 Hrs</H7fontRegularWhite>
            </View>
            <RowView style={[styles.footerStyle, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                <TouchableOpacity>
                    <MuteIcon fill="#000" height={50} width={50} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate(screenName.DashBoardScreen)}>
                    <CallClose height={50} width={50} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <VideoIcon1 height={50} width={50} />
                </TouchableOpacity>
            </RowView>
        </View>
    )
}

export default VideoCall;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS == 'ios' ? 40 : 0
    },
    backIcon: {
        height: 30, width: 30
    },
    settingsIcons: {
        height: 27, width: 27
    },
    videoCallStyle: {
        flex: 1,
        paddingTop: 250,
        justifyContent: 'center',
        alignItems: 'center'
    },
    videoCallViewStyle: {
        borderColor: '#fff',
        borderWidth: 5,
        borderRadius: 5,
        marginBottom: 5
    },
    videoCallImageStyle: {
        height: 90,
        width: 90,
        borderRadius: 5
    },
    footerStyle: {
        bottom: 30,
        paddingHorizontal: 90
    },
    footerOptionsImageStyle: {
        height: 50,
        width: 50
    }
})  