import axios from 'axios';

export const FETCH_PROPERTIES_SUCCESS = 'FETCH_PROPERTIES_SUCCESS';
export const FETCH_PROPERTIES_FAILURE = 'FETCH_PROPERTIES_FAILURE';
export const SET_PROPERTY_TYPE_FILTER = 'SET_PROPERTY_TYPE_FILTER';
export const SET_PAGINATION_SETTINGS = 'SET_PAGINATION_SETTINGS';

export const fetchProperties = (url) => async (dispatch) => {
    try {
        const response = await axios.get(url);
        dispatch({
            type: FETCH_PROPERTIES_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: FETCH_PROPERTIES_FAILURE,
            payload: error,
        });
    }
};

export const setPropertyTypeFilter = (propertyType) => ({
    type: SET_PROPERTY_TYPE_FILTER,
    payload: propertyType,
});
  
export const setPaginationSettings = (pageNumber, pageSize) => ({
    type: SET_PAGINATION_SETTINGS,
    payload: { pageNumber, pageSize },
});