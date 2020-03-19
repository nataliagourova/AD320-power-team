import React, {useState} from 'react';
import './admincomponents.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import { GoogleMap, withScriptjs, withGoogleMap, Marker,InfoWindow } from 'react-google-maps';
import{adminData} from "../data/adminData"
import cartData from "../data/cartData"
    
    
    
    import vendorData from '../data/vendorData.js';
    
    import logo from '../assets/hotdogcart.png';
    
    import {Button} from 'react-bootstrap';
    //================================================================================





 


const Loginbox = () => (
    <div className = 'loginbox'>
      <p>ADMIN LOGIN</p>

  <label for="username">Username:</label><br />
  <input type="text" id="username" /><br />
  <label for="password">Password:</label><br />
  <input type="text" id="password" /><br />
  <Link to = "/Admin1" ><input type="submit" value="Enter"  /></Link>


    
    </div>
    );


const Header = (props) => (
    <div className ='header'>
    <h1>{props.message}</h1>
    <ul>

        <li><Link to ="/Admin3">Carts</Link></li>
        <li><Link to ="/Admin2">Menus</Link></li>
        <li><Link to ="/Admin1">Logs</Link></li>
    </ul>
    </div>
);

// <Link to = "/Admin1Promotion">Sales Promotions</Link>
  //  <Link to = "/Admin1Equipment" p style={{margin: 35}}> Equipment Uptake</Link>

const Admin1 = () => (
    <div className ='Admin1'> 
    <Link to = "/Admin1Customer">Customer Action</Link>
    <Link to = "/Admin1Vendor">Vendor Action</Link>
    <Link to = "/Admin1Admin">Admin Action</Link>
    
    
    
    <br />
    <hr />
    <br />
    <div className = 'right'>
    <h2>LABOR COST:</h2> <p p style={{margin: 54}}>{adminData[0].laborCost}$</p>
    <br />
    <br />
    <h2>PACKAGING COST:</h2>  <p>{adminData[0].packagingCost}$</p>
    <br />
    <br />
    <h2>BENEFITS:</h2>  <p p style={{margin: 95}}>{adminData[0].benefits}$</p>
    </div>  
    <h2>NET PROFIT:</h2>  <p style={{margin: 32}}>{adminData[0].netProfit}$</p>        
    <br />
    <br />
    <h2>GROSS PROFIT:</h2>  <p>{adminData[0].grossProfit}$</p>  
    <br />
    <br />
    <h2>MONTHLY:</h2>  <p style={{margin: 47}}>{adminData[0].monthly}$</p>    
    </div>
);

const LogsRow = (props) => (
    <div className="Admin1LOGS" >
        
        <h2  style={{marginLeft: 47}}>{props.time}</h2>  <p>{props.log1}</p>    <p>{props.log2}</p>  <p>{props.log3}</p> <h2 style={{float: "right", marginRight: "20px"}}>{props.total}</h2>
        
    </div>
)

const LogsHead = (props) => (
    <div className="Admin1LOGS" style={{marginTop:20}}>
    <h2>{props.message}</h2><hr />
    <div  style={{marginLeft: 47}} >
    <h2 style={{marginRight: 55}}>Time</h2>  <h2 style={{float: "right", marginRight: "20px"}}>Total</h2>
    </div>

    </div>
)

const Admin2 = () => (
    <div className ='Admin1' >
       
       <div className="Drop">
        <h3>Select Vendor: </h3>
        <button type="button"  onClick ={DropDown} class="collapsible">Vendor</button>
        <div className="pad">
            <Link to ="/Admin2">Vendor Menu 1</Link>  <Link to ="/Admin2">Vendor Menu 2</Link><br />
            <Link to ="/Admin2">Vendor Menu 3</Link>  <Link to ="/Admin2">Vendor Menu 4</Link>
        </div>

        </div>
        
    </div>
)



const Admin2Row = (props) => (
  <div className = 'Admin2' >
     <button type="button" style={{float: "right"}}>DELETE</button> <br />
  <label for="Name">Item:</label> <label for="Quality 1" style={{paddingLeft:27, marginRight:15}}>Description: </label> <label for="Quality 2" style={{paddingLeft:0}}>Image Link: </label><label for="Price " >Price:</label> <br />
  <h2> {props.id} </h2><input type="text" id="Name" placeholder={props.name} /> <input type="text" id="Quality 1" placeholder={props.desc} /> <input type="text" id="Quality 2" placeholder={props.pic} /> <input type="text" id="Price" placeholder={props.price}/><br />
  </div>
)
const Admin2Add = () =>(
  <div className ='Admin2'>
    <button type="button" style={{float: "left"}} > EDIT </button>
    <button type="button" style={{float: "right"}}>ADD</button> <br />

  </div>

)



const Footer = () =>(
  <div className ='Admin2'>
    <h2></h2>
  </div>

)

const Admin3Row = (props) => (
  <div className = 'Admin2' >
     <button type="button" style={{float: "right"}}>DELETE</button> <br />
  <label for="Name" style={{marginRight:"30px"}}>Vendor:</label> <label for="Quality 1" style={{marginRight:"30px"}} >Latitude: </label> <label for="Quality 2">Longitude:</label><label for="Price " style={{marginLeft:73}}>CartID:</label> <br />
  <h2> {props.message} </h2><input type="text" id="Name" placeholder={props.vid} /> <input type="text" id="Quality 1" placeholder={props.lat}/> <input type="text" id="Quality 2" placeholder={props.long} /> <input type="text" id="Price" placeholder={props.time} /><br />
  </div>
)

 function DropDown () {
    var coll = document.getElementsByClassName("collapsible");
    var i;
    
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }
    } 


    





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
   padding:'0rem 1rem'
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





    export {Loginbox,Footer, Header, Admin1,LogsRow,LogsHead, Admin2, Admin2Row, GMap, Admin3Row, Admin2Add}