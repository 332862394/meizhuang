/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Launcher from './src/view/Launcher';
import RootView from './src/view/RootView';
import Orientation from 'react-native-orientation';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const App = () => {
  Orientation.lockToLandscape();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
                <Stack.Screen name="RootView" component={RootView} />
  
        <Stack.Screen name="Launcher" component={Launcher} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
