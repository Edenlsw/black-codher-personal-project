// import { Button } from 'bootstrap';
import React from 'react';
import FilterButton, { FilterButtonFamily, FilterButtonFamilyNew, FilterButtonRandom, FilterButtonRandomNew, FilterButtonFun, FilterButtonFunNew,  FilterButtonNature,  FilterButtonNatureNew, FilterButtonCulture, FilterButtonCultureNew, FilterButtonActive, FilterButtonActiveNew } from '../FilterButton';
import './GetStarted.css'
import './Neonbtns.css';

// import Navbar from '../Navbar';




function GetStarted() {
    return (
        <div className="filter-container">
            
            <div className="grid-container">

                {/* <div className="filter-buttons"> */}
                    {/* <div className="filter-buttons">
                        <FilterButtonFamily className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
                        Family
                        </FilterButtonFamily>

                    </div> */}
                    {/* <div className="filter-buttons">
                        <FilterButtonRandom className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
                        Random
                        </FilterButtonRandom>
                    </div>
                    <div className="filter-buttons">
                        <FilterButtonNature className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
                        Nature 
                        </FilterButtonNature>
                    </div>
                    <div className="filter-buttons">
                        <FilterButtonActive className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
                        Active 
                        </FilterButtonActive>
                    </div>
                    <div className="filter-buttons">
                        <FilterButtonCulture className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
                        Culture 
                        </FilterButtonCulture>
                    </div>
                    <div className="filter-buttons">
                        <FilterButtonFun className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
                            Fun
                        </FilterButtonFun>
                    </div> */}
                
              
                
                    <div className="filter-buttons">
                <div className="conatiner">
                        <FilterButtonFamilyNew className="funbtns">
                            Family
                        </FilterButtonFamilyNew>
                        
                        
                </div> 
                    
                </div>




                <div className="filter-buttons">
                <div className="conatiner">
                        <FilterButtonRandomNew className="funbtns" buttonStyle="btn--primary" buttonSize="btn--large">
                            Random
                        </FilterButtonRandomNew>
                        
                        
                </div> 
                    
                </div>


                <div className="filter-buttons">
                <div className="conatiner">
                        <FilterButtonNatureNew className="funbtns" buttonStyle="btn--primary" buttonSize="btn--large">
                            Nature
                        </FilterButtonNatureNew>
                        
                        
                </div> 
                    
                </div>
                
                
                
                    <div className="filter-buttons">
                <div className="conatiner">
                        <FilterButtonCultureNew className="funbtns">
                            Culture
                        </FilterButtonCultureNew>
                        
                        
                </div> 
                    
                </div>




                <div className="filter-buttons">
                <div className="conatiner">
                        <FilterButtonFunNew className="funbtns" buttonStyle="btn--primary" buttonSize="btn--large">
                            Fun
                        </FilterButtonFunNew>
                        
                        
                </div> 
                    
                </div>


                <div className="filter-buttons">
                <div className="conatiner">
                        <FilterButtonActiveNew className="funbtns" buttonStyle="btn--primary" buttonSize="btn--large">
                            Active
                        </FilterButtonActiveNew>
                        
                        
                </div> 
                    
                </div>



                
            </div>
                </div>

           



     
        
    )
}

export default GetStarted
