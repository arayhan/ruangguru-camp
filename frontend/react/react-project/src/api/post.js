import axios from 'axios';
import { API_URL } from './config';

const getPosts = (callback) => {
  const config = { withCredentials: true };

  axios
    .get(API_URL + '/post/list', config)
    .then((response) => {
      callback(response.data.data);
    })
    .catch((error) => {
      console.log('getPosts Err : ', error);
    });
};

const postLikeDislike = (id, data, callback) => {
  const { type } = data;
  const config = { withCredentials: true };

  axios
    .post(API_URL + `/post/${id}/${type}`, null, config)
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => {
      console.log('getPosts Err : ', error);
    });
};

export { getPosts, postLikeDislike };
