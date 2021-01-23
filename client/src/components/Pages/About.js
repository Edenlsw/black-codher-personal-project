// import React from 'react';
// import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps";
import filterService from '../../services/filterService';
import GoogleMap from '../GoogleMap';






// function About() {
//     return (
//         <div className="map">
//             <h1>Google Map</h1>
//             <GoogleMap/>
//         </div>
//     )
// }

// export default About






















// new tutorial 

// function Map() {
//     return (
//         // how far map in zoomed and centered when page loads
//         <GoogleMap defaultZoom={10} defaultCenter={{ lat: 52.482899, lng: -1.893460 }}
//         />
        



        
//     );
// }


// const WrappedMap = withScriptjs(withGoogleMap(Map));





// export default function About() {
//     return (
//         <div style={{ width: '100vw', height: '100vh' }}>
//             <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key= AIzaSyDrwa39T76pJiQ4RacPO21G8GzPkbGR3LY`}
//                 loadingElement={<div style={{ height: "100%" }} />}
//                 containerElement={<div style={{ height: "100%", width: "50%" }} />}
//                 mapElement={<div style={{ height: "100%" }} />}
//             />
        
//         </div>
        

//     );
    
// }














import React from 'react'
import { Link } from 'react-router-dom';
import './About.css';
import { Button, NewButton, LetsGoButton } from '../Button';



function About() {
    return (
        <div className="about-container">
            <h1>What is GoWander? </h1>
            <p>
                Have you ever visited a new city and had nothing to do, so you spend hours online searching for recommended things to do? 
            
            </p>
            <p>
                Are you bored and looking for new and different things to do in your current home city?  
            </p>

            
            
            <p>
                Then GoWander is the answer to all your problems. Whether you are after something do with the family, in nature or just something completely random then look further.
            </p>

            <p>
                Simply pick a filter and GoWander will generate a variety of activities for you to do based on your preferences.
            </p>
            
            <p>
                For now, we are all operating within Birmingham UK, but so are looking to expand further across the UK.
            </p>

            
            



            <div className="about-btns">
                <NewButton className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
                    HOW IT WORKS
                </NewButton>
            </div>

        </div>
    )
}

export default About
