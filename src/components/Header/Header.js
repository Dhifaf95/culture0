// Header.js
import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import logo from './Untitled_logo_1_free-file__4_-removebg-preview.png';
import Button from '../Button/Button';

const Header = ({ onLoginClick }) => {  
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="Logo" className="logo-img" />
            </div>

            <nav className="nav-links">
                <ul className='list'>
                    <li><Link to="/">Home</Link></li>
                    <li><ScrollLink to="Attractions" smooth={true} duration={500}>Attractions</ScrollLink></li>
                    <li><ScrollLink to="services" smooth={true} duration={500}>Services</ScrollLink></li>
                    <li><ScrollLink to="About" smooth={true} duration={500}>About Us</ScrollLink></li>
                </ul>
            </nav>

            <div className="login-container">
                <Button 
                   onClick={() => {
                    onLoginClick();  // استدعاء دالة onLoginClick لعرض نموذج تسجيل الدخول
                }}                    
                   label="Login" 
                   width='100px' 
                   height='40px' 
                   className="buttonD" 
                   fontSize='20px'
                />
            </div>
        </header>
    );
};

export default Header;
