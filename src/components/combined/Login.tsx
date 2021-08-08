import React from 'react';
import {Text} from 'react-native';
import {Section, Button, Input} from '..';
import {Styles} from '../../styles/Styles';

type Props = {
  onChangeDriverId: (text: string) => void;
  onChangePassword: (text: string) => void;
  onLogin: () => void;
  loginError: boolean;
  inputDriverIdTestId?: string;
  inputPasswordTestId?: string;
  sectionTextErrorTestId?: string;
  buttonLoginTestId?: string;
};

export function Login({
  onChangeDriverId,
  onChangePassword,
  onLogin,
  loginError,
  inputDriverIdTestId,
  inputPasswordTestId,
  sectionTextErrorTestId,
  buttonLoginTestId,
}: Props) {
  return (
    <>
      <Section sectionStyle={Styles.verticalSectionSeparator}>
        <Input
          inputContainerStyle={Styles.inputContainer}
          textStyle={Styles.inputTextStyle}
          placeholder="Driver Id"
          onChangeText={onChangeDriverId}
          testID={inputDriverIdTestId}
        />
      </Section>
      <Section sectionStyle={Styles.verticalSectionSeparator}>
        <Input
          inputContainerStyle={Styles.inputContainer}
          placeholder="Password"
          textStyle={Styles.inputTextStyle}
          isPassword={true}
          onChangeText={onChangePassword}
          testID={inputPasswordTestId}
        />
      </Section>
      {loginError && (
        <Section
          testID={sectionTextErrorTestId}
          sectionStyle={Styles.verticalSectionSeparator}>
          <Text style={Styles.errorText}>Wrong driver or password</Text>
        </Section>
      )}
      <Section sectionStyle={Styles.verticalSectionSeparator}>
        <Button
          buttonText="Login"
          onPress={onLogin}
          buttonStyle={Styles.smallButton}
          textStyle={Styles.buttonTextStyle}
          testID={buttonLoginTestId}
        />
      </Section>
    </>
  );
}
