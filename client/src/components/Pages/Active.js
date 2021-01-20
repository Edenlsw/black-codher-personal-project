import React, { useState, useEffect } from 'react';
import filterService from '../../services/filterService';
import './Active.css';

import Card  from '../Card';


import { Col, Container, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

// Services



function Active() {
    
  const [filters, setfilters] = useState(null);

  


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
  

  
  
  
   


  
  return (
      
        <div className="active-filters">
     
            
      <main>
      {
        filters && filters.map((filter) => (
                  <Card className="mr">
                    <div key={filter._id}>
                            
              <div class="grid-container">
                


                <Card.Image src={filter.image} />
                
                <Card.Title>
                {filter.activityName}
                </Card.Title>

                <Card.Text>
                  {filter.description}
                  
                </Card.Text>

                <Card.Button>{filter.website}</Card.Button>
                
                
                            
                        </div>
                            
                    </div>
                  </Card>
                  

                ))
            }
          </main>
            
        </div>

    );
}


  
  
  
    export default Active;











