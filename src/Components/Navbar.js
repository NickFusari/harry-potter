import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FaTimes, FaBars } from 'react-icons/fa';
import '../CSS/Navbar.css';
import Logo from '../Img/logo.png'

const Navbar = () => {

    const [click, setClick] = useState(false);

    const handleClick = ()=> {

        setClick(!click);
    }

  return (
    <nav>
        <div>
            <img src={Logo} alt="Hogwarts Logo" />
        </div>
        <ul className={click ? 'navStyle navStyleActive' : 'navStyle'}>
            <li>
                <Link onClick={()=>setClick(false)} to="/">Home</Link>
            </li>
            <li>
                <Link onClick={()=>setClick(false)} to="/history">History</Link>
            </li>
            <li>
                <Link onClick={()=>setClick(false)} to="/houses">Houses</Link>
            </li>
            <li>
                <Link onClick={()=>setClick(false)} to="/search">Search</Link>
            </li>
        </ul>

        <div className='nav-icons' onClick={handleClick}>

            {click ? (<FaTimes size={20} style={{color: "#fff"}}/>) 
                : (<FaBars size={20} style={{color: "#fff"}}/>) }

        </div>
    </nav>
  )
}

export default Navbar;