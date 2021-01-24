
import React from 'react';


import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps";

function Map() {
    return (
        // how far map in zoomed and centered when page loads
        <GoogleMap defaultZoom={10} defaultCenter={{ lat: 52.482899, lng: -1.893460 }}
        />
        



        
    );
}


const WrappedMap = withScriptjs(withGoogleMap(Map));





export default function About() {
    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key= AIzaSyDrwa39T76pJiQ4RacPO21G8GzPkbGR3LY`}
                loadingElement={<div style={{ height: "100%" }} />}
                containerElement={<div style={{ height: "50%", width: "100%" }} />}
                mapElement={<div style={{ height: "50%" }} />}
            />
        
        </div>
        

    );
    
}





// import React, { useState, useEffect } from 'react';
// import filterService from '../../services/filterService';
// import './Active.css';
// import Card from '../Card';
// import Carousel from 'react-elastic-carousel';
// import GoogleMap from '../GoogleMap';
// import Slider from './Slider';


// // import Slider from './Slider'



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
  

  
  
//   const handleSelect = (selectedFilters, e) => {
//     setfilters(selectedFilters);
//   };
  
//   const breakPoints = [
//     { width: 1, itemsToShow: 1 },
//     { width: 550, itemsToShow: 2, itemsToScroll: 2 },
//     { width: 768, itemsToShow: 3 },
//     { width: 1200, itemsToShow: 4 }
//   ];


  
//   return (
      
//         <div className="active-filters">
     
//      <Carousel breakPoints={breakPoints}>
//       {/* <main> */}
//       {
//           filters && filters.map((filter) => (
//             <div key={filter._id}>
          
        
//                 <div>



                
//                     <div>
//                       <Slider>
//                     <Card.Image src={filter.image} />
              
                
//                       <Card.Title>
                        
                  
//                         {filter.activityName}
                        
//                       </Card.Title> 
                      

//                       <Card.Text>
                        
//                         {filter.description}
                        
         
//                       </Card.Text>
                      

//                       <Card.Button> 
                        
//                         {filter.website}
                        
//                       </Card.Button> 
                  
// </Slider>


                  
              
//                  </div>
                  
               
              
//                 </div>

                
                
   
//   </div>

//                 ))
//             }
//           {/* </main> */}
      
//           </Carousel>
//     <GoogleMap/>
   
//         </div>

//     );
// }


  

//     export default Active;













// // import React, { useState, useEffect } from 'react';
// // import filterService from '../../services/filterService';
// // import './Active.css';

// // import Card  from '../Card';


// // import { Col, Container, Row } from 'react-bootstrap';
// // import PropTypes from 'prop-types';

// // // Services



// // function Active() {
    
// //   const [filters, setfilters] = useState(null);

  


// //   useEffect(() => {
// //           if (!filters) {
// //             getfilters();
// //           }
// //         });
      
// //         const getfilters = async () => {
// //           let res = await filterService.getAll();
        
// //           console.log(res)
// //           const filtered = res.filter(e => (e.filterCategory.includes("active")));
// //           console.log(filtered)
// //           setfilters(filtered);
// //   };
  

  
  
  
   


  
// //   return (
      
// //         <div className="active-filters">
     
            
// //       <main>
// //       {
// //         filters && filters.map((filter) => (
// //                   <Card className="mr">
// //                     <div key={filter._id}>
                            
// //               <div class="grid-container">
                


// //                 <Card.Image src={filter.image} />
                
// //                 <Card.Title>
// //                 {filter.activityName}
// //                 </Card.Title>

// //                 <Card.Text>
// //                   {filter.description}
                  
// //                 </Card.Text>

// //                 <Card.Button>{filter.website}</Card.Button>
                
                
                            
// //                         </div>
                            
// //                     </div>
// //                   </Card>
                  

// //                 ))
// //             }
// //           </main>
            
// //         </div>

// //     );
// // }


  
  
  
// //     export default Active;










