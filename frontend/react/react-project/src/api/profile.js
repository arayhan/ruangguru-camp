import axios from 'axios';
import { API_URL } from './config';

const getProfile = async (userId) => {
  const config = { withCredentials: true };

  try {
    const response = await axios.get(API_URL + '/profile/' + userId, config);
    return response.data.data;
  } catch (error) {
    console.log('getProfile Error : ', { error });
  }
};

export { getProfile };
