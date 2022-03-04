import {require} from './requireUnit';
import Urls from './urls';
const getTypesList = async params => {
    return await require.get(Urls.getTypesList, params, true);
  };
  const getPlayersList = async params => {
    console.log("params:",params)
    return await require.get(Urls.getTypesList, params, true);
  };
  const getVideoContent = async params => {
    console.log("params:",params)
    return await require.get(Urls.getVideoContent, params, true);
  };
export default {
    getTypesList,
    getPlayersList,
    getVideoContent
};
