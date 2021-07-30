import React from 'react';
import {View, Text, SafeAreaView, Pressable} from 'react-native';

type Props = {navigation};

export const LoginScreen = ({navigation}: Props) => {
  const onLogin = () => {
    console.log('logau');
    navigation.navigate('Deliveries');
  };

  return (
    <SafeAreaView>
      <Text>LoginScreen!</Text>
      <Pressable
        onPress={onLogin}
        style={{
          width: 150,
          height: 60,
          borderColor: 'black',
          borderWidth: 1,
          marginLeft: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Login</Text>
      </Pressable>
    </SafeAreaView>
  );
};
