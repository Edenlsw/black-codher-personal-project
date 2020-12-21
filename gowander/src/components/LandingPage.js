import React from 'react';
import '../App.css';
import { Button, NewButton } from './Button';
import './LandingPage.css';

function LandingPage() {
    return (
        <div className="landing-container">
            <h1>Let's Go</h1>
            <p>What are you waiting for?</p>
            <div className="landing-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
                    GET STARTED
                </Button>

                 <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
                    GET STARTED
                </Button>
            </div>
        </div>
    )
}

export default LandingPage
