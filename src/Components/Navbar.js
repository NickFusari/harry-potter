import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Navbar.css';
import Logo from '../Img/logo.png'

const Navbar = () => {
  return (
    <nav>
        <div>
            <img src={Logo} alt="Hogwarts Logo" />
        </div>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/history">History</Link>
            </li>
            <li>
                <Link to="/houses">Houses</Link>
            </li>
            <li>
                <Link to="/search">Search</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar;