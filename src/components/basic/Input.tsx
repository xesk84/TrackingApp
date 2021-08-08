import React from 'react';
import {TextStyle, ViewStyle} from 'react-native';
import {View, TextInput} from 'react-native';

type Props = {
  inputContainerStyle: ViewStyle;
  textStyle: TextStyle;
  placeholder: string;
  isPassword?: boolean;
  onChangeText: (text: string) => void;
  maxLength?: number;
  testID?: string;
};

export const Input = ({
  inputContainerStyle,
  placeholder,
  textStyle,
  isPassword,
  onChangeText,
  maxLength,
  testID,
}: Props) => {
  return (
    <View style={inputContainerStyle}>
      <TextInput
        secureTextEntry={isPassword}
        style={textStyle}
        placeholder={placeholder}
        onChangeText={onChangeText}
        maxLength={maxLength || 15}
        testID={testID}
      />
    </View>
  );
};
