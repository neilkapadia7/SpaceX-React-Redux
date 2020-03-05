import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types';
import { getLaunches } from '../actions/launchesActions';
import { connect } from 'react-redux';
import LaunchesItem from './Launches/LaunchesItem';

const Launches = ({ launches: {launches, loading, error}, getLaunches}) => {
    useEffect(() => {
        getLaunches();

        //eslint-disable-next-line
    }, [])
    
    if(loading || launches === null) {
        return <h3 className='page-title'>Loading.....</h3>
    }

    return (
        <Fragment>
            <h2 className='page-title'>Launch's Info</h2>
            {launches.map(launch =>
                <LaunchesItem key={launch.flight_number} launch={launch} />     
            )}
        </Fragment>
    )
}

Launches.propTypes = {
    getLaunches: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    launches: state.launch
});

export default connect(mapStateToProps, {getLaunches})(Launches);
