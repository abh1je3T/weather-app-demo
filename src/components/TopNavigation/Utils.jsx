import React from "react"
import { Box, Popper } from "@mui/material";
import { COUNTRY_FLAGS_BASE } from "../../api/Utils";



const getCountryImageUrl=(ctryCode)=> `${COUNTRY_FLAGS_BASE}${ctryCode}/flat/24.png`
const getrenderOption = (props,option) => ( 
    <li {...props} data-id={option?.id}>
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <img src={getCountryImageUrl(option.country_code)} alt={option.country} />&nbsp;&nbsp;
      <span>{option.name},{option.admin1}, {option.country}</span>
    </Box>
    </li>
  );
  
  const CustomPopper = ({ children, ...props }) => {
    return (
      <Popper {...props} className="search-dropdown-popper">
        {children}
      </Popper>
    );
  };

  
  export {
    getrenderOption,
    CustomPopper
  }