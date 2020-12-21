import '../../App.css';
import React from 'react'
import '../LandingPage';
import LandingPage from '../LandingPage';
import About from '../Pages/About';
import HowItWorks from './HowItWorks';



function Home() {
    return (
        <>
            <LandingPage />
            <About />
            <HowItWorks />
            
        </>
    )
}

export default Home;
