import axios from 'axios';
import { API_URL } from './config';

const getPosts = async () => {
  const config = { withCredentials: true };

  try {
    const response = await axios.get(API_URL + '/post/list', config);
    return response.data.data;
  } catch (error) {
    console.log('getPosts Error : ', { error });
  }
};

const getPostsDetail = async (postId) => {
  const config = { withCredentials: true };

  try {
    const response = await axios.get(API_URL + '/post/' + postId + '/detail', config);
    return response.data.data;
  } catch (error) {
    console.log('getPosts Error : ', { error });
  }
};

const postLikeDislike = async (id, data) => {
  const { type } = data;
  const config = { withCredentials: true };

  try {
    axios.get(API_URL + `/post/123/${type}`, config);
    const response = await axios.post(API_URL + `/post/${id}/${type}`, null, config);
    return response.data.data;
  } catch (error) {
    console.log('postLikeDislike Error : ', { error });
  }
};

const submitPost = async (formData) => {
  const config = { withCredentials: true };

  try {
    const response = await axios.post(API_URL + '/post/create', formData, config);
    return response.data.data;
  } catch (error) {
    console.log('submitPost Error : ', { error });
  }
};

export { getPosts, getPostsDetail, postLikeDislike, submitPost };
