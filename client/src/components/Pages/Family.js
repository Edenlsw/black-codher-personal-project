import React, { useState, useEffect } from 'react';
import filterService from '../../services/filterService';

// Services



function Family() {
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
        <li key={filter._id}>
          <h3>
            {filter.activityName}
          </h3>
          <p>{filter.description}</p>
        </li>
      );
    };
  
    return (
      <div>
        <ul>
          {filters && filters.length > 0 ? (
            filters.map((filter) => renderFilter(filter))
          ) : (
            <p>No Activities Available</p>
          )}
        </ul>
      </div>
    );
  }
  



export default Family;
