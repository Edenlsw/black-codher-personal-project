import '../../App.css';
import React from 'react'
import '../LandingPage';
import LandingPage from '../LandingPage';
import About from '../Pages/About';




function Home() {
    return (
        <>
            <LandingPage />
            <About />
            {/* <How-It-Works /> */}
            
        </>
    )
}

export default Home;
