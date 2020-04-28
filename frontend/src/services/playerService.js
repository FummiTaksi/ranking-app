import axios from 'axios';
import { BACKEND_URL } from '../utils/config';

const baseUrl = `${BACKEND_URL}/players`;

const getPlayers = async () => {
  const url = `${baseUrl}/`;
  const response = await axios.get(url);
  return response.data;
};

const getPlayer = async (id) => {
  const url = `${baseUrl}/${id}`;
  const response = await axios.get(url);
  return response.data;
};

export default { getPlayers, getPlayer };
