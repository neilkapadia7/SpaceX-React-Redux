import React from 'react'
import PropTypes from 'prop-types'

const MissionItem = ({mission}) => {
    const {mission_name,mission_id,manufacturers, payload_ids, website, description} = mission;

    return (    
        <div style={{marginTop: 90}}>
            <h2 className='company-title'>Mission:</h2>
            <p className='company-info'>Mission Name: <span style={{fontWeight: 200}}>{mission_name}</span></p>
            <p className='company-info'>Mission ID: <span style={{fontWeight: 200}}>{mission_id}</span></p>
            <p className='company-info'>Manufasturers: <span style={{fontWeight: 200}}>{manufacturers.map(man =>  man, )}</span> </p>
            <p className='company-info'>Payload IDS: <span style={{fontWeight: 200}}>{payload_ids.map(pay => pay,  )} </span> </p>
            <p className='company-info'>Website: <span style={{fontWeight: 200}}>{website}</span></p>
            <p className='company-info'>Description <span style={{fontWeight: 200}}>{description}</span></p>
        </div>
    )
}

MissionItem.propTypes = {
    mission: PropTypes.object.isRequired
}

export default MissionItem
