import React, {useEffect} from 'react';
import { getLaunch, removeLaunch } from '../../actions/launchesActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Launch = (props) => {
    const {launches: {launch, loading, error}, getLaunch, removeLaunch} = props;
    
    useEffect(() => {
        getLaunch(props.match.params.id);
        
        return() =>{
            removeLaunch();
        }

        // eslint-disable-next-line
    }, []);

    if(loading || launch === null) {
        return <h4>Loading....</h4>
    }
    else {
        console.log(launch);
    }
    
    return (
        <div>
            <p>Flight Number: {launch.flight_number}</p>
            <p>Mission Name: {launch.mission_name}</p>
            <p>Launch Year: {launch.launch_year}</p>
            
            <h4>Launch Site</h4>
                <p>Site ID: {launch.launch_site.site_id}</p>
                <p>Site Name: {launch.launch_site.site_name_long}</p>
        </div>
    )
}

Launch.propTypes = {
    getLaunch: PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
    launches: state.launch
});

export default connect(mapStateToProps, {getLaunch, removeLaunch})(Launch);
