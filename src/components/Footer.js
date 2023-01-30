import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div class="footer-link-items">
                    <h2>Learning Paths</h2>
                    <Link to='/learning-paths'>Novice</Link>
                    <Link to='/learning-paths'>Apprentice</Link>
                    <Link to='/learning-paths'>Expert</Link>
                </div>
            </div>

            <div className="footer-link-wrapper">
                <div class="footer-link-items">
                    <h2>Articles</h2>
                    <Link to='/articles'>Article 1</Link>
                    <Link to='/articles'>Article 2</Link>
                    <Link to='/articles'>Article 3</Link>
                </div>
            </div>

            <div className="footer-link-wrapper">
                <div class="footer-link-items">
                    <h2>Games</h2>
                    <Link to='/games'>Game 1</Link>
                    <Link to='/games'>Game 2</Link>
                    <Link to='/games'>Game 3</Link>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer