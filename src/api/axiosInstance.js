import axios from 'axios';
import {  GEOCODE_REVERSE_BASE_URL, IP_LOCATION_BASE_URL, SEARCH_COUNTRY_BASE_URL, WEATHER_API_BASE_URL } from './Utils';

const weatherApiInstance = axios.create({
  baseURL: WEATHER_API_BASE_URL, 
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json',
  },
});
const cityApiInstance = axios.create({
  baseURL: SEARCH_COUNTRY_BASE_URL, 
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json',
  },
});
const geoCodeApiInstance = axios.create({
  baseURL: GEOCODE_REVERSE_BASE_URL, 
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json',
  },
});
const ipCodeApiInstance = axios.create({
  baseURL: IP_LOCATION_BASE_URL, 
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json',
  },
});
// const countryIconApi = axios.create({
//   baseURL: COUNTRY_ICON_BASE_URL, 
//   timeout: 10000, 
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

export {
  weatherApiInstance,
  cityApiInstance,
  geoCodeApiInstance,
  ipCodeApiInstance
  // countryIconApi
};