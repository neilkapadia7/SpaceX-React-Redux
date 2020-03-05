import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const LaunchesItem = ({launch}) => {
    const {flight_number,mission_name,mission_id,launch_year, launch_date_local, rocket: {rocket_id, rocket_name, rocket_type}} = launch;

    return (
        <div className='launches-item' style={{marginTop: 30}}>
            <h4>Flight Info</h4>
            <p>Flight Number: {flight_number}</p>
            <p>Mission Name: {mission_name}</p>
            <p>Mission ID: {mission_id} </p>
            <p>Launch Year: {launch_year}</p>
            <p>Launch Date: {launch_date_local}</p>
            <h4>Rocket Info</h4>
                <p>Rocket ID: {rocket_id}</p>
                <p>Rocket Name: {rocket_name}</p>
                <p>Rocket Type: {rocket_type}</p>
            
            <Link to={`launch/${flight_number}`}>See Launch Info</Link>
        </div>
    )
}

LaunchesItem.propTypes = {
    launch: PropTypes.object.isRequired
}

export default LaunchesItem
