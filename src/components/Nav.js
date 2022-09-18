import React from 'react'
import {Link} from "react-router-dom"

const Nav = () => {
  return (
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/users/kadeem">Users Kadeem </Link></li>
            <li><Link to="/users/kalem">Users Kalem</Link></li>
            <li><Link to="/users/jerel">Users Jerel</Link></li>
        </ul>
    </nav>
  )
}

export default Nav