import axios from 'axios';
import { ERROR, GET_ROCKETS, SET_LOADING } from './types';

export const getRockets = () => async dispatch => {
    try {
        setLoading();

        const res = await axios.get('https://api.spacexdata.com/v3/rockets');
        dispatch({type: GET_ROCKETS, payload: res.data});
    } 
    catch (err) {
        dispatch({type: ERROR, payload: err.response});    
    }
}

export const setLoading = () => {
    return{
        type: SET_LOADING
    }
}
