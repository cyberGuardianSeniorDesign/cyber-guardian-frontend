import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from './images/logo.png'

function Footer() {
  return (
    <div className='footer-container'>
        <div className="footer-name-logo">
            <h2 className='footer-header'>Cyber Guardian</h2>
            <img className='footer-logo' src={logo} alt='logo' />
        </div>
        
        <div className="footer-link-items">
            <h2>Content</h2>
            <Link to='/'>Home</Link>
            <Link to='/learning-paths'>Learning Paths</Link>
            <Link to='/articles'>Articles</Link>
            <Link to='/checklists'>Checklists</Link>
            <Link to='/games'>Games</Link>
        </div>
    </div>
  )
}

export default Footer