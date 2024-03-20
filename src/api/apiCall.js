import { WEATHER_API_BASE_URL_OPTIONS } from './Utils';
import { cityApiInstance, geoCodeApiInstance, weatherApiInstance } from './axiosInstance';

const getSearchedCities = async (cityName,count=5) => {
  try {

    const response = await cityApiInstance.get(`search?name=${cityName}&language=en&format=json`);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};
const getSelectedcityWeatherData = async (latitude,longitude) => {
  try {

    const response = await weatherApiInstance.get(`forecast?latitude=${latitude}&longitude=${longitude}${WEATHER_API_BASE_URL_OPTIONS}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};


const getLocationInfo = async (latitude, longitude) => {
  try {
    const response = await geoCodeApiInstance.get(`/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);
    if (!response.data || !response.data.city) {
      throw new Error('Failed to fetch location information');
    }
    const data = response.data;
    return {
      city: data.city,
      region: data.principalSubdivision,
      country: data.countryName,
      latitude: data.latitude,
      longitude: data.longitude,
    };
  } catch (error) {
    console.error('Error fetching location information:', error);
    throw error;
  }
};

const getUserLocationByNavigator = async () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log("Latitude:", latitude);
        console.log("Longitude:", longitude);
        try {
          const locationInfo = await getLocationInfo(latitude, longitude);
          resolve(locationInfo);
        } catch (error) {
          reject(error);
        }
      },
      (error) => {
        console.error('Error getting user location:', error);
        reject(error);
      }
    );
  });
};

const getLocationByIpAddress = async () => {
  try {
    const response = await fetch('http://ip-api.com/json/');
    if (!response.ok) {
      throw new Error('Failed to fetch location information');
    }
    const data = await response.json();
    return {
      city: data.city,
      region: data.regionName,
      country: data.country,
      latitude: data.lat,
      longitude: data.lon,
    };
  } catch (error) {
    console.error('Error fetching location information:', error);
    throw error;
  }
};


const fetchUserLocationData = async () => {
  try {
    if (navigator.geolocation) {
      const locationInfo = await getUserLocationByNavigator();
      return locationInfo;
    } else {
      const locationInfo = await getLocationByIpAddress();
      return locationInfo;
    }
  } catch (error) {
    console.error('Failed to fetch user location:', error);
    throw error;
  }
};


const getUserLocationData = async () => {
  try {
    const locationInfo = await fetchUserLocationData();
    console.log("Location information:", locationInfo);
  } catch (error) {
    console.error('Failed to fetch user location:', error);
  }
};






export{getSearchedCities,getSelectedcityWeatherData,getUserLocationData}

