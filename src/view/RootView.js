import React,{useState,useRef} from 'react';
import {View, Image, Dimensions,Text,StyleSheet,ActivityIndicator} from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/Ionicons';

import VideoPlayer from '../components/VideoPlayer';
const {width,height} = Dimensions.get('window');
const bl = width / 1194;
const url = 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'

const RootView = () => {
  const [rate, setRate] = useState(1);
  const [muted, setMuted] = useState(false);

  const [resizeMode, setResizeMode] = useState('contain');

  const [repeat, setRepeat] = useState(false);
  const [videoOk, setVideoOk] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [paused, setPaused] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0.01);
  const [videoTotal, setVideoTotal] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
 
  const onLoadStart = () => {
    console.log("onLoadStart")
  };
  const onLoad = () => {
    console.log("onLoad")
  };
  const onProgress=(data)=>{
    console.log("onProgress:",data)
    if (!videoLoaded) {
      setVideoLoaded(t=>true)
  }

  // 视频中时长
  let duration = data.seekableDuration;
  let currentTime = data.currentTime;
  // toFixed(2) get 小数点后两位
  let percent = Number((currentTime / duration).toFixed(2));
  setVideoTotal(t=>t=duration)

  setCurrentTime(t=>t=Number(data.currentTime.toFixed(2)))
  setVideoProgress(t=>t=percent)
  

  if (!videoLoaded) {
      setVideoLoaded(t=>true)
  }
  // 视频暂停播放或播放结束，显示播放按钮
  if (!playing) {
      setPlaying(t=>true)
  }
  }
  const onEnd=()=>{
    console.log("onEnd")
  }
  const onError=()=>{
    console.log("onError")
  }
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
       style={styles.backgroundVideo} />  
        {
          !videoOk && <Text style={styles.failText}>视频出错了！很抱歉</Text>
        }
         {
          !videoLoaded && <ActivityIndicator style={styles.loading} color="#ee735c"/>
        }
         <View style={styles.progressBox}>
          <View style={[styles.progressBar, {width: (width-200*bl) * videoProgress}]}></View>
        </View>
      </View>
      <View style={styles.controlView}><Text>11</Text></View>
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
 
  logoView:{
    width: 132*bl,
    height: 94*bl,
    marginLeft:33*bl,
    marginTop:37*bl

  },
  maiView:{
    backgroundColor:"blue",
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
  // 进度条样式
  progressBox: {
    width: "100%",
    height: 2,
    backgroundColor: '#ccc',
 
    position: 'absolute',
    top: 0,
    left: 0,
  },
 
  progressBar: {
    width: 1,
    height: 2,
    backgroundColor: '#ff6600'
  },
  // // 播放按钮样式
  // playIcon: {
  //   position: 'absolute',
  //   top: 180*bl,
  //   left:'50%' ,
  //   marginLeft:30*bl,
  //   width: 60*bl,
  //   height: 60*bl,
  //   paddingTop: 8*bl,
  //   paddingLeft: 22*bl,
  //   backgroundColor: 'transparent',
  //   borderColor: '#fff',
  //   borderWidth: 1,
  //   borderRadius: 30,
  //   color: '#ed7b66'
  // },
  // // 暂停
  // pauseBtn: {
  //   position: 'absolute',
  //   left: 0,
  //   top: 0,
  //   width: width,
  //   height: width * 0.56
  // },
  // 继续
  // resumeIcon: {
  //   position: 'absolute',
  //   top: 80,
  //   left: width / 2 - 30,
  //   width: 60,
  //   height: 60,
  //   paddingTop: 8,
  //   paddingLeft: 22,
  //   backgroundColor: 'transparent',
  //   borderColor: '#fff',
  //   borderWidth: 1,
  //   borderRadius: 30,
  //   color: '#ed7b66'
  // },
  controlView:{
  height: 90*bl,
  backgroundColor:'red',
  position: 'relative',
  left: 0,
  bottom: 0,
  }
})
export default RootView;
