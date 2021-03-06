import React from 'react';
import { Link } from 'react-router-dom';

import './FilterButton.css';




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

export const FilterButtonActive = ({ children, type, onClick, buttonStyle, buttonSize }) => {
    
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : [0]

    return (
        <Link to='/Active' className='btn-mobile'>
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
            {children}
        </button>
    </Link>

    )
}


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
        <Link to='/Culture' className='btn-mobile'>
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
            {children}
        </button>
    </Link>

    )
}






// neon filters 



// neon filter button for family 

export const FilterButtonFamilyNew = ({ children, type, onClick, buttonStyle, buttonSize }) => {
    
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : [0]

    return (
        <Link to='/Family' className='btn-mobile'>
        <button className="funbtns">
            {children}
        </button>
    </Link>

    )
}


// neon filter button for random

export const FilterButtonRandomNew = ({ children, type, onClick, buttonStyle, buttonSize }) => {
    
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : [0]

    return (
        <Link to='/Random' className='btn-mobile'>
        <button className="funbtns">
            {children}
        </button>
    </Link>

    )
}
// neon filter button for nature


export const FilterButtonNatureNew = ({ children, type, onClick, buttonStyle, buttonSize }) => {
    
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : [0]

    return (
        <Link to='/Nature' className='btn-mobile'>
        <button className="funbtns">
            {children}
        </button>
    </Link>

    )
}






// neon filter button for active

export const FilterButtonActiveNew = ({ children, type, onClick, buttonStyle, buttonSize }) => {
    
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : [0]

    return (
        <Link to='/Active' className='btn-mobile'>
        <button className="funbtns">
            {children}
        </button>
    </Link>

    )
}




// neonfilter button for culture



export const FilterButtonCultureNew = ({ children, type, onClick, buttonStyle, buttonSize }) => {
    
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : [0]

    return (
        <Link to='/Culture' className='btn-mobile'>
        <button className="funbtns">
            {children}
        </button>
    </Link>

    )
}



// neon filter button for fun / games
export const FilterButtonFunNew = ({ children, type, onClick, buttonStyle, buttonSize }) => {
    
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : [0]

    return (
        <Link to='/Fun' className='btn-mobile'>
        <button className="funbtns">
            {children}
        </button>
    </Link>

    )
}







// export default FilterButton;
