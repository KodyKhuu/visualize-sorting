import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/NavBar.css'

const NavBar = () => {
    return (
        <div className="navbar">
            <NavLink to="/visualize-sorting/insertion">Insertion</NavLink>
            <NavLink to="/visualize-sorting/bubble">Bubble</NavLink>
            <NavLink to="/visualize-sorting/selection">Selection</NavLink>
            <NavLink to="/visualize-sorting/merge">Merge (Under Development)</NavLink>
        </div>
    )
}

export default NavBar
