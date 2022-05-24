import axios from 'axios';
import { API_URL } from './config';

const http = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

const getPosts = (callback) => {
  http
    .get('post/list')
    .then((response) => {
      callback(response.data.data);
    })
    .catch((error) => {
      console.log('getPosts Err : ', error);
    });
};

const postLikeDislike = (id, data, callback) => {
  const { type } = data;
  http
    .post(`post/${id}/${type}`)
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => {
      console.log('getPosts Err : ', error);
    });
};

export { getPosts, postLikeDislike };
