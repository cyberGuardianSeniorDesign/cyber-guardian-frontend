import React from 'react';
import '../App.css';
import './ConstructionBanner.css';


function ConstructionBanner() {
  return (
    <div className='construction-banner'
        img src='/img/img-home.jpg' >
        <h1>UNDER CONSTRUCTION</h1>
        <p> Please check again soon for more content!</p>
    </div>
  );
}

export default ConstructionBanner;
