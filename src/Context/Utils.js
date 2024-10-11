const initialState = {
    total: 0,
    cardData: {},
    pageData: [],
    searchedCityData:[],
    searchValue:"",
    selectedCityData:{},
    selectedCityWeatherData:{}
};


const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_PAGE_DATA':
            return {
                ...state,
                pageData: action.payload.pageData,
                total: action.payload.total
            };
        case 'SET_CARD_DATA':
            return {
                ...state,
                cardData: action.payload.cardData
            };
        case 'SET_SEARCHED_CITY':
            return {
                ...state,
                searchedCityData: action.payload.searchedCityData||[]
            };
        case 'SET_SEARCH_VALUE':
            return {
                ...state,
                searchValue: action.payload.searchValue
            };
        case 'SET_SELECTED_CITY_DATA':
            return {
                ...state,
                selectedCityData: action.payload.selectedCityData
            };
        case 'SET_SELECTED_CITY_WEATHER_DATA':
            return {
                ...state,
                selectedCityWeatherData: action.payload.selectedCityWeatherData
            };
        default:
            return state;
    }
};





export { reducer, initialState };