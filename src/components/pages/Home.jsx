
import React from 'react';
import '../../App.css';
import IntroSection from '../IntroSection';
import Cards from '../cards/Cards';
import Footer from '../Footer';
import logo from '../images/cglogo.png'
function Home() {
   

    return (
        <>
            <IntroSection />
            <div className='intro-div'>
                <div className='intro-div-col'>
                <h2 className='intro-div-header' data-cy='intro-div-header'>What is Cyber Guardian?</h2>
                <p className='intro-div-p'>Cyber Guardian is a web resource built to empower our users (you) with the knowledge to keep themselves safe while online. 
                    Read articles, use checklists, follow a learning path, or even play games to better prepare yourself against possible hackers and/or scammers.</p>
                </div>
                <div className='intro-div-col'>
                    <img className='intro-div-img' src={logo} alt="cyber guardian logo" />
                </div>
            </div>
            <Cards />
            <Footer />
        </>
    );
}

export default Home;