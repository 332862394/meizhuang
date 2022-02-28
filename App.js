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
 import Launcher from './Launcher';
 import RootView from './RootView';

 import {
   Colors,
   Header,
  
 } from 'react-native/Libraries/NewAppScreen';
 import Orientation from 'react-native-orientation';
 

 const App= ()  => {
   Orientation.lockToLandscape();
   const [isShowLauncher, setIsShowLauncher] = useState(false);
   useEffect(() => {
    
     setTimeout(() => {
       setIsShowLauncher(t => false);
     }, 5000);
   }, []);
   const isDarkMode = useColorScheme() === 'dark';
 
  
 
   return (
     <SafeAreaView >
       <ScrollView
         contentInsetAdjustmentBehavior="automatic"
        >
         <View
           style={{
             backgroundColor: isDarkMode ? Colors.black : Colors.white,
           }}>
       <Launcher />
           
         </View>
       </ScrollView>
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
 
 });
 
 export default App;
 