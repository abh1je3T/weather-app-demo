const Action = {
    setCardData: function (payload) {
        return this.dispatch({
            type: "SET_CARD_DATA",
            payload: {
                cardData: payload,
            },
        });
    },
    setPageData: function (payload) {
        return this.dispatch({
            type: "SET_PAGE_DATA",
            payload: {
                total: payload.total,
                pageData: payload.products,
            },
        });
    },
    setSearchedCities: function (payload) {
        return this.dispatch({
            type: "SET_SEARCHED_CITY",
            payload: {
                searchedCityData: payload.results,
            },
        });
    },
    setSearchValue: function (payload) {
        return this.dispatch({
            type: "SET_SEARCH_VALUE",
            payload: {
                searchValue: payload,
            },
        });
    },
    setSelectedCityData: function (payload) {
        return this.dispatch({
            type: "SET_SELECTED_CITY_DATA",
            payload: {
                selectedCityData: payload,
            },
        });
    },
    setSelectedCityWeatherData: function (payload) {
        return this.dispatch({
            type: "SET_SELECTED_CITY_WEATHER_DATA",
            payload: {
                selectedCityWeatherData: payload,
            },
        });
    },
};
export { Action };
