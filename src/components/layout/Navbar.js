import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-5">
        <a className="navbar-brand" href="#!">SpaceX</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse mx-5" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active mx-2">
                <Link to='/' className="nav-link">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item mx-2">
                <Link to='/launches' className="nav-link">Launches</Link>
            </li>
            <li className="nav-itemmx-2">
                <Link to='/mission' className="nav-link">Mission</Link>
            </li>
            <li className="nav-item mx-2">
                <Link to='/rocket' className="nav-link">Rocket</Link>
            </li>
            </ul>
            
        </div>

        </nav>
    )
}

export default Navbar
