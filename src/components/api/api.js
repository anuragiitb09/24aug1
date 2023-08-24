// api.js
import axios from 'axios';

export const fetchData = () => {
  return axios.get('/api/items') // Replace with your actual API endpoint
    .then((response) => response.data)
    .catch((error) => {
      console.error('An error occurred:', error);
      throw error; // Rethrow the error to be handled in the component
    });
};
