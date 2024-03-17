import React from "react";
import { Autocomplete, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function TopNavigation() {
  return (
    <nav className="sticky top-0 z-10 bg-white border-b border-gray-200 bg-opacity-10">
      <div className="px-4 mx-20">
        <div className="flex items-center justify-between h-16">
          <span className="text-2xl text-gray-900 font-semibold">
            Weather Forcast
          </span>
          <div className="flex space-x-4 text-gray-900">
            <Autocomplete
              className="hello-world"
              selectOnFocus
              clearOnBlur
              handleHomeEndKeys
              id="city-search-box"
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search for City"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SearchIcon
                          sx={{ color: "#ffffff" }}
                        />
                      </InputAdornment>
                    )
                  }}
                />
              )}
              sx={{
                width: 300,
                borderRadius: "150px", // Applying border-radius
                height: "50px", // Applying height
                paddingTop: "5px",
                color: "#ffffff",
              }}
              freeSolo
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default TopNavigation;
