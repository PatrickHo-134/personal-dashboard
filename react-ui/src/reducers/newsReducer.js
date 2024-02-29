import {
    FETCH_NEWS_REQUEST,
    FETCH_NEWS_SUCCESS,
    FETCH_NEWS_FAILURE,
    SET_COUNTRY,
    SET_NEWS_TOPIC,
} from "../actions/newsActions";

const initialState = {
    country: "AU",
    topic: "top news",
    loading: false,
    news: [],
    error: "",
};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_NEWS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_NEWS_SUCCESS:
            return {
                ...state,
                loading: false,
                news: action.payload,
                error: "",
            };
        case FETCH_NEWS_FAILURE:
            return {
                ...state,
                loading: false,
                news: [],
                error: action.payload,
            };
        case SET_COUNTRY:
            return {
                ...state,
                country: action.payload,
            };
        case SET_NEWS_TOPIC:
            return {
                ...state,
                topic: action.payload,
            };
        default:
            return state;
    }
};

export default newsReducer;
