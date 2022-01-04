import React from "react";
import { Link } from 'react-router-dom';


function Navbar() {
    return (
      <div>
        <Link to="/" className='headerlink-title'>Home </Link>
        <Link to="/about" className='headerlink-title'>About Us </Link>
        <Link to="/Location" className='headerlink-title'>Location </Link>
      </div>
    );
  };

  export default Navbar;