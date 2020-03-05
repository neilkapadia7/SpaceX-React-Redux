import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import MissionItem from "./Mission/MissionItem";
import {getMissions} from '../actions/missionActions';
import {connect} from 'react-redux';

const Mission = ({mission: {missions, loading, error},getMissions}) => {

    useEffect(() => {
        getMissions();

        // eslint-disable-next-line
    }, []);

    if(loading || missions === null){
        return <h4>Loading...</h4>
    } 

    return (
        <div>
            {missions.map(mission =>
                <MissionItem key={mission.mission_id} mission={mission} />    
            )}
        </div>
    )
}

Mission.propTypes = {
    getMissions: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    mission: state.mission
});

export default connect(mapStateToProps, {getMissions})(Mission);
