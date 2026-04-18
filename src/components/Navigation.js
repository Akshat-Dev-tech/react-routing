import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";
const Navigation = () => (
    <div>
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link> */}

        {/* navlink is used to apply active class to the current active link , improved version of link */}

        {/* 1. Active class (default)
        <a class="active">About</a>
        2. isActive (logic control)
        className={({ isActive }) => isActive ? "active" : ""}  */}
        
        <NavLink to="/" className={({isActive})=> isActive ? 'active' : ""}>Home</NavLink>
        <NavLink to="/about" className={({isActive})=> isActive ? 'active' : ""}>About</NavLink>
        <NavLink to="/contact" className={({isActive})=> isActive ? 'active' : ""}>Contact</NavLink>
        

        {/* <Link to="/about/nested1">Nested Route 1</Link>
        <Link to="/about/nested2">Nested Route 2</Link> */}
    </div>
)

export default Navigation;