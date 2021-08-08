import React from 'react';
import {Pressable, Text, TextStyle, ViewStyle} from 'react-native';

type Props = {
  onPress: () => void;
  buttonText: string;
  buttonStyle: ViewStyle;
  textStyle: TextStyle;
  testID?: string;
};

export const Button = ({
  onPress,
  buttonText,
  buttonStyle,
  textStyle,
  testID,
}: Props) => {
  return (
    <Pressable onPress={onPress} style={buttonStyle} testID={testID}>
      <Text style={textStyle}>{buttonText}</Text>
    </Pressable>
  );
};
