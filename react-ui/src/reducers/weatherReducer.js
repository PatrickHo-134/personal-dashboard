import {
    FETCH_WEATHER_FORECAST_REQUEST,
    FETCH_WEATHER_FORECAST_SUCCESS,
    FETCH_WEATHER_FORECAST_FAILURE,
    SET_CITY,
} from "../actions/weatherActions";

const initialState = {
    city: "Sydney",
    loading: false,
    weather_forecast: {
        city: "",
        temperature: null,
        feels_like: null,
        weather_description: null,
    },
    error: "",
};

const weatherForecastReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case FETCH_WEATHER_FORECAST_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_WEATHER_FORECAST_SUCCESS:
            return {
                ...state,
                loading: false,
                weather_forecast: action.payload,
                error: "",
            };
        case FETCH_WEATHER_FORECAST_FAILURE:
            return {
                ...state,
                loading: false,
                weather_forecast: {},
                error: action.payload,
            };
        case SET_CITY:
            return {
                ...state,
                city: action.payload,
            };
        default:
            return state;
    }
};

export default weatherForecastReducer;
