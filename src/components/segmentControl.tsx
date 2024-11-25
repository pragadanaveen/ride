import React, { useEffect, useImperativeHandle, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { mh10, mv15 } from '../common/commonStyles';
import { colors } from '../utils/colors';
import { H8fontRegularBlack } from './commonText';
import { RowView } from './commonViews';
import { useTranslation } from 'react-i18next';


interface SegmentProps {
  tabs: Array<string>;
  flexible?: boolean;
  defaultTab: string;
  onTabChanged: CallableFunction;
}
export type SegmentRef = { focus: CallableFunction };

export const SegmentControl = React.forwardRef(
  ({ tabs, flexible, defaultTab, onTabChanged }: SegmentProps, ref) => {
    const { t, i18n } = useTranslation();
    const [selectedTab, setSelectedTab] = useState<string>(defaultTab);


    useEffect(() => {
      setSelectedTab(t(defaultTab));
    }, [i18n.language, defaultTab]);

    return (
      <RowView style={[mv15, mh10, { borderRadius: 5, padding: 7 }]} >
        {tabs.map((name) => {
          const translatedName = t(name)
          return (
            <TouchableOpacity
              onPress={() => {
                const translatedName = t(name); // Translate the tab name
                setSelectedTab(translatedName); // Set the selectedTab to the translated tab name
                onTabChanged(translatedName); // Notify the parent component of the tab change
              }}
              style={{
                backgroundColor:
                  selectedTab == translatedName ? colors.ligtBlue : colors.background,
                flex: flexible ? undefined : 1,
                height: 36,
                borderRadius: 30,
                padding: 7,
                paddingHorizontal: 15,
                marginHorizontal: 2,
              }}
              key={translatedName} // Added a key to each tab for React
            >
              <H8fontRegularBlack
                numberOfLines={1}
                style={{
                  color: selectedTab == translatedName ? colors.white : colors.black,
                }}
              >
                {translatedName}
              </H8fontRegularBlack>
            </TouchableOpacity>
          );
        })}
      </RowView>

    );
  }
);

