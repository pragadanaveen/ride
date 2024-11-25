import { Route } from '@react-navigation/native';
import React, { Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import LanguageCheck from '../Language Settings/LanguageCheck';
import { NavBar } from '../common/commonComponents';
import { pR15, pl15, pl25, pr25, pv20, pv5 } from '../common/commonStyles';
import {
  H8fontMediumBlack,
  H8fontRegularWhite,
  H9fontRegularGray,
} from '../components/commonText';
import {
  MainContainer,
} from '../components/commonViews';
import { GreenTick, SendIcon } from '../components/svgIcons';
import { GeneralProps } from '../interfaces/generalProps';
import { colors } from '../utils/colors';
import { DevWidth } from '../utils/device';


interface Props extends GeneralProps {
  route: Route<string, object | undefined>;
}
const ChatView: React.FC<Props> = (): JSX.Element => {
  const [focus, setFocus] = useState(false);
  const { t, i18n } = useTranslation();
const isRTL = LanguageCheck();    const recivedMessage = () => {
    return (
      <View style={[pv20, { alignItems: isRTL ? 'flex-end' : 'flex-start' }]} >
        <View style={styles.receivedMsgContainer}>
          <H8fontMediumBlack style={[isRTL ? pR15 : pl15,{textAlign:isRTL?'right':'left'}]}>
            {t('labels.receiveMessage')}{' '}
          </H8fontMediumBlack>
        </View>
        <H9fontRegularGray style={pv5}> {t('labels.chatviewmsgTime')} </H9fontRegularGray>
      </View>
    );
  };
  const sentMessage = () => {
    return (
      <View style={isRTL ? styles.rtlsentMsgContainer : styles.sentMsgContainer}>
        <View style={styles.sentMsgTxtContainer}>
          <H8fontRegularWhite style={[isRTL ? pR15 : pl15,{textAlign:isRTL?'right':'left'}]}>
            {t('labels.sendMessage')}{' '}
          </H8fontRegularWhite>
        </View>
        <View style={[styles.sentmsgViewdate,{flexDirection:isRTL?'row-reverse':'row'}]}>
          <H9fontRegularGray style={pv5}> {t('labels.chatviewmsgTime')} </H9fontRegularGray>
          <GreenTick height={12} width={12} />
        </View>
      </View>
    );
  };
  const dayDetails = () => {
    return (
      <>
        <View style={styles.dayDashStyle}></View>
        <View style={styles.dayStyle}>
          <H8fontMediumBlack style={styles.dayFontStyle}>
            {t('labels.today')}
          </H8fontMediumBlack>
        </View>
      </>
    );
  };
  return (
    <Fragment>
      <MainContainer style={{ backgroundColor: colors.background }}>
        <NavBar chat title={t("labels.chatViewName")} />
        <View style={styles.constainer}>
          <ScrollView>
            <View style={styles.scrollContainer}>
              {recivedMessage()}
              {sentMessage()}
              {dayDetails()}
              {recivedMessage()}
              {sentMessage()}
              {sentMessage()}
              {recivedMessage()}
            </View>
          </ScrollView>
        </View>
        <View style={[styles.footerStyle, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
          <TextInput
            style={[styles.textBoxStyle,isRTL?pr25:pl25,{textAlign:isRTL?'right':'left'}]}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            placeholder={t('labels.typeMsg')}
          />
          <View style={[styles.sendMsgBtnContailer]}>
            <TouchableOpacity style={styles.sendMsgBtn}>
              {isRTL ? <SendIcon height={18} width={18} style={{ transform: [{ rotate: '180deg' }] }} /> : <SendIcon height={18} width={18} />}
            </TouchableOpacity>
          </View>
        </View>
      </MainContainer>
    </Fragment>
  );
};

export default ChatView;

const styles = StyleSheet.create({
  constainer: {
    marginTop: -100,
    flex: 1,
  },
  sentMsgContainer: {
    alignItems: 'flex-end',
  },
  rtlsentMsgContainer: {
    alignItems: 'flex-start'
  },

  sentMsgTxtContainer: {
    backgroundColor: '#1A568C',
    width: DevWidth / 1.5,
    paddingVertical: 12,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    borderBottomLeftRadius: 14,
  },
  sentmsgViewdate: {
    width: DevWidth / 1.5,
    // flexDirection: 'row',
    alignItems: 'center',
  },
  iconsStyle: {
    height: 12,
    width: 12,
  },
  receivedMsgContainer: {
    backgroundColor: '#fff',
    width: DevWidth / 1.5,
    paddingVertical: 12,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    borderBottomRightRadius: 14,
  },
  dayDashStyle: {
    borderWidth: 0.3,
    borderStyle: 'dashed',
    borderRadius: 1,
    borderColor: 'black',
    marginTop: 40,
  },
  dayStyle: { alignItems: 'center', marginTop: -17 },
  dayFontStyle: {
    paddingVertical: 5,
    paddingHorizontal: 22,
    backgroundColor: '#fff',
    borderRadius: 15,
    overflow:'hidden'
  },
  scrollContainer: {
    backgroundColor: colors.background,
    borderRadius: 30,
    padding: 20,
    flex: 1,
  },
  footerStyle: {
    bottom: 5,
    height: 45,
    backgroundColor: '#fff',
    borderRadius: 50,
    borderColor: '#fff',
    borderWidth: 2,
  },
  textBoxStyle: {
    paddingLeft: 25,
    width: DevWidth / 1.15,
  },
  sendMsgBtnContailer: {
    alignItems: 'flex-end',
    // paddingRight: 12,
    paddingTop: 1.5,
  },
  sendMsgBtn: {
    backgroundColor: colors.seaBlue,
    height: 38,
    width: 38,
    borderRadius: 38,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendMsgBtnImageStyle: {
    height: 18,
    width: 18,
  },
});
