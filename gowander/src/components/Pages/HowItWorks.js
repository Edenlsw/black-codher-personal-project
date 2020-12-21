import React from 'react';
import './HowItWorks.css';
import { NewButton, Button, LetsGoButton } from '../Button';

function HowItWorks() {
    return (
        <div className="how-it-works-container">
            <h1>HOW IT WORKS</h1>
            <p>This the details of how the GoWander Website works </p>
            <div className="how-it-works-btns"></div>
            <LetsGoButton className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
                    LETS GO 
            </LetsGoButton>
        </div>
    )
}

export default HowItWorks
