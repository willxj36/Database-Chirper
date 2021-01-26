import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return(
        <div className="navbar bg-success">
            <button className="btn btn-dark btn-lg">Log In</button> 
            <span className="text-strong">Welcome, *username*</span>
            <Link to='/newchirp' className="btn btn-dark btn-lg">New Chirp</Link>
        </div>
    ) //log in and username non-functional, just for appearances at this point

}

export default Navbar;