import React from 'react';
import {Section, Button, Input} from '..';
import {Styles} from '../../styles/Styles';

type Props = {
  onChangeDriverId: (text: string) => void;
  onChangePassword: (text: string) => void;
  onLogin: () => void;
};

export function Login({onChangeDriverId, onChangePassword, onLogin}: Props) {
  return (
    <>
      <Section sectionStyle={Styles.verticalSectionSeparator}>
        <Input
          inputContainerStyle={Styles.inputContainer}
          textStyle={Styles.inputTextStyle}
          placeholder="Driver Id"
          onChangeText={onChangeDriverId}
        />
      </Section>
      <Section sectionStyle={Styles.verticalSectionSeparator}>
        <Input
          inputContainerStyle={Styles.inputContainer}
          placeholder="Password"
          textStyle={Styles.inputTextStyle}
          isPassword={true}
          onChangeText={onChangePassword}
        />
      </Section>
      <Section sectionStyle={Styles.verticalSectionSeparator}>
        <Button
          buttonText="Login"
          onPress={onLogin}
          buttonStyle={Styles.smallButton}
          textStyle={Styles.buttonTextStyle}
        />
      </Section>
    </>
  );
}
