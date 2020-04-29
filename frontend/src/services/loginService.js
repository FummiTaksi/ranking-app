import axios from 'axios';
import { BACKEND_URL } from '../utils/config';

const baseUrl = `${BACKEND_URL}/login`;

const login = async (credentials) => {
  const response = await axios.post(baseUrl, credentials);
  return response.data;
};

export default { login };
