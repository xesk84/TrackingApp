import React, {useCallback, useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Button, Input, Section} from '../components';
import {Styles} from '../styles/Styles';
//import {LoginDriver} from '../redux/driver/services/DriverServices';
import {useDispatch, useSelector} from 'react-redux';
import {DriverActionTypes} from '../redux/driver/reducer/DriverReducer';
import {RootState} from '../redux/RootReducer';

type Props = {navigation};

export const MainScreen = ({navigation}: Props) => {
  const [driverId, setDriverId] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const {id, status, error} = useSelector((state: RootState) => state.driver);

  const onLogin = () => {
    console.log(`entra id ${driverId} i pass ${password}`);
    dispatch({
      type: DriverActionTypes.DRIVER_ACTION_REQUEST,
    });
    // dispatch({
    //   type: DriverActionTypes.DRIVER_ACTION_FETCH,
    //   payload: {id: driverId},
    // });

    //LoginDriver(driverId, password);
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
          <Text>{`My driver ${id} ${status} ${error}`}</Text>
        </Section>
      </View>
    </SafeAreaView>
  );
};
