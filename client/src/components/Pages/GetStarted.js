import React from 'react';
import FilterButton, { FilterButtonFamily, FilterButtonRandom } from '../FilterButton';
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
            <FilterButtonRandom className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
                Nature 
            </FilterButtonRandom>
            <FilterButtonRandom className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
                Active 
            </FilterButtonRandom>
            <FilterButtonRandom className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
                Culture 
            </FilterButtonRandom>
            <FilterButtonRandom className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
                Fun
            </FilterButtonRandom>
        </div>



        </div>
        
    )
}

export default GetStarted
