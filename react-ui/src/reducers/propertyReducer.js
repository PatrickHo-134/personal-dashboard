import { SET_PROPERTY_TYPE_FILTER, SET_PAGINATION_SETTINGS, FETCH_PROPERTIES_SUCCESS, FETCH_PROPERTIES_FAILURE } from '../actions/propertyActions';

const initialState = {
    propertyTypeFilter: 'house',
    paginationSettings: {
        pageNumber: 1,
        pageSize: 10,
    },
    loading: false,
    error: null,
    properties: [],
    count: 0,
};

const propertyReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PROPERTIES_SUCCESS:
            return {
                ...state,
                properties: action.payload.results,
                loading: false,
                error: null,
            };
        case FETCH_PROPERTIES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case SET_PROPERTY_TYPE_FILTER:
            return {
                ...state,
                propertyTypeFilter: action.payload,
            };

        case SET_PAGINATION_SETTINGS:
            return {
                ...state,
                paginationSettings: {
                    pageNumber: action.payload.pageNumber,
                    pageSize: action.payload.pageSize,
                },
            };

        default:
            return state;
    }
};

export default propertyReducer;
