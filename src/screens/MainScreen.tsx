import {NavigationProp} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, SafeAreaView, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {StatusEnum} from '../common/enums/StatusEnum';
import {Logged, Login, Section} from '../components';
import {Delivery} from '../redux/deliveries/entitites/DeliveryEntity';
import {
  loadPersistedActiveDelivery,
  setActiveDeliveryDelivered,
  setActiveDeliveryNotDelivered,
} from '../redux/deliveries/services/ActiveDeliveryService';
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
  const activeDelivery: Delivery = useSelector(
    (state: RootState) => state.activeDelivery,
  );

  console.log('tenim active delivery?', activeDelivery);

  useEffect(() => {
    dispatch(getPersistedDriver());
  }, [dispatch]);

  useEffect(() => {
    if (id) {
      dispatch(loadPersistedActiveDelivery());
    }
  });

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

  const onDelivered = () => {
    dispatch(setActiveDeliveryDelivered(activeDelivery));
  };

  const onUndelivered = () => {
    dispatch(setActiveDeliveryNotDelivered(activeDelivery));
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
                activeDelivery={activeDelivery}
                onUndelivered={onUndelivered}
                onDelivered={onDelivered}
              />
            )}
          </>
        )}
      </View>
    </SafeAreaView>
  );
};
