import React from 'react';
import FilterButton, { FilterButtonFamily, FilterButtonRandom, FilterButtonFun, FilterButtonNature } from '../FilterButton';
import './GetStarted.css'

// import Navbar from '../Navbar';

function GetStarted() {
    return (
        <div className="filter-container">
            <div className="filter-buttons">
            <FilterButtonFamily className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
                Family
            </FilterButtonFamily>
            <FilterButtonRandom className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
                Random
            </FilterButtonRandom>
            <FilterButtonNature className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
                Nature 
            </FilterButtonNature>
            <FilterButtonRandom className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
                Active 
            </FilterButtonRandom>
            <FilterButtonRandom className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
                Culture 
            </FilterButtonRandom>
            <FilterButtonFun className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
                Fun
            </FilterButtonFun>
        </div>



        </div>
        
    )
}

export default GetStarted
