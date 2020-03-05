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
        return <h4 className='page-title'>Loading....</h4>
    }
    else {
        console.log(launch);
    }
    
    return (
        <div style={{margin: 90}}>
            <p className='company-info'>Flight Number: <span style={{fontWeight: 200}}>{launch.flight_number}</span></p>
            <p className='company-info'>Mission Name: <span style={{fontWeight: 200}}>{launch.mission_name}</span></p>
            <p className='company-info'>Launch Year: <span style={{fontWeight: 200}}>{launch.launch_year}</span></p>
            
            <h4 className='company-title' style={{marginTop: 50}}>Launch Site</h4>
                <p className='company-info'>Site ID: <span style={{fontWeight: 200}}>{launch.launch_site.site_id}</span></p>
                <p className='company-info'>Site Name: <span style={{fontWeight: 200}}>{launch.launch_site.site_name_long}</span></p>
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
