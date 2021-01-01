import '../../App.css';
import React from 'react'
import '../LandingPage';
import LandingPage from '../LandingPage';
import About from '../Pages/About';
import HowItWorks from './HowItWorks';
import GetStarted from './GetStarted';



function Home() {
    return (
        <>
            <LandingPage />
            <About />
            <HowItWorks />
            <GetStarted />
            
        </>
    )
}

export default Home;
