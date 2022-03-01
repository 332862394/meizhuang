/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useState, useEffect} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 import Launcher from './src/view/Launcher';
 import RootView from './src/view/RootView';
// import BaseView from './src/view/BaseView'
 import {
   Colors,
   Header,
  
 } from 'react-native/Libraries/NewAppScreen';
 import Orientation from 'react-native-orientation';
 import Toast from 'react-native-toast-message';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 const Stack = createNativeStackNavigator();

 const App= ()  => {
   Orientation.lockToLandscape();
  

 
   return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{
              headerShown: false,
            }}>
                    <Stack.Screen name="Launcher" component={Launcher} />

      <Stack.Screen name="RootView" component={RootView} />
    </Stack.Navigator>
  </NavigationContainer>
   );
 };
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
 
 });
 
 export default App;
 