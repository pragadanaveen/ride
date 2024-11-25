import { Route } from '@react-navigation/native';
import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import LanguageCheck from '../Language Settings/LanguageCheck';
import { NavBarPatient } from '../common/commonComponents';
import { H15fontMediumBlack } from '../components/commonText';
import { CardSurface, MainContainer, RowView } from '../components/commonViews';
import { RightArrow } from '../components/svgIcons';
import { GeneralProps } from '../interfaces/generalProps';
import { socialMediaMenuOptions } from '../utils/constant';

interface Props extends GeneralProps {
  route: Route<string, object | undefined>;
}

const SocialMedia: React.FC<Props> = (): JSX.Element => {
  const { t, i18n } = useTranslation();
const isRTL = LanguageCheck();  
  return (
    <Fragment>
      <MainContainer>
        <ScrollView>
          <NavBarPatient title={t('labels.socialMedia')} />
          {socialMediaMenuOptions.map(({ Img, name }, index) => {
            return (
              <CardSurface key= {index}  style={styles.componnetStyle}>
                <TouchableOpacity>
                  {isRTL ?
                    <View style={{ flexDirection: 'row-reverse', justifyContent: 'space-between' }}>
                      <View style={styles.detailsStyle}>
                        <H15fontMediumBlack>{t(name)}</H15fontMediumBlack>
                        <View style={{ marginLeft: 15 }}>
                          <Img />
                        </View>
                      </View>
                      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <RightArrow height={17} width={10} style={{ transform: [{ rotate: '180deg' }] }} />
                      </View>
                    </View>
                    :
                    <RowView>
                      <View style={styles.detailsStyle}>
                        <Img />
                        <H15fontMediumBlack style={{ marginLeft: 15 }}>{t(name)}</H15fontMediumBlack>
                      </View>
                      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <RightArrow height={17} width={10} />
                      </View>
                    </RowView>
                  }
                </TouchableOpacity>
              </CardSurface>
            );
          })}
        </ScrollView>
      </MainContainer>
    </Fragment>
  );
};
export default SocialMedia;
const styles = StyleSheet.create({
  componnetStyle: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 6,
  },
  detailsStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIconStyle: {
    height: 17,
    width: 10,
    alignSelf: 'center'
  },
});
