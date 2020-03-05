import { GET_MISSIONS, SET_LOADING } from "../actions/types"

const initialState = {
    missions: null,
    loading: false,
    error: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_MISSIONS:
            return {
                ...state,
                missions: action.payload,
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}