import React, {useState, useRef} from 'react';
import {
  View,
  Image,
  Dimensions,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import Video from 'react-native-video';
import Slider from '@react-native-community/slider';

import billUnit from '../api/billUnit';

const {width, height} = Dimensions.get('window');
console.log('width:', width), console.log('height:', height);

const bl = width / 1194;
// const url = 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4';
const url = 'https://vjs.zencdn.net/v/oceans.mp4';

const RootView = () => {
  React.useEffect(() => {
    getData();
  }, []);

  const player = useRef(null);
  const [datalist, setDatalist] = useState([
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1',
      title: '最多五个字哈哈',
      array: [
        {
          id: 'video001',
          des:" 视频1",
          url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
          poster:
            'https://c-ssl.duitang.com/uploads/blog/202108/05/20210805190242_bec37.jpg',
        },
        {
          id: 'video002',
          des:" 视频2",
          url: 'https://vjs.zencdn.net/v/oceans.mp4',
          poster:
            'https://c-ssl.duitang.com/uploads/blog/202107/19/20210719202109_88d76.jpg',
        },
        {
          id: 'video003',
          des:" 视频3",
          url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
          poster:
            'https://c-ssl.duitang.com/uploads/blog/202108/05/20210805190242_bec37.jpg',
        },
      ],
      url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
      poster:
        'https://c-ssl.duitang.com/uploads/blog/202108/05/20210805190242_bec37.jpg',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f632',
      title: 'Second Item2',
      url: 'https://vjs.zencdn.net/v/oceans.mp4',
      poster:
        'https://c-ssl.duitang.com/uploads/blog/202107/19/20210719202109_88d76.jpg',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f633',
      title: 'Second Item3',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f634',
      title: 'Second Item4',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f635',
      title: 'Second Item5',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f636',
      title: 'Second Item6',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f637',
      title: 'Second Item7',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f638',
      title: 'Second Item8',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d729',
      title: 'Third Item9',
    },
  ]);

  const [datalist2, setDatalist2] = useState([
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1',
      title: '最多五个字哈哈',
      state: 0,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f632',
      title: 'Second Item2',
      state: 0,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f633',
      title: 'Second Item3',
      state: 1,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f634',
      title: 'Second Item4',
      state: 1,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f635',
      title: 'Second Item5',
      state: 0,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f636',
      title: 'Second Item6',
      state: 0,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f637',
      title: 'Second Item7',
      state: 0,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f638',
      title: 'Second Item8',
      state: 0,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d729',
      title: 'Third Item9',
      state: 0,
    },
  ]);

  const [playItem, setPlayItem] = useState({});
  const [videoOk, setVideoOk] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [paused, setPaused] = useState(true);
  const [videoTotal, setVideoTotal] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [sliderValue, setSliderValue] = useState(0);
  const getData = async () => {
    // const res1 = await billUnit.getPropList('level=1');
    // console.log("res1:",res1)
    // setDatalist2(t=>t=res1)
    // const res2 = await billUnit.getAutherList('areaId=110');
    // console.log("res2:",res2)
    // const res3 = await billUnit.getContent('propId=4&userId=1');
    // console.log("res3:",res3)
    // const res4 = await billUnit.getContentByAuther('userId=1');
    // console.log("res4:",res4)
    // const res5 = await billUnit.getAutherListByProp('propId=4');
    // console.log("res5:",res5)
    // if (res) {
    //   setDatalist(t => res);
    // }
    setPlayItem(t=>t=datalist[0])
  };
  const onLoadStart = () => {
    console.log('onLoadStart');
    setVideoLoaded(t => false);

  };
  const onLoad = () => {
    console.log('onLoad');
    setVideoLoaded(t => false);

  };
  const onProgress = data => {
    console.log("data:",data)
    if (!videoLoaded) {
      setVideoLoaded(t => true);
    }
    // 视频中时长
    let duration = data.seekableDuration;
    setVideoTotal(t => (t = duration));
    setCurrentTime(t => (t = Number(data.currentTime.toFixed(2))));
    setSliderValue(t => (t = Number(data.currentTime.toFixed(2))));
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
    setPlaying(t => (t = false));
    setPaused(t => (t = true));
    if( player.current){
      player.current.seek(value);

    }
    setCurrentTime(t => (t = 0));
    setSliderValue(t => (t = 0));
  };
  const onError = () => {
    console.log('onError');
    setVideoOk(t => (t = false));
  };
  const changePausedState = () => {
    setPaused(t => !t);
    console.log('p');
  };
  const formatMediaTime = time => {
    let minute = Math.floor(time / 60);
    let second = parseInt(time - minute * 60);
    minute = minute >= 10 ? minute : '0' + minute;
    second = second >= 10 ? second : '0' + second;
    return minute + ':' + second;
  };
  const customerSliderValue = value => {
    console.log('customerSliderValue');
    if( player.current){
      player.current.seek(value);

    }
  };
  const nextVideo = () => {
    console.log('next');
  };
  const goodEvent = () => {
    console.log('good');
  };
  const leftClick=(item)=>{
    console.log('item2:', item);
    setPlayItem(t=>t=item)
    setPlaying(t => (t = false));
    setPaused(t => (t = true));
    if( player.current){
      player.current.seek(0);

    }
    setCurrentTime(t => (t = 0));
    setSliderValue(t => (t = 0));

  }
  const topClick=(item)=>{
    console.log('topClickitem:', item);

  }
  const videoClick=(item)=>{
    console.log('videoClickitem:', item);
    setPlayItem(t=>t=item)
    setPlaying(t => (t = false));
    setPaused(t => (t = true));
    if( player.current){
      player.current.seek(0);

    }
    setCurrentTime(t => (t = 0));
    setSliderValue(t => (t = 0));


   
  }
  const renderData = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.itemView}
        onPress={ () => {
          leftClick(item)
        }}>
        <Image
          source={require('../res/left_bkg.png')}
          style={styles.headerView}
        />
        <View style={styles.itemTextView}>
          <Text style={styles.title}>
            {item.title
              ? item.title.length > 5
                ? item.title.substr(0, 5) + '...'
                : item.title
              : ''}
          </Text>
          <Text style={styles.number}>12个视频</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const renderData2 = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.itemView2}
        onPress={async () => {
          topClick(item)
        }}>
        <Image source={require('../res/left_bkg.png')} style={styles.backImg} />
        {item.state === 0 ? (
          <Image
            source={require('../res/bf_bnt.png')}
            style={styles.headerView2}
          />
        ) : (
          <Image
            source={require('../res/bz68.png')}
            style={styles.headerView2}
          />
        )}

        <Text style={styles.title2}>
          {item.propName
            ? item.propName.length > 10
              ? item.propName.substr(0, 5) + '...'
              : item.propName
            : ''}
        </Text>
      </TouchableOpacity>
    );
  };
  const renderData3 = ({item}) => {
    console.log("item:",item)
    return (
      <TouchableOpacity
        style={styles.itemView3}
        onPress={async () => {
          videoClick(item)
        }}>
         <Image
          source={{uri:item.poster}}
          style={styles.backImg}
        /> 
       

        <Text style={styles.title3}>
          {item.des
            ? item.des.length > 10
              ? item.des.substr(0, 5) + '...'
              : item.des
            : ''}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.bigView}>
      <View style={styles.asideView}>
        <Image
          source={require('../res/left_bkg.png')}
          style={styles.logoView}
        />
        <SafeAreaView style={styles.container}>
          <FlatList
            data={datalist}
            showsVerticalScrollIndicator={false} 
            renderItem={renderData}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
        <Image
          source={require('../res/left_bkg.png')}
          style={styles.logoView2}
        />
      </View>
      <View style={styles.maiView}>
        <View style={styles.headView}>
          <SafeAreaView style={styles.container2}>
            <FlatList
              data={datalist2}
              horizontal={true}
              showsHorizontalScrollIndicator={false} 
              renderItem={renderData2}
              keyExtractor={item => item.id}
            />
          </SafeAreaView>
        </View>
        <View style={styles.contentView}>
          {(!videoLoaded&&paused)? <Image
          source={{uri:playItem.poster}}
          style={styles.backgroundVideo}
        />: <Video
        source={{uri: playItem.url}} // Can be a URL or a local file.
        // source={require('../res/oceans.mp4')} // Can be a URL or a local file.
        ref={player}
        poster={playItem.poster}
        posterResizeMode='cover'
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
      />}
         
          {!videoOk && <Text style={styles.failText}>视频出错了！很抱歉</Text>}
          {(!videoLoaded&&!paused) && (
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
        </View>
        <View style={styles.footerView}>
          <SafeAreaView style={styles.container2}>
            <FlatList
              data={datalist[0].array}
              horizontal={true}
              showsHorizontalScrollIndicator={false} 
              renderItem={renderData3}
              keyExtractor={item => item.id}
            />
          </SafeAreaView>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  bigView: {
    width: width,
    height: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 8*bl,
  },
  asideView: {
    width: 200 * bl,
    height: '100%',
    // backgroundColor: 'white',
    position: 'relative',
  },

  logoView: {
    width: 132 * bl,
    height: 94 * bl,
    marginLeft: 33 * bl,
    marginTop: 37 * bl,
  },
  logoView2: {
    position: 'relative',
    width: 200 * bl,
    height: 99 * bl,
    bottom: 0,
  },
  container: {
    marginTop: 45 * bl,
    flex: 1,
  },
 
  itemView: {
    width: 200 * bl,
    height: 75 * bl,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerView: {
    width: 50 * bl,
    height: 50 * bl,
    borderRadius: 10 * bl,
    marginLeft: 16 * bl,
    backgroundColor:'yellow'

  },
  itemTextView: {
    marginLeft: 12 * bl,
  },
  title: {
    color: '#333333',
    fontSize: 20 * bl,
    lineHeight: 28 * bl,
  },
  number: {
    color: '#999999',
    fontSize: 16 * bl,
  },
  maiView: {
    flex: 1,
    flexDirection: 'column',
    position: 'relative',
  },
  headView: {
    height: 152 * bl,
  },
  footerView:{
height: 80*bl
  },
  container2: {
    flex: 1,
    paddingLeft: 16 * bl,
  },

  itemView2: {
    marginTop: 16 * bl,
    width: 180 * bl,
    height: 120 * bl,
    marginRight: 16 * bl,
    borderRadius: 5 * bl,
    position: 'relative',
  },
  itemView3: {
    width: 180 * bl,
    height: 120 * bl,
    marginRight: 16 * bl,
    borderRadius: 5 * bl,
    position: 'relative',
  },
  backImg: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
  },
  headerView2: {
    width: 24 * bl,
    height: 24 * bl,
    marginTop: 8 * bl,
    marginLeft: 8 * bl,
  },

  title2: {
    color: '#ffffff',
    fontSize: 16 * bl,
    position: 'absolute',
    left: 8 * bl,
    bottom: 7*bl,
    
    zIndex:1
  },
  title3: {
    color: '#ff265a',
    fontSize: 16 * bl,
    position: 'absolute',
    left: 8 * bl,
    top: 50*bl,
    
    
  },
  contentView: {
    backgroundColor: '#000',
    flex: 1,
    position: 'relative',
  },
  backgroundVideo: {
    backgroundColor: '#000',
    position: 'absolute',
    width: '100%',
    top: 0,
    left: 0,
    bottom: 0,
   
  },
  // 加载动画(菊花图)
  loading: {
    position: 'absolute',
    left: 0,
    top: 180 * bl,
    width: '100%',
    alignSelf: 'center', // 字体居中对齐
    backgroundColor: 'transparent',
  },
  // 视频出错时，文本样式
  failText: {
    position: 'absolute',
    left: 0,
    top: 180 * bl,
    width: '100%',
    textAlign: 'center',
    color: '#fff',
    backgroundColor: 'transparent',
  },

  controlView: {
    height: 90 * bl,
    position: 'relative',
    left: 0,
    bottom: 0,
    width: '100%',
  },

  btnView: {
    position: 'absolute',
    left: 24 * bl,
    top: 50 * bl,
  },
  btnView2: {
    position: 'absolute',
    left: 74 * bl,
    top: 50 * bl,
  },
  btnView3: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    right: 32 * bl,
    top: 21 * bl,
  },

  playBtn: {
    width: 24 * bl,
    height: 24 * bl,
    margin: 7 * bl,
  },
  timeView: {
    fontSize: 16 * bl,
    color: '#666666',
  },
  sliderBox: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 5 * bl,
    left: 24 * bl,
    right: 152 * bl,
  },
  sliderView: {
    flex: 1,
    height: 40 * bl,
  },
});
export default RootView;
