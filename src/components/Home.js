import React , {useEffect} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { getInfo } from '../actions/companyActions';

const Home = ({company: {info, loading}, getInfo}) => {

    useEffect(() => {
        getInfo();
        //eslint-disable-next-line
    }, []);

    if(loading || info === null) {
        return <h1>Loading....</h1>
    }

    const {name, founder, founded, employees, vehicles, launch_sites, test_sites, ceo, links : {website, twitter}, headquarters : {address, city, state} } = info;

    return (
        <div className='container my-5'>
            <p className='company-info'>Name: <span style={{fontWeight: 200}}>{name}</span></p>
            <p className='company-info'>Founder: <span style={{fontWeight: 200}}>{founder}</span></p>
            <p className='company-info'>Founded: <span style={{fontWeight: 200}}>{founded}</span></p>
            <p className='company-info'>No. of Employees: <span style={{fontWeight: 200}}>{employees}</span></p>
            <p className='company-info'>Vehicles: <span style={{fontWeight: 200}}>{vehicles}</span></p>
            <p className='company-info'>Launch Sites: <span style={{fontWeight: 200}}>{launch_sites}</span></p>
            <p className='company-info'>Test Sites: <span style={{fontWeight: 200}}>{test_sites}</span></p>
            <p className='company-info'>CEO: <span style={{fontWeight: 200}}>{ceo}</span></p>

            <h4>Links</h4>
            <p className='company-info'>Website: <span style={{fontWeight: 200}}>{website}</span></p>
            <p className='company-info'>Twitter: <span style={{fontWeight: 200}}>{twitter}</span></p>

            <h4>HeadQuarters</h4>
    <p className='company-info'>Address: <span style={{fontWeight: 200}}>{address}, {city}, {state}</span></p>
            
        </div>
    )
}

Home.propTypes = {
    getInfo: PropTypes.func.isRequired,
    company: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    company: state.company
});

export default connect(mapStateToProps, {getInfo})(Home);
