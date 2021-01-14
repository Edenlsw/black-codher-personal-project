import React from 'react';
import { Link } from 'react-router-dom';
import '../components/FilterButton.css';



const STYLES = ['btn--primary', 'btn--outline']
const SIZES = ['btn--medium', 'btn--large'];



// filter button for family 

export const FilterButtonFamily = ({ children, type, onClick, buttonStyle, buttonSize }) => {
    
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : [0]

    return (
        <Link to='/Family' className='btn-mobile'>
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
            {children}
        </button>
    </Link>

    )
}


// filter button for random

export const FilterButtonRandom = ({ children, type, onClick, buttonStyle, buttonSize }) => {
    
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : [0]

    return (
        <Link to='/Random' className='btn-mobile'>
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
            {children}
        </button>
    </Link>

    )
}
// filter button for nature


export const FilterButtonNature = ({ children, type, onClick, buttonStyle, buttonSize }) => {
    
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : [0]

    return (
        <Link to='/Nature' className='btn-mobile'>
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
            {children}
        </button>
    </Link>

    )
}

// filter button for active



// filter button for fun / games
export const FilterButtonFun = ({ children, type, onClick, buttonStyle, buttonSize }) => {
    
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : [0]

    return (
        <Link to='/Fun' className='btn-mobile'>
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
            {children}
        </button>
    </Link>

    )
}


// filter button for culture



export const FilterButtonCulture = ({ children, type, onClick, buttonStyle, buttonSize }) => {
    
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : [0]

    return (
        <Link to='/Nature' className='btn-mobile'>
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
            {children}
        </button>
    </Link>

    )
}








// export default FilterButton;
