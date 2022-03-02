import React, {useState,useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
// 播放器组件
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/Ionicons';
 
const {width,height} = Dimensions.get('window');

 const VideoPlayer = props => {
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
    
     // 当视频开始加载时
 const _onLoadStart=()=> {
    //
    console.log("onLoadStart")
  }
 
  // 当视频在不断的加载时
  const _onLoad=()=> {
    //
    console.log("onLoad")
  }
  // 当视频播放时，每250ms调用一次，便于知悉当前播放位置(时间)
  const  _onProgress=(data)=> {
    console.log("_onProgress:data",data)
    if (!videoLoaded) {
        console.log("1")
        setVideoLoaded(t=>true)
    }
    console.log("2")

    // 视频中时长
    let duration = data.seekableDuration;
    console.log("3")

    let currentTime = data.currentTime;
    // toFixed(2) get 小数点后两位
    let percent = Number((currentTime / duration).toFixed(2));
    console.log("4")

    setVideoTotal(t=>t=duration)
    console.log("5")

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
   // 当视频播放结束时调用
   const  _onEnd=()=> {
       setVideoProgress(t=>t=1)
       setPlaying(t=>t=false)
  }
 
  // 当视频出错时调用
 const  _onError=(e)=> {
    console.log("_onError")
     setVideoOk(t=>t=false)
   
  }
 // 重新播放
 const _rePlay=()=> {
    this.refs.videoPlayer.seek(0)
  }
 
  // 暂停播放
  const _pause=()=> {
    if (!this.state.paused) {
      this.setState({
        paused: true
      })
    }
  }
 
  // 继续播放
  const _resume=()=> {
    if (this.state.paused) {
      this.setState({
        paused: false
      })
    }
  }

  return (
    <View style={styles.videoBox}>
        <Video
          style={styles.video}
        //   ref="videoPlayer"

          source={{uri: props.uri}}
          // 声音放大的倍数: 0 is muted, 1 is double.
          volume={5}
          // 是否暂停 true or false.
          paused={paused}
          // 0 是 暂停, 1 是 正常.
          rate={rate}
          // 是否静音 true or false.
          muted={muted}
          // 充满整个播放区域 或 自适应
          resizeMode={resizeMode}
          // 是否重复播放 true or false.
          repeat={repeat}
          // 当视频开始加载时
          onLoadStart={_onLoadStart}
          // 当视频在不断的加载时
          onLoad={_onLoad}
          // 当视频播放时，每250ms调用一次，便于知悉当前播放位置(时间)
          onProgress={_onProgress}
          // 当视频播放结束时调用
          onEnd={_onEnd}
          // 当视频出错时调用
          onError={_onError}
        />
        {
          !videoOk && <Text style={styles.failText}>视频出错了！很抱歉</Text>
        }
         {
          !videoLoaded && <ActivityIndicator style={styles.loading} color="#ee735c"/>
        }
        {
          videoLoaded && !playing
            ?
            <Icon
              style={styles.playIcon}
              onPress={_rePlay}
              name='ios-play'
              size={48}
            />
            : null
        }
          {
          videoLoaded && playing
              ?
              <TouchableOpacity
                style={styles.pauseBtn}
                onPress={_pause}
              >
                {
                 paused
                    ?
                    <Icon
                      style={styles.resumeIcon}
                      size={48}
                      onPress={_resume}
                      name="ios-play"
                    />
                    :
                    <Text></Text>
                }
              </TouchableOpacity>
              : null
        }
         <View style={styles.progressBox}>
          <View style={[styles.progressBar, {width: width * videoProgress}]}></View>
        </View>
    </View>
  );
};
const styles = StyleSheet.create({
    // 视频播放器 容器
    videoBox: {
      width: width,
      height: width * 0.56,
      backgroundColor: '#000'
    },
    // 视频播放器
    video: {
      width: width,
      height: width * 0.56,
      backgroundColor: '#000'
    },
    // 加载动画(菊花图)
    loading: {
      position: 'absolute',
      left: 0,
      top: 80,
      width: width,
      alignSelf: 'center', // 字体居中对齐
      backgroundColor: 'transparent'
    },
    // 视频出错时，文本样式
    failText: {
      position: 'absolute',
      left: 0,
      top: 90,
      width: width,
      textAlign: 'center',
      color: '#fff',
      backgroundColor: 'transparent'
    },
    // 进度条样式
    progressBox: {
      width: width,
      height: 2,
      backgroundColor: '#ccc',
    //   position: 'absolute',
    //  top: 0,left:0
    },
   
    progressBar: {
      width: 1,
      height: 2,
      backgroundColor: '#ff6600'
    },
    // 播放按钮样式
    playIcon: {
      position: 'absolute',
      top: 90,
      left: width / 2 - 30,
      width: 60,
      height: 60,
      paddingTop: 8,
      paddingLeft: 22,
      backgroundColor: 'transparent',
      borderColor: '#fff',
      borderWidth: 1,
      borderRadius: 30,
      color: '#ed7b66'
    },
    // 暂停
    pauseBtn: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: width,
      height: width * 0.56
    },
    // 继续
    resumeIcon: {
      position: 'absolute',
      top: 80,
      left: width / 2 - 30,
      width: 60,
      height: 60,
      paddingTop: 8,
      paddingLeft: 22,
      backgroundColor: 'transparent',
      borderColor: '#fff',
      borderWidth: 1,
      borderRadius: 30,
      color: '#ed7b66'
    }})
export default VideoPlayer