import React, { useState, useEffect } from 'react';
import filterService from '../../services/filterService';
import GoogleMap from '../GoogleMap';
import Carousel from 'react-elastic-carousel';
import Card from '../Card';
import Slider from './Slider';




// Services



function Nature() {
    
  const [filters, setfilters] = useState(null);
  
  


  useEffect(() => {
          if (!filters) {
            getfilters();
          }
        });
      
        const getfilters = async () => {
          let res = await filterService.getAll();
          // setfilters(res);
          console.log(res)
          const filtered = res.filter(e => (e.filterCategory.includes("nature")));
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
      
      {
            filters && filters.map((filter) => (
              <Card classes="mr">
             <div  key={filter._id}> 
                <div>


                
                <div>
                
                  <Slider>
                     
                        <Card.Image src={filter.image} alt={filter.activityName}  />
                        
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
                
              </Card>
   

                ))
            }
         
          </Carousel>
         


          
            
          
           
        
          <GoogleMap/>
              
        </div>

    );
}



  
  
  
    export default Nature;











