import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function IntroSection() {
  return (
    <div className='intro-container'
        img src='/img/img-19.png' data-cy='intro-section' >
        <h1>WELCOME TO CYBER GUARDIAN</h1>
        <p> CYBER AWARENESS & INTERNET SAFETY</p>
    </div>
  );
}

export default IntroSection;
