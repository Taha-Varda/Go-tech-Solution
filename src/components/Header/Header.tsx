import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/images/Logo.webp';
import { FaChevronDown } from 'react-icons/fa';

function Header() { 
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="header-container">
            <nav>
                <Link to="/" className='logo-link'>
                    <img src={logo} alt="Logo" className="logo" />
                </Link>
                <ul className="menu-list">
                    <Link to="/services" className="menu-item">services</Link>
                    <Link to="/industries" className="menu-item">industries</Link>
                    <Link to="/technologies" className="menu-item">Tech Stack</Link>
                    <Link to="/about" className="menu-item">company</Link>
                    <Link to="/projects" className="menu-item">projects</Link>
                </ul>
                <NavLink to="/contact" className={({ isActive }) => isActive ? "btn btn-active" : "btn"}>
                    book a call
                </NavLink>
            </nav>
        </div>
    );
}

export default Header;