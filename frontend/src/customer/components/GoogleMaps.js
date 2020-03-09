//--- React import
import React from 'react';

//--- Google-maps-react import
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';

//--- Data Import
import vendorData from '../../data/vendorData.js';
//================================================================================

function Map() {
     return (
         <GoogleMap 
            defaultZoom ={10}
            defaultCenter = {{lat: 47.698940,lng: -122.334373}}
         >
           {vendorData.map(
              vendorCart => {
                 return(
                    <Marker 
                     key={vendorCart.cartId}
                     position = {
                        {lat: vendorCart.location[0],lng: vendorCart.location[1]}
                     }
                    />
                 )
               }
           )}
            
         </GoogleMap>

     );
   }

const WrappedMap = withScriptjs(withGoogleMap(Map));

const styleGMap = {
   paddingLeft: '1%',
   paddingRight: '1%'
}

function GMap(){
   return(
      <div style={styleGMap}>
         <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDEsKpLXZJY-Ch3s_UN152D7btqc7HOocQ`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
         />
      </div>
   );
}

export default GMap;