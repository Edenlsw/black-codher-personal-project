import { set } from 'mongoose';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css'


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

// button shows when page resizes - 
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton)



    return (
        <>
            <nav className="navbar">

                <div className="navbar-container">
                    {/* logo click closes menu bar  */}
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        GoWander <i className="fab fa-typo3"></i>
                    </Link>
                    {/* toggle between bars navbar */}
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times': 'fas fa-bars'} />
                    </div>
                    {/* when on mobile navbar disappear */}
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                HOME
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                                ABOUT
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/how-it-works' className='nav-links' onClick={closeMobileMenu}>
                                HOW IT WORKS
                            </Link>
                        </li>
                            <li className='nav-item'>
                            <Link to='/get-started' className='nav-links' onClick={closeMobileMenu}>
                                GET STARTED
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>
            
             
        </>
    )
}


export default Navbar
