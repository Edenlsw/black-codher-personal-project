import React, { useState, useEffect } from 'react';

// Services
import activityService from '../../services/activityService';

function Family() {
    const [activities, setactivities] = useState(null);

    useEffect(() => {
        if (!activities) {
          getactivities();
        }
    });
    

    const getactivities = async () => {
        let res = await activityService.getAll();
        setactivities(res);
    };
    

    const renderActivities = (activity) => {
        return (
          <li key={activity._id}>
            <h3>
              {`${activity.activityName} 
              ${activity.description}`}
            </h3>
            {/* <p>{user.location}</p> */}
          </li>
        );
    };
    

    return (
        <div>
          <ul>
            {activities && activities.length > 0 ? (
              activities.map((activity) => renderActivities (activity))
            ) : (
              <p>No Activities Found</p>
            )}
          </ul>
        </div>
      );
    
}

export default Family
