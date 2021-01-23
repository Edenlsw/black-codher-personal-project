import React, { useState, useEffect } from 'react';
import filterService from '../../services/filterService';
import './Active.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Card  from '../Card';
import Carousel from 'react-elastic-carousel';
import Slider from './Slider'

import { Col, Container, Row } from 'react-bootstrap';


// Services




function Active() {
    
  const [filters, setfilters] = useState(null);
  
  // const [index, setIndex] = useState(0);
  
 
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];
  

  useEffect(() => {
          if (!filters) {
            getfilters();
          }
        });
      
        const getfilters = async () => {
          let res = await filterService.getAll();
        
          console.log(res)
          const filtered = res.filter(e => (e.filterCategory.includes("active")));
          console.log(filtered)
          setfilters(filtered);
  };
  

  
  
  const handleSelect = (selectedFilters, e) => {
    setfilters(selectedFilters);
  };
  
   


  
  return (
      
        <div className="active-filters">
     
     
      <main>
      {
          filters && filters.map((filter) => (
            <div key={filter._id}>
      <Carousel activeIndex={filters} onSelect={handleSelect}>
          
        
                <div>



                
                <Slider breakPoints={breakPoints}>
                    <div>
                      
                    <Card.Image src={filter.image} />
                
                      <Card.Title>
                        
                  
                        {filter.activityName}
                        
                      </Card.Title>
                      

                      <Card.Text>
                        
                        {filter.description}
                        
                
                      </Card.Text>
                      

                      <Card.Button>
                        
                        {filter.website}
                        
                      </Card.Button>
                      
                 </div>
                  
               
              
                </Slider>
                </div>

                
                
      </Carousel>
   
  </div>

                ))
            }
          </main>
          
        </div>

    );
}


  

    export default Active;













// import React, { useState, useEffect } from 'react';
// import filterService from '../../services/filterService';
// import './Active.css';

// import Card  from '../Card';


// import { Col, Container, Row } from 'react-bootstrap';
// import PropTypes from 'prop-types';

// // Services



// function Active() {
    
//   const [filters, setfilters] = useState(null);

  


//   useEffect(() => {
//           if (!filters) {
//             getfilters();
//           }
//         });
      
//         const getfilters = async () => {
//           let res = await filterService.getAll();
        
//           console.log(res)
//           const filtered = res.filter(e => (e.filterCategory.includes("active")));
//           console.log(filtered)
//           setfilters(filtered);
//   };
  

  
  
  
   


  
//   return (
      
//         <div className="active-filters">
     
            
//       <main>
//       {
//         filters && filters.map((filter) => (
//                   <Card className="mr">
//                     <div key={filter._id}>
                            
//               <div class="grid-container">
                


//                 <Card.Image src={filter.image} />
                
//                 <Card.Title>
//                 {filter.activityName}
//                 </Card.Title>

//                 <Card.Text>
//                   {filter.description}
                  
//                 </Card.Text>

//                 <Card.Button>{filter.website}</Card.Button>
                
                
                            
//                         </div>
                            
//                     </div>
//                   </Card>
                  

//                 ))
//             }
//           </main>
            
//         </div>

//     );
// }


  
  
  
//     export default Active;











