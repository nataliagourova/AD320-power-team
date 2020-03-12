//--- React import
import React, {useState} from 'react';

//--- Google-maps-react import
import { GoogleMap, withScriptjs, withGoogleMap, Marker,InfoWindow } from 'react-google-maps';

//--- Data Import
import vendorData from '../../data/vendorData.js';

import logo from '../../assets/hotdogcart.png';
import '../Customer.css';

import {Button} from 'react-bootstrap';
//================================================================================



function Map() {

   const [selectedCart, setSelectedCart] = useState(null);

   return (
      <GoogleMap 
         defaultZoom ={14}
         defaultCenter = {{lat: 47.707152,lng: -122.326108}}
      > 

         {vendorData.map(
            vendorCart => {
               return(
                  <Marker 
                     key={vendorCart.cartId}
                     position = {
                        {lat: vendorCart.location[0], lng: vendorCart.location[1]}
                     }
                     onClick = {
                        ()=>{ setSelectedCart(vendorCart) }
                     }
                  />
               )
            }
         )
         } 

         {selectedCart && (
            <InfoWindow 
               position = { {lat: selectedCart.location[0], lng: selectedCart.location[1]} }
               onCloseClick = { () => { setSelectedCart(null) } }
            >
               <div className="g-infoWindow">
                  <img src={logo} alt="placeHolder"/>
                  <h6>{selectedCart.cartName}</h6>
                  <p>{selectedCart.description}</p>
    
                   <Button variant="outline-secondary"  onClick = {event => window.location.href='/customer/menuOrder'}>
                      Menu
                   </Button>
                   <Button variant="outline-secondary"  onClick = {event => window.location.href='/customer/menuOrder'}>
                      Order
                   </Button>
               </div>
            </InfoWindow>
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