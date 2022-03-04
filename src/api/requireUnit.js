import {Alert} from 'react-native';
import globalKey from '../../globalKey';
import Toast from '../components/customCom/Toast';
import Loading from '../components/customCom/Loading';
const get = async (urlName, params, isLoading) => {
  const url = globalKey.baseUrl + urlName+params;
  console.log("url:",url)
  if (isLoading !== false) {
    Loading.show();
  }
 
  try {
    // 注意这里的await语句，其所在的函数必须有async关键字声明
    let response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/json;charset=UTF-8',
      },
    });
    let responseJson = await response.json();
    Loading.hidden();
    console.log('responseJson:', JSON.stringify(responseJson));
    console.log('responseJson.code:', responseJson.code);

    if (responseJson.code ===200) {
      console.log("true")
      return responseJson.rows;
    }  else {
      Toast.show('请求错误：' + responseJson.msg);
    }
  } catch (error) {
    console.error(error);
    console.error('异常捕获:', error.message);
    Alert.alert('错误提示', error.message);
    Loading.hidden();
  }
};

  const require = {get};
export {require};