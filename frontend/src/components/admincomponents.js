import React from 'react';
import './admincomponents.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps'
import{adminData} from "../data/adminData"


 


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
    <br />
    
    <br />
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
  <label for="Name">Vendor:</label> <label for="Quality 1">Latitude: </label> <label for="Quality 2">Longitude:</label><label for="Price " style={{marginLeft:73}}>CartID:</label> <br />
  <h2> {props.message} </h2><input type="text" id="Name" /> <input type="text" id="Quality 1" /> <input type="text" id="Quality 2" /> <input type="text" id="Price" /><br />
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

    function Map () {
      return(
        
      <GoogleMap defaultZoom = {10} defaultCenter= {{lat:47.6, lng:-122.3}} />
      
      );
    }

    const WrappedMap = withScriptjs(withGoogleMap(Map));



    export {Loginbox,Footer, Header, Admin1,LogsRow,LogsHead, Admin2, Admin2Row, WrappedMap, Admin3Row, Admin2Add}