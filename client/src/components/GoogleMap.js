import { Component } from 'react';
import { Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete';

//   style to change size of map 
  const style = {
    width: '100%',
    height: '40%'
  }

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
   
    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };

    

   
    render() {
       
        return (
            <div id="googleMap">
                

                
            <PlacesAutocomplete
                value={this.state.address}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                        <div>
                            
                            {/* search bar  */}
                    <input
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
                        // inline style for demonstration purpose
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


                <Map
                    google={this.props.google}
                    //   centers map to brum
                    style={style}
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
                        position={{
                            lat: this.state.mapCenter.lat,
                            lng: this.state.mapCenter.lng
              
                        }} />
                    
                    <Marker
                        title={'The marker`s title will appear as a tooltip.'}
                        
                        name={'SOMA'}
                        
                        position={{ lat: 52.47945834465894, lng: -1.9108482125901436}} />
                    
      
                
                </Map>
                
            </div>
            
            
              
          
      )
    
    }




}
  



export default GoogleApiWrapper({
    apiKey: ('AIzaSyDrwa39T76pJiQ4RacPO21G8GzPkbGR3LY')
    
}) (MapContainer)
  

