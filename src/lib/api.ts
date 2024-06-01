import { constants } from '@/config/constants';
import axios, { CreateAxiosDefaults } from 'axios';

// Function to create a configured Axios instance
const createAxiosInstance = (options: CreateAxiosDefaults = {}) => {
  // Default configuration
  const defaultConfig = {
    baseURL: constants.apiBaseUrl, // Replace with your API base URL
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  // Merge default configuration with custom options
  const config = { ...defaultConfig, ...options };

  // Create and return Axios instance
  return axios.create(config);
};


const api = createAxiosInstance();
const protectedApi = createAxiosInstance({
  headers: {
    'Authorization':localStorage.getItem('token') ? `Bearer ${JSON.parse(localStorage.getItem('token')||'')}` : ''
  }
})
export {createAxiosInstance, api, protectedApi};
