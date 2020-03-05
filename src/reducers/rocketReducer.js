import { GET_ROCKETS, SET_LOADING } from "../actions/types"
import { act } from "@testing-library/react"


const initialState = {
    rockets : null,
    loading: false,
    error: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_ROCKETS:
            return {
                ...state,
                rockets: action.payload,
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