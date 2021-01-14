import React, { useState, useEffect } from 'react';
import filterService from '../../services/filterService';
import PropTypes from 'prop-types';
// import Family from './Family';







function Fun() {
  // const [filters, setfilters] = useState([]);
  const [filters, setfilters] = useState(null);
  
    useEffect(() => {
      if (!filters) {
        getfilters();
      }
    });
  
    const getfilters = async () => {
      let res = await filterService.getAll();
      setfilters(res);
    };
  
  const renderFilter = (filter) => {
  
      
    
    
    
    return (
      <div>
        
          < li key={filter._id}>
        {/* {filter.filterCategory[family]} */}
        <h3>
          {filter.activityName}
            
        </h3>
          <p>{filter.description}</p>
          {filter.image}
        
        {/* {renderFamily} */}

        </li>
      
         
        </div>
        
      );
    };
  
    return (
      <div>
        <ul>
         
          

         

          {filters && filters.length > 0 ? (filters.map((filter) => renderFilter(filter))
          ) : (
            <p>No Activities Available</p>
          )}
        </ul>
      </div>
    );
  }
  



  export default Fun;