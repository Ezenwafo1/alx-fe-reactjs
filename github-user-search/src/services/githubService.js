import axios from 'axios';

const BASE_URL = 'https://api.github.com/users';
const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

export const fetchGitHubUser = async (username) => {
  const headers = GITHUB_API_KEY
    ? { Authorization: `Bearer ${GITHUB_API_KEY}` }
    : {};
  const response = await axios.get(`${BASE_URL}/${username}`, { headers });
  return response.data;
};
