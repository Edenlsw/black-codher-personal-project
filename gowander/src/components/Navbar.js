import React, { useState } from 'react'
import { Link } from 'react-router-dom';


function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);




    return (
        <>
            <nav className="navbar">

                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
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
                                Get Started
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            
             
        </>
    )
}


export default Navbar
