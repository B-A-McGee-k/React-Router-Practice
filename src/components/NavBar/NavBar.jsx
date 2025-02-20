import React from 'react';
import { useHistory } from 'react-router-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
//Where is it coming from ^^^^
// haha sorry, forgot to finish that part
// // import from '../NavBar'

// //what are we importing?

function NavBar() {

    const history = useHistory();
    
    return (
    <nav className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
    </nav>
  );
}

export default NavBar;