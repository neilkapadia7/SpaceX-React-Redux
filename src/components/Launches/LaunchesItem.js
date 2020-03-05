import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const LaunchesItem = ({launch}) => {
    const {flight_number,mission_name,mission_id,launch_year, launch_date_local, rocket: {rocket_id, rocket_name, rocket_type}} = launch;

    return (
        <div className='launches-item' style={{margin: 80}}>
            <h4 className='company-title'>Flight Info</h4>
            <p className='company-info'>Flight Number: <span style={{fontWeight: 200}}>{flight_number}</span></p>
            <p className='company-info'>Mission Name: <span style={{fontWeight: 200}}>{mission_name}</span></p>
            <p className='company-info'>Mission ID: <span style={{fontWeight: 200}}>{mission_id} </span></p>
            <p className='company-info'>Launch Year: <span style={{fontWeight: 200}}>{launch_year}</span></p>
            <p className='company-info'>Launch Date: <span style={{fontWeight: 200}}>{launch_date_local}</span></p>
            <h4 className='company-title'>Rocket Info</h4>
                <p className='company-info'>Rocket ID: <span style={{fontWeight: 200}}>{rocket_id}</span></p>
                <p className='company-info'>Rocket Name: <span style={{fontWeight: 200}}>{rocket_name}</span></p>
                <p className='company-info'>Rocket Type: <span style={{fontWeight: 200}}>{rocket_type}</span></p>
            <div className='my-4'>
                <Link to={`launch/${flight_number}`} className='launch-button'>See Launch Info</Link>
            </div>
        </div>
    )
}

LaunchesItem.propTypes = {
    launch: PropTypes.object.isRequired
}

export default LaunchesItem
