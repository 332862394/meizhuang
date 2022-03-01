import React from 'react';
import {View, Image, Dimensions,Text,StyleSheet} from 'react-native';
import Video from 'react-native-video';

const {width,height} = Dimensions.get('window');
const bl = width / 1194;
const url = 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'

const RootView = () => {
  const onLoad = () => {
    console.log("onLoad")
  };
  const onLoadStart = () => {
    console.log("onLoadStart")
  };

  return (
    <View style={styles.bigView}>
      <View style={styles.asideView}>
        <Image
        source={require('../res/logo.png')}
        style={styles.logoView}
      /></View>
      <View style={styles.maiView}>
        <View style={styles.headView}></View>
        <View style={styles.contentView}>
        <Video  source={{uri: url}}   // Can be a URL or a local file.
       ref={(ref) => {
         this.player = ref
       }}        
       controls={true}                              // Store reference
       resizeMode="cover"  
       onLoad={onLoad}  
       onLoadStart={onLoadStart}  
       style={styles.backgroundVideo} />
        </View>
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
    flex:1,
    flexDirection:'column'
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
  },
  contentView:{
    backgroundColor:"yellow",
    flex: 1,
    padding: 0,
  },
  backgroundVideo: {
    backgroundColor:'blue',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
})
export default RootView;
