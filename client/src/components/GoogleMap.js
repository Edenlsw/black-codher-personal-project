import { Component } from 'react';
import { Map, Marker, GoogleApiWrapper, InfoWindow} from 'google-maps-react';
import PlacesAutocomplete, {geocodeByAddress, getLatLng, } from 'react-places-autocomplete';
import './GoogleMaps.css'

//   style to change size of map 
  // const style = {
  //   height: '500px',
  //   width: '95%'
  // }

export class MapContainer extends Component {


    constructor(props) {
        super(props);
        this.state = {
                  // for google map places autocomplete

            address: '',

            showingInfoWindow: false,
            activeMarker: {},
             selectedPlace: {},
      
        mapCenter: {
            lat: 52.482899,
            lng: -1.893460
        }
      }
    };
    
     

    handleChange = address => {
        this.setState({ address });
      };
     
      handleSelect = address => {
        geocodeByAddress(address)
          .then(results => getLatLng(results[0]))
            .then(latLng => { 
                console.log('Success', latLng)

                // update center state
                this.setState({ address });
                // updates map to new address on map 
                this.setState({ mapCenter: latLng });
            })
          .catch(error => console.error('Error', error));
      };
     
   
    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
   
    onClose = props => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };

    

   
    render() {
       
      return (
        <div className="map-wrapper"
          style={{
            maxwidth: "500px"
        }}>
            <div id="googleMap" 
              style={{
                position: "relative",
                width: "100%",
                height: "400px",
                margin: "100px 0  ",
              
              }} >
          
            
                

            <div id="the-search-bar"
            style={{
              // width: "89%",
              // height: "30px",
              
            
            }}> 
            <PlacesAutocomplete
                value={this.state.address}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                        <div>
                            
                  {/* search bar  */}
                  
                  <input className="search-bar"
                    {...getInputProps({
                        placeholder: 'Search Places ...',
                        className: 'location-search-input',
                    })}
                    />
                   
                    <div className="autocomplete-dropdown-container">
                    {loading && <div>Loading...</div>}
                    {suggestions.map(suggestion => {
                        const className = suggestion.active 
                        ? 'suggestion-item--active'
                        : 'suggestion-item';
                      
                      
                        // inline style 
                        const style = suggestion.active
                        ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                        : { backgroundColor: '#ffffff', cursor: 'pointer' };
                        return (
                        <div
                            {...getSuggestionItemProps(suggestion, {
                            className,
                            style,
                            })}
                        >
                            <span>{suggestion.description}</span>
                        </div>
                        );
                    })}
                    </div>
                </div>
                )}
              </PlacesAutocomplete>
              </div>


                <Map
                    google={this.props.google}
                    //   centers map to brum
              
                    // style={style}
                    initialCenter= {{
                        lat: this.state.mapCenter.lat,
                        lng: this.state.mapCenter.lng
                    }}
                    center={{
                        lat: this.state.mapCenter.lat,
                        lng: this.state.mapCenter.lng
                    }}
                >
                    

              <Marker
                onClick={this.onMarkerClick}
                name={'Sea Life Center'}
                position={{
                  lat: this.state.mapCenter.lat,
                  lng: this.state.mapCenter.lng
              
                }}
                
              />
              
                    
              <InfoWindow
                
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}
                onClose={this.onClose}
                 >
                <div>
                   <h4>{this.state.selectedPlace.name}</h4>
                </div>
              </InfoWindow>
      
                
                </Map>
                
            </div>
            
            
              </div> 
          
      )
    
    }




}
  



export default GoogleApiWrapper({

//   <iframe
//   width = "600".
//   height = "450",
//   frameborder = "0" style = "border:0",
//   src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDrwa39T76pJiQ4RacPO21G8GzPkbGR3LY&q=Space+Needle,Seattle+WA" allowfullscreen>
// </iframe>


    apiKey: ('AIzaSyBZVT9pIv2QBwmDQincmCElJlvlHC4T004')
    
}) (MapContainer)
  

