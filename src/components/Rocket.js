import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import RocketItem from './Rockets/RocketItem';
import {connect} from 'react-redux';
import {getRockets} from '../actions/rocketAction';

const Rocket = ({rocket: {rockets, loading, error}, getRockets}) => {
    
    useEffect(() => {
        getRockets();
        // eslint-disable-next-line
    }, []);

    if(loading || rockets === null){
        return <h4>Loading...</h4>
    }

    return (
        <div>
            {rockets.map(rocket =>
                <RocketItem key={rocket.id} rocket={rocket} />    
            )}
        </div>
    )
}

Rocket.propTypes = {
    getRockets: PropTypes.func.isRequired,
    rocket: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    	rocket: state.rocket
});

export default connect(mapStateToProps, {getRockets})(Rocket);
