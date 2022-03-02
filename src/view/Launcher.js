import React from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import Video from 'react-native-video';
const {width, height} = Dimensions.get('window');
const Launcher = ({navigation, route}) => {
  const nextView = () => {
    navigation.navigate('RootView');
    console.log('next');
  };
  const onLoad = () => {
    console.log('onLoad');
  };
  const onLoadStart = () => {
    console.log('onLoadStart');
  };

  return (
    <View style={styles.bigView}>
      <Video
        source={require('../res/big_buck_bunny.mp4')} // Can be a URL or a local file.
        resizeMode="cover"
        onLoad={onLoad}
        onLoadStart={onLoadStart}
        onEnd={nextView} // 播放完成后的回调
        style={styles.backgroundVideo}
      />
    </View>
  );
};
var styles = StyleSheet.create({
  bigView: {
    width: width,
    height: height,
    flexDirection: 'row',
    position: 'relative',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
export default Launcher;
