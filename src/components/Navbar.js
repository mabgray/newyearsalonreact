import React from "react";
import { Link } from 'react-router-dom';


function Navbar() {
    return (
      <div>
        <Link to="/">Home </Link>
        <Link to="/about">About Us </Link>
        <Link to="/Location">Location </Link>
      </div>
    );
  };

  export default Navbar;