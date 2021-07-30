import React, {useCallback, useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Button, Input, Section} from '../components';
import {Styles} from '../styles/Styles';

type Props = {navigation};

export const MainScreen = ({navigation}: Props) => {
  const [driverId, setDriverId] = useState('');
  const [password, setPassword] = useState('');
  const onLogin = () => {
    console.log('driverId', driverId);
    console.log('password', password);
  };

  const onChangeDriverId = useCallback((text: string) => {
    setDriverId(text);
  }, []);

  const onChangePassword = useCallback((text: string) => {
    setPassword(text);
  }, []);

  return (
    <SafeAreaView style={Styles.mainContainer}>
      <View style={Styles.centerContent}>
        <Section sectionStyle={Styles.verticalSectionSeparator}>
          <Text style={Styles.title}>Welcome to tracking app!</Text>
        </Section>
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
      </View>
    </SafeAreaView>
  );
};
