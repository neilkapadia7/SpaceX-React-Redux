import axios from 'axios';
import { SET_LOADING, GET_LAUNCHES, ERROR, REMOVE_LAUNCH, GET_LAUNCH } from './types';

export const getLaunches = () => async dispatch => {
    try {
        setLoading();

        const res = await axios.get('https://api.spacexdata.com/v3/launches');     
        dispatch({ type: GET_LAUNCHES, payload: res.data })
    
    } 
    catch (err) {
        dispatch({type: ERROR, payload: err.response});
    }
}
export const getLaunch = flight_number => async dispatch => {
    try {
        setLoading();

        const res = await axios.get(`https://api.spacexdata.com/v3/launches/${flight_number}`);     
        dispatch({ type: GET_LAUNCH, payload: res.data })
    
    } 
    catch (err) {
        dispatch({type: ERROR, payload: err.response});
    }
}

export const removeLaunch = () => { 
    return {
        type: REMOVE_LAUNCH
    }
}

export const setLoading = () => {
    return {
        type: SET_LOADING
    };
}