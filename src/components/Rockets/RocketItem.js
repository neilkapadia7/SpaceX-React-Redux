import React from 'react'
import PropTypes from 'prop-types'

const RocketItem = ({rocket}) => {
    
    const {active, stages, boosters, cost_per_launch, first_flight, country, company, height, diameter, mass} = rocket;
    
    return (
        <div style={{marginTop: 60}}>
            <h2 className='company-title'>Rocket:</h2>
            <p className='company-info'>Active: <span style={{fontWeight: 200}}>{active}</span></p>
            <p className='company-info'>Stages: <span style={{fontWeight: 200}}>{stages}</span></p>
            <p className='company-info'>Boosters: <span style={{fontWeight: 200}}>{boosters}</span></p>
            <p className='company-info'>Cost Per Launch: <span style={{fontWeight: 200}}>{cost_per_launch}</span></p>
            <p className='company-info'>First Flight: <span style={{fontWeight: 200}}>{first_flight}</span></p>
            <p className='company-info'>Country: <span style={{fontWeight: 200}}>{country}</span></p>
            <p className='company-info'>Company: <span style={{fontWeight: 200}}>{company}</span></p>
            <p className='company-info'>Height: <span style={{fontWeight: 200}}>{height.meters}m {height.feet}Ft</span></p>
            <p className='company-info'>Diameter: <span style={{fontWeight: 200}}>{diameter.meters}m {diameter.feet}Ft</span></p>
            <p className='company-info'>Mass: <span style={{fontWeight: 200}}>{mass.kg}kg {mass.lb}lb</span></p>
        </div>
    )
}

RocketItem.propTypes = {
    rocket: PropTypes.object.isRequired
}

export default RocketItem
