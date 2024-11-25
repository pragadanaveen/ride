import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import LanguageCheck from '../../Language Settings/LanguageCheck';
import {
  alignSelfCenter,
  flexRow,
  mv15,
  ph10,
  pl10,
  pl5,
  pr10,
  pr5,
  pt5,
} from '../../common/commonStyles';
import {
  H10fontRegularBlack,
  H14fontRegularBlue,
  H14fontRegulargray,
  H8fontMediumBlack,
  H9fontRegularBlack,
  H9fontRegularGreen,
} from '../../components/commonText';
import {
  CardSurface,
  CommonLineDotted,
  CommonLineDottedInner,
  RowView,
} from '../../components/commonViews';
import { Patient10, Patient7 } from '../../components/svgIcons';
import { colors } from '../../utils/colors';
import { DevWidth } from '../../utils/device';

interface Props { }

const RattingStyle = () => {
  return (
    <View style={flexRow}>
      <Icon2
        name="star"
        size={11}
        color={colors.yellow}
        style={{ paddingTop: 2 }}
      />
      <Icon2
        name="star"
        size={11}
        color={colors.yellow}
        style={{ paddingLeft: 3, paddingTop: 2 }}
      />
      <Icon2
        name="star"
        size={11}
        color={colors.yellow}
        style={{ paddingLeft: 3, paddingTop: 2 }}
      />
      <Icon2
        name="star"
        size={11}
        color={colors.yellow}
        style={{ paddingLeft: 3, paddingTop: 2 }}
      />
      <Icon2
        name="star"
        size={11}
        color={'#dedfe0'}
        style={{ paddingLeft: 3, paddingTop: 2 }}
      />
    </View>
  );
};

const Reviews: React.FC<Props> = ({ }): JSX.Element => {
  const { t, i18n } = useTranslation();
  const isRTL = LanguageCheck(); return (
    <View style={styles.constainer}>
      <CardSurface style={styles.cardSurface}>
        <RowView style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
          <View style={[styles.initialRowStyle, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
            <View style={styles.userImageStyle}>
              <Patient10 height={45} width={45} />
            </View>
            <View style={ph10}>
              <H8fontMediumBlack style = {{textAlign:isRTL?'right':'left'}}>{t('labels.richardWilson')}</H8fontMediumBlack>
              <H14fontRegulargray style={{textAlign:isRTL?'right':'left'}}>{t('labels.reviewed')}</H14fontRegulargray>
              <View style={{ alignItems: isRTL ? 'flex-end' : 'flex-start' }}>
                <RattingStyle />
              </View>
              <View style={[styles.thumpsUpContainer, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                <Icon2
                  name="thumbs-o-up"
                  size={11}
                  color={'#00CC80'}
                  style={pt5}
                />
                <H9fontRegularGreen style={isRTL ? pr5 : pl5}>
                  {t('labels.recommendDoctor')}
                </H9fontRegularGreen>
              </View>
              <H9fontRegularBlack style={[styles.widthStyle,{textAlign:isRTL?'right':'left'}]}>
                {t('labels.text')}
              </H9fontRegularBlack>
              <CommonLineDotted>
                <CommonLineDottedInner />
              </CommonLineDotted>
              <View style={[styles.thumpsUpContainer, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                <Icon2
                  name="reply"
                  size={11}
                  color={colors.ligtBlue}
                  style={pt5}
                />
                <H14fontRegularBlue style={isRTL ? pr5 : pl5}>
                  {t('labels.replay')}
                </H14fontRegularBlue>
              </View>
              <View style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                <H9fontRegularBlack style={pt5}>
                  {t('labels.recommend')}
                </H9fontRegularBlack>
                <TouchableOpacity style={isRTL ? pr5 : pl5}>
                  <View style={[styles.yesbuttonStyle, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                    <Icon2
                      name="thumbs-o-up"
                      size={12}
                      color={colors.black}
                      style={[styles.btnIconPadding, isRTL ? pr5 : pl5]}
                    />
                    <H10fontRegularBlack style={[styles.btnTxtStyle, isRTL ? pr5 : pl5]}>
                      {t('labels.Yes')}
                    </H10fontRegularBlack>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={isRTL ? pr5 : pl5}>
                  <View style={[styles.noButtonStyle, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                    <Icon2
                      name="thumbs-o-down"
                      size={12}
                      color={colors.black}
                      style={[styles.btnIconPadding, isRTL ? pr5 : pl5]}
                    />
                    <H10fontRegularBlack style={[styles.btnTxtStyle, isRTL ? pr5 : pl5]}>
                      {t('labels.No')}
                    </H10fontRegularBlack>
                  </View>
                </TouchableOpacity>
              </View>
              <RowView style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                <View style={[styles.subContainer, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                  <View style={styles.subProfileImage}>
                    <Patient7 height={45} width={45} />
                  </View>
                  <View style={isRTL ? pr10 : pl10}>
                    <H8fontMediumBlack style = {{textAlign:isRTL?'right':'left'}}>{t('labels.richardWilson')}</H8fontMediumBlack>
                    <H14fontRegulargray style = {{textAlign:isRTL?'right':'left'}}>
                      {t('labels.No')}
                    </H14fontRegulargray>

                    <View style={{ alignItems: isRTL ? 'flex-end' : 'flex-start' }}>
                      <RattingStyle />
                    </View>
                    <H9fontRegularBlack style={[styles.descriptionStyle,{textAlign:isRTL?'right':'left'}]}>
                      {t('labels.text3')}
                    </H9fontRegularBlack>
                    <CommonLineDotted>
                      <CommonLineDottedInner />
                    </CommonLineDotted>
                    <View style={[styles.thumpsUpContainer, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                      <Icon2
                        name="reply"
                        size={11}
                        color={colors.ligtBlue}
                        style={pt5}
                      />
                      <H14fontRegularBlue style={isRTL ? pr5 : pl5}>
                        {t('labels.replay')}
                      </H14fontRegularBlue>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                      <View
                        style={{
                          flexDirection: isRTL ? 'row-reverse' : 'row'
                        }}>
                        <H9fontRegularBlack style={[pt5]}>
                          {t('labels.recommend')}
                        </H9fontRegularBlack>
                        <TouchableOpacity style={isRTL ? pr5 : pl5}>
                          <View style={[styles.yesbuttonStyle, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                            <Icon2
                              name="thumbs-o-up"
                              size={12}
                              color={colors.black}
                              style={[styles.btnIconPadding, isRTL ? pr5 : pl5]}
                            />
                            <H10fontRegularBlack style={[styles.btnTxtStyle, isRTL ? pr5 : pl5]}>
                              {t('labels.Yes')}
                            </H10fontRegularBlack>
                          </View>
                        </TouchableOpacity>
                      </View>
                      <TouchableOpacity style={[isRTL ? pr5 : pl5, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                        <View style={[styles.noButtonStyle, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                          <Icon2
                            name="thumbs-o-down"
                            size={12}
                            color={colors.black}
                            style={[styles.btnIconPadding, isRTL ? pr5 : pl5]}
                          />
                          <H10fontRegularBlack style={[styles.btnTxtStyle, isRTL ? pr5 : pl5]}>
                            {t('labels.No')}
                          </H10fontRegularBlack>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </RowView>
            </View>
          </View>
        </RowView>
        <TouchableOpacity style={[{ flexDirection: isRTL ? 'row-reverse' : 'row' }, mv15, alignSelfCenter]}>
          <H9fontRegularBlack style={{}}>
            {t('labels.showFeedback')}{""}
          </H9fontRegularBlack>
          <H9fontRegularBlack style={{}}>{t('labels.numofFeed')}</H9fontRegularBlack>
        </TouchableOpacity>
      </CardSurface>
    </View>
  );
};
export default Reviews;

const styles = StyleSheet.create({
  constainer: { paddingHorizontal: 18 },
  cardSurface: {
    backgroundColor: 'white',
    borderRadius: 20
  },
  initialRowStyle: {
    padding: 5,
    flexDirection: 'row'
  },
  userImageStyle: {
    height: 45,
    width: 45,
    borderRadius: 45,
    overflow: 'hidden'
  },
  thumpsUpContainer: {
    paddingTop: 4
  },
  widthStyle: {
    width: DevWidth / 1.5,
    paddingTop: 10
  },
  yesbuttonStyle: {
    height: 25,
    width: 52,
    borderRadius: 40,
    borderStyle: 'dashed',
    borderColor: colors.black,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  btnTxtStyle: {
    paddingTop: 2
  },
  btnIconPadding: {
    paddingTop: 4
  },

  noButtonStyle: {
    height: 25,
    width: 52,
    borderRadius: 40,
    borderStyle: 'dashed',
    borderColor: colors.black,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  subContainer: {
    paddingTop: 20,
    flexDirection: 'row'
  },
  subProfileImage: {
    height: 45,
    width: 45,
    borderRadius: 45,
    overflow: 'hidden'
  },
  descriptionStyle: {
    width: DevWidth / 2,
    paddingTop: 6
  },
});

