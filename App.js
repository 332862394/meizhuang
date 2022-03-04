/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import Launcher from './src/view/Launcher';
import RootView from './src/view/RootView';
import Orientation from 'react-native-orientation';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LogBox} from 'react-native';
import {RootSiblingParent} from 'react-native-root-siblings';
import Toast from 'react-native-toast-message';

const Stack = createNativeStackNavigator();

const App = () => {
  Orientation.lockToLandscape();
  useEffect(() => {
    LogBox.ignoreLogs([
      'Trying to load empty source',
      'Function components cannot be given refs.',
    ]);
  }, []);
  return (
    <RootSiblingParent>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="RootView" component={RootView} />

          <Stack.Screen name="Launcher" component={Launcher} />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast ref={ref => Toast.setRef(ref)} />
    </RootSiblingParent>
  );
};

export default App;
