import {NavigationProp} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, SafeAreaView, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {StatusEnum} from '../common/enums/StatusEnum';
import {Logged, Login, Section} from '../components';
import {ActiveDelivery} from '../redux/deliveries/entitites/DeliveryEntity';
import {
  loadPersistedActiveDelivery,
  setActiveDeliveryFinished,
} from '../redux/deliveries/services/ActiveDeliveryService';
import {
  getPersistedDriver,
  loginDriver,
  logoutDriver,
} from '../redux/driver/services/DriverServices';
import {RootState} from '../redux/RootReducer';
import {Styles} from '../styles/Styles';

type Props = {navigation: NavigationProp<any>};

export const MainScreen = ({navigation}: Props) => {
  const [driverId, setDriverId] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const dispatch = useDispatch();
  const {id, status} = useSelector((state: RootState) => state.driver);
  const activeDelivery: ActiveDelivery = useSelector(
    (state: RootState) => state.activeDelivery,
  );

  useEffect(() => {
    dispatch(getPersistedDriver());
  }, [dispatch]);

  useEffect(() => {
    if (id) {
      dispatch(loadPersistedActiveDelivery());
    }
  }, [dispatch, id]);

  const onLogin = () => {
    setLoginError(false);
    if (driverId && password) {
      dispatch(loginDriver(driverId, password));
    } else {
      setLoginError(true);
    }
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

  const onDelivered = () => {
    dispatch(setActiveDeliveryFinished(activeDelivery, 'delivered'));
  };

  const onUndelivered = () => {
    dispatch(setActiveDeliveryFinished(activeDelivery, 'undelivered'));
  };

  const goToDeliveriesList = () => {
    navigation.navigate('DeliveriesList');
  };

  return (
    <SafeAreaView style={Styles.mainContainer}>
      <View style={Styles.centerContent}>
        <Section sectionStyle={Styles.verticalSectionSeparator}>
          <Text style={Styles.title}>Welcome to tracking app!</Text>
        </Section>
        {status === StatusEnum.Loading ? (
          <ActivityIndicator size={'large'} color={'black'} />
        ) : (
          <>
            {!id ? (
              <Login
                onChangeDriverId={onChangeDriverId}
                onChangePassword={onChangePassword}
                loginError={loginError}
                onLogin={onLogin}
              />
            ) : (
              <Logged
                driverId={id}
                onLogout={onLogout}
                activeDelivery={activeDelivery}
                onUndelivered={onUndelivered}
                onDelivered={onDelivered}
                onGoToDeliveriesList={goToDeliveriesList}
              />
            )}
          </>
        )}
      </View>
    </SafeAreaView>
  );
};
