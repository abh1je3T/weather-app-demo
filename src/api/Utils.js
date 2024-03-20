const WEATHER_API_BASE_URL="https://api.open-meteo.com/v1/";
const SEARCH_COUNTRY_BASE_URL="https://geocoding-api.open-meteo.com/v1/";
const COUNTRY_ICON_BASE_URL="https://open-meteo.com/'";
const COUNTRY_FLAGS_BASE="https://flagsapi.com/";
//https://api.open-meteo.com/v1/forecast?latitude=28.6519&longitude=77.2315
const WEATHER_API_BASE_URL_OPTIONS= "&current=temperature_2m,rain,snowfall,wind_speed_10m,wind_gusts_10m&hourly=temperature_2m,rain,snowfall&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=auto"
//https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=19.07283&longitude=72.88261
const GEOCODE_REVERSE_BASE_URL="https://api.bigdatacloud.net/";
const IP_LOCATION_BASE_URL="http://ip-api.com/json/";
export {
    WEATHER_API_BASE_URL,
    WEATHER_API_BASE_URL_OPTIONS,
    SEARCH_COUNTRY_BASE_URL,
    COUNTRY_ICON_BASE_URL,
    COUNTRY_FLAGS_BASE,
    GEOCODE_REVERSE_BASE_URL,
    IP_LOCATION_BASE_URL
}