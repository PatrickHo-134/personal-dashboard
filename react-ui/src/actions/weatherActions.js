import axios from 'axios';

// Action Types
export const FETCH_WEATHER_FORECAST_REQUEST = "FETCH_WEATHER_FORECAST_REQUEST";
export const FETCH_WEATHER_FORECAST_SUCCESS = "FETCH_WEATHER_FORECAST_SUCCESS";
export const FETCH_WEATHER_FORECAST_FAILURE = "FETCH_WEATHER_FORECAST_FAILURE";
export const SET_CITY = "SET_CITY";

// Action Creators
export const fetchWeatherForecastRequest = () => ({
    type: FETCH_WEATHER_FORECAST_REQUEST,
});

export const fetchWeatherForecastSuccess = (data) => ({
    type: FETCH_WEATHER_FORECAST_SUCCESS,
    payload: data,
});

export const fetchWeatherForecastFailure = (error) => ({
    type: FETCH_WEATHER_FORECAST_FAILURE,
    payload: error,
});

export const setCity = (city) => ({
    type: SET_CITY,
    payload: city,
});


// Async Action Creator

const API_BASE_URL = "http://127.0.0.1:5000/api";

export const fetchWeatherForecast = (city) => {
    return (dispatch) => {
        dispatch(fetchWeatherForecastRequest());

        const apiUrl = `${API_BASE_URL}/fetch-weather-forecast/`;
        const params = { city };

        axios.get(apiUrl, { params })
            .then((response) => {
                dispatch(fetchWeatherForecastSuccess(response.data));
            })
            .catch((error) => {
                dispatch(fetchWeatherForecastFailure(error.message));
            });
    };
};
