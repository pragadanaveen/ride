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
import Icon from 'react-native-vector-icons/FontAwesome';
import LanguageCheck from '../Language Settings/LanguageCheck';
import { NavBar } from '../common/commonComponents';
import {
  alignItemsCenter,
  alignItemsRight,
  justyfyCenter,
  pR10,
  pl10,
} from '../common/commonStyles';
import {
  H15fontMediumBlack,
  H8fontRegularBlack,
  H9fontRegularGray,
} from '../components/commonText';
import {
  CardSurface,
  CommonLineDotted,
  CommonLineDottedInner,
  CommonSearch,
  MainContainer,
  RowView,
} from '../components/commonViews';
import { Chat, ChatIcon, GrayTick, GreenTick } from '../components/svgIcons';
import { GeneralProps } from '../interfaces/generalProps';
import { colors } from '../utils/colors';
import { chatArray } from '../utils/constant';
import { screenName } from '../utils/screenName';

interface Props extends GeneralProps {
  route: Route<string, object | undefined>;
}
const ChatList: React.FC<Props> = ({ navigation, route }): JSX.Element => {
  const [search, setSearch] = useState('');
  const { t, i18n } = useTranslation();
  const isRTL = LanguageCheck();

  return (
    <Fragment>
      <MainContainer>
        <ScrollView>
          <NavBar title={t("labels.chat")} />
          <View style={styles.chatBodyContainer}>
            <View style={styles.chatBody}>
              <RowView style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                <View style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                  <Chat height={20} width={20} />
                  <H8fontRegularBlack style={isRTL ? pR10 : pl10}>
                    {t('labels.chatList')}
                  </H8fontRegularBlack>
                </View>
                <H8fontRegularBlack>{'128'}{t('labels.users')}</H8fontRegularBlack>
              </RowView>
              <CommonLineDotted>
                <CommonLineDottedInner />
              </CommonLineDotted>
              <CommonSearch style={[styles.searchContainer, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                <View >
                  <Icon name="search" size={17} color={'black'} style={{}} />
                </View>
                <TextInput
                  value={search}
                  onChangeText={text => setSearch(text)}
                  style={{ textAlign: isRTL ? 'right' : 'left' }}
                />
              </CommonSearch>

              {chatArray.map(({ name, Img, content, date, active, noofmessage, message, Icon }, index) => {
                return (
                  <CardSurface key={index} style={styles.cardTouchableStyle}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate(screenName.ChatView as any)
                      }>
                      <RowView style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                        <View style={styles.cardStyle}>
                          <View style={styles.profileImageStyle}>
                            <Img height={50} width={50} />
                          </View>
                          <View
                            style={[
                              {
                                backgroundColor:
                                  active == false ? '#858585' : '#20c997',
                              },
                              styles.status,
                            ]}></View>
                        </View>
                        <RowView style={[styles.detailsView, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                          <View style={justyfyCenter}>
                            <H15fontMediumBlack>{t(name)}</H15fontMediumBlack>
                            <RowView style={alignItemsCenter}>
                              {
                                message == 'read'
                                  ? <GreenTick height={10} width={10} />
                                  : <GrayTick height={10} width={10} />
                              }
                              <H9fontRegularGray style={styles.msgTxtSytyle}>
                                {t(content)}
                              </H9fontRegularGray>
                              {Icon != null && (
                                <Icon height={10} width={10} />
                              )}
                            </RowView>
                          </View>
                          <View style={alignItemsRight}>
                            <H9fontRegularGray style={styles.dateTxtStyle}>
                              {date}
                            </H9fontRegularGray>
                            {noofmessage != null && (
                              <View style={styles.countStyle}>
                                <H9fontRegularGray style={styles.countTxt}>
                                  {noofmessage}
                                </H9fontRegularGray>
                              </View>
                            )}
                          </View>
                        </RowView>
                      </RowView>
                    </TouchableOpacity>
                  </CardSurface>)
              })}
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity style={[styles.messageIconsBtnStyle, { alignItems: isRTL ? 'flex-start' : 'flex-end' }]}>
          <ChatIcon height={80} width={80} />
        </TouchableOpacity>
      </MainContainer>
    </Fragment>
  );
};
export default ChatList;

const styles = StyleSheet.create({
  chatBodyContainer: {
    marginTop: -100,
  },
  chatBody: {
    backgroundColor: colors.background,
    height: 500,
    borderRadius: 30,
    padding: 20,
  },
  chatListIcon: {
    height: 20,
    width: 20,
  },
  searchContainer: {
    marginTop: 20,
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  cardStyle: {
    borderRadius: 50,
    alignSelf: 'center',
  },
  profileImageStyle: {
    height: 50,
    width: 50,
    borderRadius: 50,
    overflow: 'hidden'
  },
  status: {
    borderWidth: 2,
    borderColor: colors.white,
    position: 'absolute',
    bottom: 3,
    right: -3,
    height: 15,
    width: 15,
    borderRadius: 10,
    elevation: 3
  },
  detailsView: {
    flex: 1,
    justifyContent: 'space-between',
    paddingLeft: 8,
    alignItems: 'center',
  },
  msgReadImageStyle: {
    height: 10,
    width: 10,
  },
  msgTxtSytyle: {
    fontSize: 11,
    paddingHorizontal: 4,
  },
  messageIconsBtnStyle: {
    // bottom: 0,
    // right: 0,
    // position: 'absolute',
    // justifyContent: 'flex-end',

  },
  msgBtnStyle: {
    height: 80,
    width: 80,
  },
  dateTxtStyle: {
    fontSize: 8,
  },
  countStyle: {
    height: 23,
    width: 23,
    backgroundColor: '#00DCB7',
    borderRadius: 23,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countTxt: {
    color: 'white',
    fontSize: 10,
  },
  cardTouchableStyle: {
    marginTop: 10,
  },
});