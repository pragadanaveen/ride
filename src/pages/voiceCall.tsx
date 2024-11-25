import { Route } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import LanguageCheck from '../Language Settings/LanguageCheck';
import { H7fontRegularWhite } from '../components/commonText';
import { CallIcon, CloseIcon, Doctor2, GridIcon, ManIcon, MicIcon, Patient4, PauseIcon, SpeakerIcon, VideoIcon } from '../components/svgIcons';
import { GeneralProps } from '../interfaces/generalProps';
import { DevHeight, DevWidth } from '../utils/device';
import { screenName } from '../utils/screenName';



interface Props extends GeneralProps {
  route: Route<string, object | undefined>;
}
const VoiceCall: React.FC<Props> = ({ navigation, route }): JSX.Element => {
  const { t, i18n } = useTranslation();
const isRTL = LanguageCheck();  
  return (
    <View style={styles.container}>
      <View style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, alignItems: 'center' }}>
        <CallIcon height={DevHeight} width={DevWidth * 2} />
      </View>
      <View style={[styles.imageContainer, { alignSelf: isRTL ? 'flex-start' : 'flex-end' }]}>
        <View style={styles.imageStyle}>
          <Patient4 height={70} width={70} />
        </View>
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.drImageBorder}>
          <Doctor2 height={140} width={210} />
        </View>
        <View style={styles.callDetails}>
          <H7fontRegularWhite>{t('labels.DoctorName1')}</H7fontRegularWhite>
          <H7fontRegularWhite>00:59</H7fontRegularWhite>
        </View>
        <View style={[styles.footerButtonContainer, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
          <TouchableOpacity>
            <VideoIcon height={50} width={50} />
          </TouchableOpacity>
          <TouchableOpacity>
            <PauseIcon height={50} width={50} />
          </TouchableOpacity>
          <TouchableOpacity>
            <ManIcon height={50} width={50} />
          </TouchableOpacity>
        </View>
        <View style={[styles.footerButtonContainer, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
          <TouchableOpacity>
            <MicIcon height={50} width={50} />
          </TouchableOpacity>
          <TouchableOpacity>
            <GridIcon height={50} width={50} />
          </TouchableOpacity>
          <TouchableOpacity>
            <SpeakerIcon height={50} width={50} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{ paddingTop: 30 }}
          onPress={() => navigation.navigate(screenName.DashBoardScreen)}>
          <CloseIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default VoiceCall;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS == 'ios' ? 40 : 0
  },
  footerStyle: {
    bottom: 30,
    paddingHorizontal: 90
  },
  footerOptionsImageStyle: {
    height: 50,
    width: 50
  },
  footerOptionsEndImageStyle: {
    height: 60,
    width: 60,
    marginTop: 20
  },
  imageContainer: {
    alignSelf: 'flex-start',
    borderColor: '#fff',
    borderWidth: 5,
    borderRadius: 5,
    margin: 10,
    overflow: 'hidden'
  },
  imageStyle: {
    height: 70,
    width: 70,
    borderRadius: 5,
    overflow: 'hidden'
  },
  bodyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  drImageBorder: {
    width: 150,
    height: 150,
    borderRadius: 150,
    borderWidth: 5,
    borderColor: '#fff',
    overflow: 'hidden'
  },
  drImageStyle: {
    height: 140,
    width: 140,
    borderRadius: 140
  },
  callDetails: {
    paddingVertical: 10,
    paddingBottom: 100,
    alignItems: 'center'
  },
  footerButtonContainer: {
    justifyContent: 'space-between',
    width: DevWidth / 2,
    paddingTop: 15,
  },
});
