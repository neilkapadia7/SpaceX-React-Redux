import { combineReducers } from 'redux';
import companyReducer from './companyReducer';
import launchesReducer from './launchesReducer'
import missionReducer from './missionReducer'
import rocketReducer from './rocketReducer'

export default combineReducers({
    company: companyReducer,
    launch: launchesReducer,
    mission: missionReducer,
    rocket: rocketReducer
});