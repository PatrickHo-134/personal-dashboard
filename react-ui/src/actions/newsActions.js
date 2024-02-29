import axios from 'axios';

// Action Types
export const FETCH_NEWS_REQUEST = "FETCH_NEWS_REQUEST";
export const FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS";
export const FETCH_NEWS_FAILURE = "FETCH_NEWS_FAILURE";
export const SET_COUNTRY = "SET_COUNTRY";
export const SET_NEWS_TOPIC = "SET_NEWS_TOPIC";

// Action Creators
export const fetchNewsRequest = () => ({
    type: FETCH_NEWS_REQUEST,
});

export const fetchNewsSuccess = (data) => ({
    type: FETCH_NEWS_SUCCESS,
    payload: data,
});

export const fetchNewsFailure = (error) => ({
    type: FETCH_NEWS_FAILURE,
    payload: error,
});

export const setCountry = (country) => ({
    type: SET_COUNTRY,
    payload: country,
});

export const setNewsTopic = (topic) => ({
    type: SET_NEWS_TOPIC,
    payload: topic,
});

// Async Action Creator

const API_BASE_URL = "http://127.0.0.1:5000/api";

export const fetchNews = (country, topic) => {
    return (dispatch) => {
        dispatch(fetchNewsRequest());

        const apiUrl = `${API_BASE_URL}/news-headlines/`;
        const params = { country, topic };

        axios.get(apiUrl, { params })
            .then((response) => {
                dispatch(fetchNewsSuccess(response.data));
            })
            .catch((error) => {
                dispatch(fetchNewsFailure(error.message));
            });
    };
};
