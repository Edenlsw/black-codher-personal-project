import React, { useState, useEffect } from 'react';
import filterService from '../../services/filterService';
import Carousel from 'react-elastic-carousel';
import Card from '../Card';


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
          console.log(res)
          const filtered = res.filter(e => (e.filterCategory.includes("family")));
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
            
        </div>

    );
}


  
  
  
    export default Family;




















// import React, { useState, useEffect } from 'react';
// import filterService from '../../services/filterService';
// import PropTypes from 'prop-types';

// // Services



// function Family() {
    
//   const [filters, setfilters] = useState(null);
//   // const [filteredActivity, setFilteredActivity] = useState(null)
  


//   useEffect(() => {
//           if (!filters) {
//             getfilters();
//           }
//         });
      
//         const getfilters = async () => {
//           let res = await filterService.getAll();
//           // setfilters(res);
//           console.log(res)
//           const filtered = res.filter(e => (e.filterCategory.includes("family")));
//           console.log(filtered)
//           setfilters(filtered);
//   };
  

  
  
  
   


//     // function showFamily() {
//     //   setFilteredActivity(Family)
//     // }

    
//     // const [filteredActivity, setFilteredActivity] = useState(null)
  
  
//     return (
//         <div className="filters">
//             {/* <button onClick={() => showFamily()}>Family</button> */}
            

//             {
//                 filters && filters.map((filter) => (
//                     <div key={filter._id}>
//                     <h3>
//                       {filter.activityName}
//                     </h3>
//                     <p>{filter.description}</p>
                    
                    
//                     </div>

//                 ))
//             }
//         </div>

//     );
// }


  
  
  
//     export default Family;
















