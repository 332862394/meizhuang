import React,{useState,useRef} from 'react';
import {View, Image, Dimensions,Text,StyleSheet,ActivityIndicator,TouchableOpacity} from 'react-native';
import Video from 'react-native-video';
import Slider from '@react-native-community/slider';

import Icon from 'react-native-vector-icons/Ionicons';

import VideoPlayer from '../components/VideoPlayer';
const {width,height} = Dimensions.get('window');
console.log("width:",width),
console.log("height:",height)

const bl = width / 1194;
const url = 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'



const RootView = () => {
  const player = useRef(null);


  const [videoOk, setVideoOk] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [paused, setPaused] = useState(false);
  const [videoTotal, setVideoTotal] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [sliderValue, setSliderValue] = useState(0);
  const onLoadStart = () => {
    console.log('onLoadStart');
  };
  const onLoad = () => {
    console.log('onLoad');
  };
  const onProgress = data => {
    if (!videoLoaded) {
      setVideoLoaded(t => true);
    }
    // 视频中时长
    let duration = data.seekableDuration;
    setVideoTotal(t => (t = duration));
    setCurrentTime(t => (t = Number(data.currentTime.toFixed(2))));
    setSliderValue(t=>(t = Number(data.currentTime.toFixed(2))))
    if (!videoLoaded) {
      setVideoLoaded(t => true);
    }
    // 视频暂停播放或播放结束，显示播放按钮
    if (!playing) {
      setPlaying(t => true);
    }
  };
  const onEnd = () => {
    console.log('onEnd');
    setPlaying(t=>t=false)
  };
  const onError=()=>{
    console.log("onError")
    setVideoOk(t=>t=false)
  }
  const changePausedState=()=>{
   
    setPaused(t=>!t)
   console.log("p")
 
  }
  const formatMediaTime=(time)=> {
    let minute = Math.floor(time / 60);
    let second = parseInt(time - minute * 60);
    minute = minute >= 10 ? minute : "0" + minute;
    second = second >= 10 ? second : "0" + second;
    return minute + ":" + second;
   
}
const customerSliderValue=(value)=>{
  console.log("customerSliderValue")
  player.current.seek(value)

  
}
const nextVideo=()=>{
  console.log("next")
}
const goodEvent=()=>{
  console.log("good")
}
const shareEvent=()=>{
  console.log("share")
}
  return (
    <View style={styles.bigView}>
      <View style={styles.asideView}>
        {/* <Image source={require('../res/logo.png')} style={styles.logoView} /> */}
        <Image source={require('../res/left_bkg.png')} style={styles.logoView2} />

      </View>
      <View style={styles.maiView}>
        <View style={styles.headView}></View>
        <View style={styles.contentView}>
          <Video
            source={{uri: url}} // Can be a URL or a local file.
            ref={player}
            paused={paused}
            resizeMode="cover"
            // 当视频开始加载时
            onLoadStart={onLoadStart}
            // 当视频在不断的加载时
            onLoad={onLoad}
            // 当视频播放时，每250ms调用一次，便于知悉当前播放位置(时间)
            onProgress={onProgress}
            // 当视频播放结束时调用
            onEnd={onEnd}
            // 当视频出错时调用
            onError={onError}
            style={styles.backgroundVideo}
          />
          {!videoOk && <Text style={styles.failText}>视频出错了！很抱歉</Text>}
          {!videoLoaded && (
            <ActivityIndicator style={styles.loading} color="#ff4ebb" />
          )}

        </View>
        <View style={styles.controlView}>
            <View style={styles.sliderBox}>
              <Text style={styles.timeView}>{formatMediaTime(currentTime)}</Text>
              <Slider
                style={styles.sliderView}
                value={sliderValue}
                maximumValue={videoTotal}
                thumbTintColor="#ffffff" //开关夹点的颜色
                minimumTrackTintColor="#ff4ebb"
                maximumTrackTintColor="#e9e9e9"
                step={0.01}
                onValueChange={customerSliderValue}
              />
              <Text style={styles.timeView}>{formatMediaTime(videoTotal)}</Text>
            </View>
          {paused ? (
            <TouchableOpacity
              style={styles.btnView}
              onPress={changePausedState}>
              <Image
                source={require('../res/play2.png')}
                style={styles.playBtn}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.btnView}
              onPress={changePausedState}>
              <Image
                source={require('../res/play.png')}
                style={styles.playBtn}
              />
            </TouchableOpacity>
          )}
          <TouchableOpacity style={styles.btnView2} onPress={nextVideo}>
            <Image source={require('../res/next.png')} style={styles.playBtn} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnView3} onPress={goodEvent}>
            <Image source={require('../res/good.png')} style={styles.playBtn} />
            <Text>点赞</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnView4} onPress={shareEvent}>
            <Image
              source={require('../res/share.png')}
              style={styles.playBtn}
            />
            <Text>分享</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles=StyleSheet.create({
  bigView:{
    width: width,
    height: '100%',
    backgroundColor: 'yellow',
    flexDirection:'row',
    padding: 10,
  },
  asideView:{
    width:200*bl,
    height: "100%",
    backgroundColor:"white",
    position: 'relative'
  },
 
  logoView:{
    width: 132*bl,
    height: 94*bl,
    marginLeft:33*bl,
    marginTop:37*bl

  },
  logoView2:{
    position: 'absolute',
    width: 200*bl,
    height: 99*bl,
bottom: 0,

  },
  maiView:{
    backgroundColor:"white",
    flex:1,   
    flexDirection:'column',
    position: 'relative'
  },
  headView:{
    height: 152*bl,
    backgroundColor:'orange'
  },
  contentView:{
    backgroundColor:'#000',
    flex: 1,
    position: 'relative'
  },
  backgroundVideo: {
    backgroundColor:'#000',
    position: 'absolute',
    width: "100%",
    top: 0,
    left: 0,
    bottom: 0,
   
  },
   // 加载动画(菊花图)
   loading: {
    position: 'absolute',
    left: 0,
    top: 180*bl,
    width: '100%',
    alignSelf: 'center', // 字体居中对齐
    backgroundColor: 'transparent'
  },
  // 视频出错时，文本样式
  failText: {
    position: 'absolute',
    left: 0,
    top: 180*bl,
    width: '100%',
    textAlign: 'center',
    color: '#fff',
    backgroundColor: 'transparent'
  },
  
  controlView:{
  height: 90*bl,
  position: 'relative',
  left: 0,
  bottom: 0,
  width: '100%',
  },
 
btnView:{
  position: 'absolute',
  left: 24*bl,
  top: 50*bl
},
btnView2:{
  position: 'absolute',
  left: 74*bl,
  top: 50*bl
},
btnView3:{
  position: 'absolute',
  justifyContent:'center',
  alignItems:'center',
  right: 102*bl,
  top: 21*bl
},
btnView4:{
  position: 'absolute',
  justifyContent:'center',
  alignItems:'center',
  right: 32*bl,
  top: 21*bl
},
playBtn:{
  width: 24*bl,
  height: 24*bl,
  margin: 7*bl
},
timeView:{
  fontSize:16*bl,
  color: '#666666'
},
sliderBox:{
    flexDirection:'row',
    alignItems:'center',
    position: 'absolute',
    top: 5*bl,
    left: 24*bl,
    right: 152*bl
},
sliderView:{
  flex: 1,
height: 40*bl
}

})
export default RootView;
