import React, { useState, useEffect } from 'react';
import filterService from '../../services/filterService';
import GoogleMap from '../GoogleMap';
import Carousel from 'react-elastic-carousel';
import Card from '../Card';
import Slider from './Slider';

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
  

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];

  
  

  
  return (
    <div className="filters">
        
        
        <Carousel breakPoints={breakPoints}>
  {/* <main> */}
  {
        filters && filters.map((filter) => (
          <card classes="mr">
         <div  key={filter._id}> 
      {/* <Card className="mr" key={filter._id} > */}
            <div>


            
            <div>
            
              <Slider>
                
                    <Card.Image src={filter.image} />
                    
                    {/* <Card.Body> */}

                  <Card.Title>

                    {filter.activityName} 
                    
                  </Card.Title> 
                  

                  <Card.Text>
                    
                    {filter.description}
                    
     
                  </Card.Text>
                  

                  <Card.Button> 
                    
                    {filter.website}
                    
                  </Card.Button> 
                  {/* </Card.Body> */}
          
              
                  </Slider>
                  
         
          
             </div>
              
           
          
            </div>

            

            </div>
            
          </card>


            ))
        }
      {/* </main> */}
     
      </Carousel>
     
      <GoogleMap/>
          
    </div>

);
}


  
  
  
    export default Culture;











