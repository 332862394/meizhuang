import {Alert} from 'react-native';
import Toast from '../components/customCom/Toast';
import Loading from '../components/customCom/Loading';
const post = async (urlName, params, isLoading, hasToken) => {
    let reqParams = {Data: params};
    const url = globalKey.baseUrl + urlName;
  
    if (isLoading !== false) {
      Loading.show();
    }
    if (hasToken !== false) {
      const tokenParams = {
        AccessToken: await AsyncStorage.getItem('loginToken'),
        Data: params,
      };
      reqParams = tokenParams;
    }
    try {
      // 注意这里的await语句，其所在的函数必须有async关键字声明
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          Accept: '*/*',
          'Content-Type': 'application/json;charset=UTF-8',
        },
        body: JSON.stringify(reqParams),
      });
      let responseJson = await response.json();
      Loading.hidden();
      console.log('urlName:', urlName + ' params:', reqParams);
      console.log('responseJson:', JSON.stringify(responseJson));
      if (responseJson.RetCode === 0) {
        return responseJson.Data;
      } else if (responseJson.RetCode === 10006) {
        login(); //TODO
      } else {
        Toast.show('请求错误：' + responseJson.RetMsg);
      }
    } catch (error) {
      console.error(error);
      console.error('异常捕获:', error.message);
      Alert.alert('错误提示', error.message);
      Loading.hidden();
    }
  };
  const require = {post};
export {require};