import RootToast from 'react-native-toast-message';

const Toast = {
  show: (msg1, msg2) => {
    RootToast.show({
      type: 'info',
      text1: msg1,
      text2: msg2,
      visibilityTime: 1500,
    });
  },
};

export default Toast;
