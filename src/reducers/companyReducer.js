import {
    GET_COMPANY_INFO, SET_LOADING, ERROR
} from '../actions/types';

const initialState = {
    info: null,
    loading: false,
    error: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_COMPANY_INFO:
            return {
                ...state,
                info: action.payload,
                loading: false
            }
        case SET_LOADING: 
            return {
                ...state,
                loading: true
            }
        case ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
        
    }
}