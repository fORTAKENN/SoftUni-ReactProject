import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../App';

import './Navbar.css';

const Navbar = props => {
    const { username } = useContext(AuthContext);

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
        
                    { username === '' ? <Link to="/login" className="nav-link">
                        Login
                    </Link> : <Link to="/dashboard" className="nav-link">
                        Dashboard
                    </Link>}
                    
                </div>
            </div>
        </nav>
    );
}

export default Navbar;