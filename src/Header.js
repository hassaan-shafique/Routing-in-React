import React from 'react'
import { Link } from 'react-router-dom';
import Contact from './Contact';


const Header = () => {
    
    

    
  return (
    <div>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact"> Contact</Link>
        </li>
        <li>
          <Link to="/project">Projects</Link>
        </li>
      </ul>
      <Link to='/contact/info'>
        <button> Contact</button>
      </Link>
    </div>
  );
}

export default Header
