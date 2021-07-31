import React, {useCallback, useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Input, Section} from '../components';
import {Styles} from '../styles/Styles';
import {driverRequest} from '../_redux/driver/actions/DriverActions';
import {Driver} from '../_redux/driver/entities/Driver';
import {getDriverSaga} from '../_redux/driver/sagas/DriverSaga';

type Props = {navigation};

export const MainScreen = ({navigation}: Props) => {
  const dispatch = useDispatch();
  const {id, status, error} = useSelector((state: Driver) => state);
  const [driverId, setDriverId] = useState('');
  const [password, setPassword] = useState('');
  const onLogin = () => {
    console.log('driverId', driverId);
    console.log('password', password);
    getDriverSaga(id, password);

    //dispatch(driverRequest());
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
        <Section sectionStyle={Styles.verticalSectionSeparator}>
          <Text>{`El driver es: ${id} ${error} ${status}`}</Text>
        </Section>
      </View>
    </SafeAreaView>
  );
};
