import React from 'react'
import PropTypes from 'prop-types'

const MissionItem = ({mission}) => {
    const {mission_name,mission_id,manufacturers, payload_ids, website, description} = mission;

    return (    
        <div>
            <p>Mission Name: {mission_name}</p>
            <p>Mission ID: {mission_id}</p>
            <p>Manufasturers: {manufacturers.map(man =>  man, )} </p>
            <p>Payload IDS: {payload_ids.map(pay => pay,  )} </p>
            <p>Website: {website}</p>
            <p>Description {description}</p>
        </div>
    )
}

MissionItem.propTypes = {
    mission: PropTypes.object.isRequired
}

export default MissionItem
