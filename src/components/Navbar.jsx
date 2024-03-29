import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960){
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  

  window.addEventListener('resize', showButton);

    return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
            <p className='navbar-logo' >
                CYBER GUARDIAN <i className='fab fa-typo3' />
            </p>
             <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'> 
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/learning-paths' className='nav-links' onClick={closeMobileMenu}>
                  Learning Paths
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/articles' className='nav-links' onClick={closeMobileMenu}>
                  Articles
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/games' className='nav-links' onClick={closeMobileMenu}>
                  Games
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/checklists' className='nav-links' onClick={closeMobileMenu}>
                  Checklists
                </Link>
              </li>
            </ul>
        </div>
      </nav>
    </>
    )
}

export default Navbar
