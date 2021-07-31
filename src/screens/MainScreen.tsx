import {NavigationProp} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, SafeAreaView, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {StatusEnum} from '../common/enums/StatusEnum';
import {Logged, Login, Section} from '../components';
import {
  getPersistedDriver,
  loginDriver,
  logoutDriver,
} from '../redux/driver/services/DriverServices';
import {RootState} from '../redux/RootReducer';
import {Styles} from '../styles/Styles';

type Props = {navigation: NavigationProp<{}>};

export const MainScreen = ({navigation}: Props) => {
  const [driverId, setDriverId] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const {id, status, error} = useSelector((state: RootState) => state.driver);

  useEffect(() => {
    dispatch(getPersistedDriver());
  }, [dispatch]);

  const onLogin = () => {
    dispatch(loginDriver(driverId, password));
  };

  const onChangeDriverId = useCallback((text: string) => {
    setDriverId(text);
  }, []);

  const onChangePassword = useCallback((text: string) => {
    setPassword(text);
  }, []);

  const onLogout = () => {
    dispatch(logoutDriver());
  };

  return (
    <SafeAreaView style={Styles.mainContainer}>
      <View style={Styles.centerContent}>
        <Section sectionStyle={Styles.verticalSectionSeparator}>
          <Text style={Styles.title}>Welcome to tracking app!</Text>
        </Section>
        {status === StatusEnum.Loading ? (
          <ActivityIndicator size={'large'} />
        ) : (
          <>
            {!id ? (
              <Login
                onChangeDriverId={onChangeDriverId}
                onChangePassword={onChangePassword}
                onLogin={onLogin}
              />
            ) : (
              <Logged
                navigation={navigation}
                driverId={id}
                onLogout={onLogout}
              />
            )}
          </>
        )}
      </View>
    </SafeAreaView>
  );
};
