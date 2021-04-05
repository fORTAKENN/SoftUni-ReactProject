import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="nav-wrapper">
            <div className="container">
                <Link to="/" className="nav-logo">
                    FoRBin
                </Link>

                <div className="nav-links">
                    <Link to="/about" className="nav-link">
                        About
                    </Link>

                    <div className="nav-separator">|</div>

                    <Link to="/dashboard" className="nav-link">
                        Login
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;