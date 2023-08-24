import axios from 'axios';

export const fetchData = () => {
  return axios.get('/api/items')
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};
