import React, { useCallback, useEffect, useState } from "react";
import { Autocomplete, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {
  getSearchedCities,
  getSelectedcityWeatherData,
} from "../../api/apiCall";
import { useMainContext } from "../../Context/mainContext";
import { CustomPopper, getrenderOption } from "./Utils";
import { useDebounce } from "../../CustomHooks/useDebounce";

function TopNavigation() {
  const {
    // setSearchedCities,
    // searchedCityData,
    // setSearchValue,
    // searchValue,
    selectedCityData,
    setSelectedCityData,
    setSelectedCityWeatherData,
  } = useMainContext();

  const [typedcity, setTypedcity] = useState("");
  const [cityResult, setCityResult] = useState([]);

  async function fetchData() {
    if(typedcity){
      const {results} = await getSearchedCities(typedcity);
      setCityResult(results||[]);
    }
  }
  useDebounce({ callback: fetchData, value: typedcity });


  const fetchWeatherData=useCallback(
    async () => {
      const { latitude, longitude } = selectedCityData;
      if (latitude&&longitude) {
        const weatherDataResponse = await getSelectedcityWeatherData(
          latitude,
          longitude
          );
          setSelectedCityWeatherData(weatherDataResponse);
        }
    },
    [selectedCityData,setSelectedCityWeatherData],
  )

  useEffect(() => {
    selectedCityData?.longitude&&fetchWeatherData();
    // eslint-disable-next-line
  }, [selectedCityData?.longitude]);

  return (
    <nav className="sticky top-0 z-10 bg-white border-b border-gray-200 bg-opacity-10">
      <div className="px-4 mx-20">
        <div className="flex items-center justify-between h-16">
          <span className="text-2xl text-gray-900 font-semibold">
            Weather Forecast
          </span>
          <div className="flex space-x-4 text-gray-900">
            <Autocomplete
              className="hello-world"
              selectOnFocus
              handleHomeEndKeys
              getOptionLabel={(option) =>{
                const {name, admin1,country}=option;
                let selectedOption='';
                if(name)selectedOption+=name+",";
                if(admin1)selectedOption+=admin1+",";
                if(country)selectedOption+=country;
                

                return selectedOption;
              }
              }
              PopperComponent={CustomPopper}
              renderOption={getrenderOption}
              id="city-search-box"
              options={cityResult.map((city) => ({
                label: city.id,
                value: city.id,
                ...city,
              }))}
              onChange={(_, value) => {
                value&&setSelectedCityData(value);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label=""
                  placeholder="Search for City"
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <InputAdornment position="end">
                        <SearchIcon sx={{ color: "#ffffff" }} />
                      </InputAdornment>
                    ),
                  }}
                  onChange={(e) => setTypedcity(e.target.value)}
                />
              )}
              sx={{
                width: 300,
                borderRadius: "150px",
                height: "50px",
                paddingTop: "5px",
                color: "#ffffff",
              }}
              filterSelectedOptions={true}
              autoSelect={false}
              freeSolo // Handle user-entered values not in the options list (optional)
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default TopNavigation;
