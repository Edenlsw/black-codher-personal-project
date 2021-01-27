import React, { useState, useEffect } from 'react';
import filterService from '../../services/filterService';
import GoogleMap from '../GoogleMap';
import Carousel from 'react-elastic-carousel';

import "./style.css";
// Services



function Culture() {
    
  const [filters, setfilters] = useState(null);
  


  useEffect(() => {
          if (!filters) {
            getfilters();
          }
        });
      
        const getfilters = async () => {
          let res = await filterService.getAll();
          console.log(res)
          const filtered = res.filter(e => (e.filterCategory.includes("culture")));
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
                    <p>{filter.description}</p>
                    
                    </div>

                ))
        }
        </Carousel>
        
        <GoogleMap/>
      </div>
      

    );
}


  
  
  
    export default Culture;











