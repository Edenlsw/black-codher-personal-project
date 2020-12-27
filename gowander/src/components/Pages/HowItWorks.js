import React from 'react';
import './HowItWorks.css';
import { NewButton, Button, LetsGoButton } from '../Button';

function HowItWorks() {
    return (
        <div className="how-it-works-container">
            <h1>HOW IT WORKS</h1>
            <p>GoWander is quick and easy to use, just follow these 3 steps </p>
            <div className="works-li">
                <ol>
                    <li>
                        <p>Pick one of the 6 categories</p>
                    </li>
                    <li>
                        <p>Click Next</p>
                    </li>
                    <li>
                        <p>Now it’s time to GoWander with one of the activities generated </p>
                    </li>
                </ol>
            </div>
            

            <div className="how-it-works-btns"></div>

            {/* button linking to get started buttons */}
            <LetsGoButton className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
                    LETS GO 
            </LetsGoButton>
        </div>
    )
}

export default HowItWorks
