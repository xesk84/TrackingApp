import React from 'react';
import {View, ViewStyle} from 'react-native';

type Props = {
  sectionStyle: ViewStyle;
  children: JSX.Element;
};

export const Section = ({sectionStyle, children}: Props) => {
  return <View style={sectionStyle}>{children}</View>;
};
