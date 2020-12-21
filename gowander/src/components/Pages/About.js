import React from 'react'
import { Link } from 'react-router-dom';
import './About.css';
import { Button, NewButton } from '../Button';

function About() {
    return (
        <div className="about">
            <h1>What is GoWander? </h1>
            <p>
                The idea of GoWonder, is a fun way to explore a city. Simply type in your location, add a filter here and there, press the button, and it will generate an activity for you to do based on your filters and preferences.
                For now the app will focus on Birmingham. 
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
