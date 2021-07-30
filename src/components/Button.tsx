import React from 'react';
import {Pressable, Text, TextStyle, ViewStyle} from 'react-native';

type Props = {
  onPress: () => void;
  buttonText: string;
  buttonStyle: ViewStyle;
  textStyle: TextStyle;
};

export const Button = ({
  onPress,
  buttonText,
  buttonStyle,
  textStyle,
}: Props) => {
  return (
    <Pressable onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{buttonText}</Text>
    </Pressable>
  );
};
