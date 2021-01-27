import React, { useState, useEffect } from 'react';
import filterService from '../../services/filterService';
import GoogleMap from '../GoogleMap';
import Carousel from 'react-elastic-carousel';
import FilterButton, { FilterButtonFun } from '../FilterButton';
import './Nature.css';



// Services



function Nature() {
    
  const [filters, setfilters] = useState(null);
  // const [filteredActivity, setFilteredActivity] = useState(null)
  


  useEffect(() => {
          if (!filters) {
            getfilters();
          }
        });
      
        const getfilters = async () => {
          let res = await filterService.getAll();
          // setfilters(res);
          console.log(res)
          const filtered = res.filter(e => (e.filterCategory.includes("nature")));
          console.log(filtered)
          setfilters(filtered);
  };
  

  
  
  
   


    
    return (
        <div className="filters">
            

        <Carousel>
        {
                filters && filters.map((filter) => (
                    <div key={filter._id}>
                    <h3>
                      {filter.activityName}
                    </h3>
                    {/* <p>{filter.description}</p> */}
                    
                    </div>

                ))
        }
        

        </Carousel>
            
        {/* <GoogleMap/> */}

        <div className="conatiner">

        <button className="funbtns">
            
          Fun
        </button>
        </div>
        
        
        
        </div>
      

        
    );
}


  
  
  
    export default Nature;











