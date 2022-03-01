import React from 'react';
import {View, Image, Dimensions,Text,StyleSheet} from 'react-native';
const {width,height} = Dimensions.get('window');
const bl = width / 1194;
const RootView = () => {
  return (
    <View style={styles.bigView}>
      <View style={styles.asideView}>
        <Image
        source={require('../res/logo.png')}
        style={styles.logoView}
      /></View>
      <View style={styles.maiView}>
        <View style={styles.headView}></View>
      </View>
    </View>
  );
};
const styles=StyleSheet.create({
  bigView:{
    width: width,
    height: height,
    backgroundColor: 'yellow',
    flexDirection:'row',
    // flex: 1
  },
  asideView:{
    width:200*bl,
    height: height,
    backgroundColor:"white",
  },
  maiView:{
    backgroundColor:"blue",
    flex:1
  },
  logoView:{
    width: 132*bl,
    height: 94*bl,
    marginLeft:33*bl,
    marginTop:37*bl

  },
  headView:{
    height: 152*bl,
backgroundColor:'orange'
  }
})
export default RootView;
