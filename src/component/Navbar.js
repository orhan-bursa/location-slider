import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    
  return (
    <div className="navbar">
      <div className="navbar-container">
          <Link to={"/location-list"} className="nav-link">Show All</Link>
          <Link to={"/"} className="nav-link">Show Slider</Link>
      </div>
    </div>
  )
}

export default Navbar