import {
    GET_COMPANY_INFO, SET_LOADING, ERROR
} from './types';
import axios from 'axios';


// Get Company Info
export const getInfo = () => async dispatch => {
    try {
        setLoading();
        
        const res = await axios.get('https://api.spacexdata.com/v3/info');
        dispatch({ type: GET_COMPANY_INFO, payload: res.data });
    } 
    catch (err) {
        console.log(err)
        dispatch({ type: ERROR, payload: err.response })
    }
}

// Set Loading 
export const setLoading = () => {
    return {
        type: SET_LOADING
    };
}