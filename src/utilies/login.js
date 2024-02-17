import axios from 'axios';
import { url_login } from '../services/url';

export const login = async (username, password) => {
  try {
    const response = await axios.post(url_login, { username, password });
    const token = response.data;
    console.log("response: ", response.data);
    return token;
  } catch (error) {
    console.error('خطا در ورود:', error);
    throw error;
  }
};