import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
        {/* <section className="footer">
            <p className="footer-heading">
                Test test testy test
            </p>
            <p className="footer-text">
                This is also a test.
            </p>
            <div className="input-areas">
                <form>
                    <input type="email" name="email" placeholder="Your email"
                    className="footer-input" />
                    <Button buttonStyle={'btn--outline'}>TESTT34</Button>
                </form>
            </div>
        </section> */}
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