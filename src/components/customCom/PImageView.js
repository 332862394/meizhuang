import React, {useState} from 'react';
import {Image, StyleSheet, View, ViewPropTypes} from 'react-native';
import PropTypes from 'prop-types';

const PImageView = props => {
  const [loading, setLoading] = useState(true);
  const onLoadEvent = () => {
    console.log('加载完成');
    setLoading(t => false);
  };
  return (
    <View style={props.style}>
      <Image
        style={[props.style, styles.imageStyle]}
        source={props.source}
        onLoad={onLoadEvent}
      />
      {loading ? (
        <Image
          style={[props.style, styles.imageStyle]}
          source={
            props.loadingFlag
              ? require('../../res/loading.gif')
              : require('../../res/launcher.jpg')
          }
        />
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  imageStyle: {position: 'absolute', top: 0, right: 0, left: 0, bottom: 0},
});
export default PImageView;
