import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import filterService from '../../services/filterService';
import Carousel from 'react-elastic-carousel';
import Card from '../Card';
import Slider from './Slider';

import GoogleMap from '../GoogleMap';

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
          const filtered = res.filter(e => (e.filterCategory.includes("family")));
          setfilters(filtered);
  };
  

  
  
  
   

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];

  


  
  
  return (
      
  
          
        <div className="filters">
            
            
            <Carousel breakPoints={breakPoints}>
     
      {
            filters && filters.map((filter) => (
             
             <div  key={filter._id}> 
                <div>
                <div>
                  <Slider>
                        <Card.Image src={filter.image} />
                        <Card.Body>
                      <Card.Title>
                        {filter.activityName} 
                      </Card.Title> 
                      <Card.Text>
                        {filter.description}
                      </Card.Text>
                        <a href ={filter.website} target="_blank">
                      <Card.Button> 
                          <h3>More Details</h3>
                      </Card.Button> 
                      </a>
                      </Card.Body>
              
                  
                      </Slider>

              
                 </div>
                  
               
              
                </div>

                
   
                </div>
                
              // </card>
   

                ))
            }
          {/* </main> */}
         
          </Carousel>
         
          <GoogleMap/>
              
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
















