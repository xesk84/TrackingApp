import React from 'react';
import {View, ViewStyle} from 'react-native';

type Props = {
  sectionStyle: ViewStyle;
  children: JSX.Element;
  testID?: string;
};

export const Section = ({sectionStyle, children, testID}: Props) => {
  return (
    <View style={sectionStyle} testID={testID}>
      {children}
    </View>
  );
};
