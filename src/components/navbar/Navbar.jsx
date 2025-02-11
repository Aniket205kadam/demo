import React from 'react';
import "./Navbar.scss";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div className='navbar'>
      <div className='left'>
        <Link to="/home">
          <span>Streamify</span>
        </Link>
        <FontAwesomeIcon icon={faMoon} />
      </div>
      <div className='right'></div>
    </div>
  )
}

export default Navbar