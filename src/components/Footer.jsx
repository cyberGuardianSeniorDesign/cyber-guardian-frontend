import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from './images/cglogo.png'

function Footer() {
  return (
    <div className='footer-div' data-cy='footer'>
        <div className="footer-name-logo">
            <img className='footer-logo' src={logo} alt='logo' />
            <h2 className='footer-header'>Cyber Guardian</h2>
        </div>
        
        <div className="footer-link-items">
            <h2>Content</h2>
            <div className='link-items'>
              <div className='link-items-col'>
                <Link to='/'>Home</Link>
                <Link to='/learning-paths'>Learning Paths</Link>
                <Link to='/articles'>Articles</Link>
              </div>
              <div className='link-items-col'>
                <Link to='/checklists'>Checklists</Link>
                <Link to='/games'>Games</Link>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Footer