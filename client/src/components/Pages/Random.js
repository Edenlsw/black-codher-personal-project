import React, { useState, useEffect } from 'react';
import filterService from '../../services/filterService';
import PropTypes from 'prop-types';

// Services



function Random() {
  const [filters, setfilters] = useState(null);
  const [activityFilters, setActivityFilters] = useState(null);
    
     
    
      
  const getfilters = async () => {
    let res = await filterService.getAll();
    setfilters(res);
    setActivityFilters(res.filter(e => e.type === "random"));

  };
  
  // fetching data from database
  useEffect(() => {
    if (!filters) {
      getfilters();
    }
  });
    
  // var random = filters.filter(e => e.type === "random")
  
  function showRandom() {
    setActivityFilters()
  }
  
  
  // const renderFilter = (filter) 
    
        
      
    
    return (
      <div className="random">
        <button onClick={() => showRandom()}>Random</button>
          
        {
          activityFilters && activityFilters.map((filter) => (
            <div key={filter._id}>
               <h3>
                      {filter.activityName}
                    </h3>
                    <p>{filter.description}</p>
                    
              <filterService filter={filter} />
              <hr style={{ opacity: '.1' }} />
            </div>
          ))
        }
      </div>
    );
          
  }


  
  
  
    export default Random;  
















// function Random() {
//   const [filters, setfilters] = useState(null);
//   const [activityFilters, setActivityFilters] = useState(null);
    
     
    
      
//   const getfilters = async () => {
//     let res = await filterService.getAll();
//     setfilters(res);
//     setActivityFilters(res.filter(e => e.type === "active"));

//   };
  
//   // fetching data from database
//   useEffect(() => {
//     if (!filters) {
//       getfilters();
//     }
//   });
    
//   var active = filters.filter(e => e.type === "active")
  
//   function showActive() {
//     setActivityFilters(active)
//   }
  
  
//   // const renderFilter = (filter) 
    
        
      
    
//     return (
//       <div className="active">
//         <button onClick={() => showActive()}>active</button>
          
//         {
//           activityFilters && activityFilters.map((filter) => (
//             <div key={filter._id}>
//               <filterService filter={filter} />
//               <hr style={{ opacity: '.1' }} />
//             </div>
//           ))
//         }
//       </div>
//     );
          
//   }


  
  
  
//     export default Random;  