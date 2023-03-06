import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div class="footer-link-items">
                    <h2>Learning Paths</h2>
                    <Link to='/novicepage'>Novice</Link>
                    <Link to='/apprenticepage'>Apprentice</Link>
                    <Link to='/expertpage'>Expert</Link>
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
                    <Link to='/gophishpage'>Go Phish</Link>
                    <Link to='/crosswordpage'>Cross-word</Link>
                    <Link to='/wordsearchpage'>WordSearch</Link>
                </div>
            </div>

            <div className="footer-link-wrapper">
                <div class="footer-link-items">
                    <h2>Checklists</h2>
                    <Link to='/checklists'>Checklists</Link>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer