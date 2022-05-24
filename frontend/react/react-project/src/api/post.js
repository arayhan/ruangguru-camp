import axios from 'axios';
import { API_URL } from './config';

const getPosts = async (callback) => {
  const config = { withCredentials: true };

  try {
    const response = await axios.get(API_URL + '/post/list', config);
    callback(response.data.data);
  } catch (error) {
    console.log('getPosts Err : ', { error });
  }
};

const postLikeDislike = async (id, data, callback) => {
  const { type } = data;
  const config = { withCredentials: true };

  try {
    const response = await axios.post(API_URL + `/post/${id}/${type}`, null, config);
    callback(response.data.data);
  } catch (error) {
    console.log('postLikeDislike Err : ', { error });
  }
};

export { getPosts, postLikeDislike };
