import axios from 'axios';

// Action Types
export const FETCH_TOP_NEWS_REQUEST = 'FETCH_TOP_NEWS_REQUEST';
export const FETCH_TOP_NEWS_SUCCESS = 'FETCH_TOP_NEWS_SUCCESS';
export const FETCH_TOP_NEWS_FAILURE = 'FETCH_TOP_NEWS_FAILURE';

// Action Creators
export const fetchTopNewsRequest = () => ({
    type: FETCH_TOP_NEWS_REQUEST,
});

export const fetchTopNewsSuccess = (data) => ({
    type: FETCH_TOP_NEWS_SUCCESS,
    payload: data,
});

export const fetchTopNewsFailure = (error) => ({
    type: FETCH_TOP_NEWS_FAILURE,
    payload: error,
});

// Async Action Creator

const API_BASE_URL = "http://127.0.0.1:5000/api";

export const fetchTopNews = () => {
    return (dispatch) => {
        dispatch(fetchTopNewsRequest());

        axios.get(`${API_BASE_URL}/top-news-headlines/`)
            .then((response) => {
                dispatch(fetchTopNewsSuccess(response.data));
            })
            .catch((error) => {
                dispatch(fetchTopNewsFailure(error.message));
            });
    };
};
