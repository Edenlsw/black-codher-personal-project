import React, { useState, useEffect } from 'react';
import filterService from '../../services/filterService';

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
        </div>

    );
}


  
  
  
    export default Culture;











