import React from 'react'
import { Link } from 'react-router-dom';
import './About.css';
import { Button, NewButton, LetsGoButton } from '../Button';

function About() {
    return (
        <div className="about-container">
            <h1>What is GoWander? </h1>
            <p>
            Have you ever visited a new city and had nothing to do? Are you bored and looking for new and different to do in your current home city? Then GoWander is the answer to all your problems. Whether you are after something do with the family, in nature or just something completely random then look further. 
            Simply pick a filter and GoWander will generate a variety of activities for you to do based on your preferences.
            For now, we are all operating within Birmingham UK, but so are looking to expand further across the UK.  

            </p>
            <div className="about-btns">
                <NewButton className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
                    HOW IT WORKS
                </NewButton>
            </div>

        </div>
    )
}

export default About
