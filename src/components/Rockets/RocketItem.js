import React from 'react'
import PropTypes from 'prop-types'

const RocketItem = ({rocket}) => {
    
    const {active, stages, boosters, cost_per_launch, first_flight, country, company, height, diameter, mass} = rocket;
    
    return (
        <div style={{margin: 60}}>
            <p>Active: {active}</p>
            <p>Stages: {stages}</p>
            <p>Boosters: {boosters}</p>
            <p>Cost Per Launch: {cost_per_launch}</p>
            <p>First Flight: {first_flight}</p>
            <p>Country: {country}</p>
            <p>Company: {company}</p>
            <p>Height: {height.meters}m {height.feet}Ft</p>
            <p>Diameter: {diameter.meters}m {diameter.feet}Ft</p>
            <p>Mass: {mass.kg}kg {mass.lb}lb</p>
        </div>
    )
}

RocketItem.propTypes = {
    rocket: PropTypes.object.isRequired
}

export default RocketItem
