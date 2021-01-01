import React from 'react';
import FilterButton, { FilterButtonFamily, FilterButtonRandom } from '../FilterButton';
import './GetStarted.css'

// import Navbar from '../Navbar';

function GetStarted() {
    return (
        <div className="filter-buttons">
            <FilterButtonFamily className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
                Hello
            </FilterButtonFamily>
        </div>
    )
}

export default GetStarted
