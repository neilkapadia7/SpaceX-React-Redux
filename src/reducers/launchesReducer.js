import { GET_LAUNCHES, SET_LOADING, GET_LAUNCH, ERROR, REMOVE_LAUNCH } from "../actions/types";

const initialState = {
    launch: null,
    launches: null,
    loading: false,
    error: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_LAUNCHES:
            return {
                ...state,
                launches: action.payload,
                loading: false
            }
        case GET_LAUNCH: 
            return {
                ...state,
                launch: action.payload,
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case REMOVE_LAUNCH:
            return {
                ...state,
                launch: null,
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