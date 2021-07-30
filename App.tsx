import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {MainScreen, DeliveriesListScreen} from './src/screens/';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="DeliveriesList" component={DeliveriesListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
