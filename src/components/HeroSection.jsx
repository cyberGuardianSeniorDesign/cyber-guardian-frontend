import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
  return (
    <div className='hero-container'
        img src='/img/img-home.jpg' >
        <h1>WELCOME TO CYBER GUARDIAN</h1>
        <p> CYBER AWARENESS & INTERNET SAFETY</p>
        <div className='hero-btns'>
          {/* <Button 
            className='btns' 
            buttonStyle='btn--outline' 
            buttonSize='btn--large'> 
              ARTICLES
          </Button>
          <Button 
            className='btns' 
            buttonStyle='btn--outline' 
            buttonSize='btn--large'> 
              GAMES
          </Button> */}

        </div>
    </div>
  );
}

export default HeroSection;
