import {require} from './requireUnit';
import Urls from './urls';
const getPropList = async params => {
    return await require.get(Urls.getPropList, params, true);
  };
  const getAutherList = async params => {
    console.log("params:",params)
    return await require.get(Urls.getAutherList, params, true);
  };
  const getContent = async params => {
    console.log("params:",params)
    return await require.get(Urls.getContent, params, true);
  };
  const getContentByAuther = async params => {
    console.log("params:",params)
    return await require.get(Urls.getContentByAuther, params, true);
  };
  const getAutherListByProp = async params => {
    console.log("params:",params)
    return await require.get(Urls.getAutherListByProp, params, true);
  };
export default {
  getPropList,
  getAutherList,
  getContent,
  getContentByAuther,
  getAutherListByProp
};
