import React from "react";
import  "../pages/Common.css";
import {  Link } from 'react-router-dom';

const Header = () =>{
    return (
        <nav className="nav"
        //style={'grid-area-nav, display-grid,grid-template-columns-repeat(4,auto),align-items-center,justify-items-center'}
        >
        <ul>
        {/* <li>
            <Link to="/">Login</Link>
          </li> */}
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/User">User</Link>
          </li>
        </ul>
      </nav>
    )
}
export default Header;