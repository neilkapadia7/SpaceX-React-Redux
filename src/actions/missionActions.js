import axios from 'axios';
import { GET_MISSIONS, ERROR, SET_LOADING } from './types';


export const getMissions = () => async dispatch => {
    try {
        setLoading();

        const res = await axios.get('https://api.spacexdata.com/v3/missions');
        dispatch({type: GET_MISSIONS, payload: res.data});
    } 
    catch (err) {
        dispatch({type: ERROR, payload: err.response});    
    }
}

export const setLoading = () =>{
    return {
        type: SET_LOADING
    }
}