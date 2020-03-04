import React from 'react';
import './admincomponents.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

 


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

const Admin1 = () => (
    <div className ='Admin1'> 
    <Link to = "/Admin1Customer">Customer Action</Link>
    <Link to = "/Admin1Vendor">Vendor Action</Link>
    <Link to = "/Admin1Admin">Admin Action</Link>
    <br />
    <br />
    <Link to = "/Admin1Promotion">Sales Promotions</Link>
    <Link to = "/Admin1Equipment" p style={{margin: 35}}> Equipment Uptake</Link>
    <br />
    <br />
    <hr />
    <br />
    <div className = 'right'>
    <h2>LABOR COST:</h2> <p p style={{margin: 54}}>4765.35$</p>
    <br />
    <br />
    <h2>PACKAGING COST:</h2>  <p>4765.35$</p>
    <br />
    <br />
    <h2>BENEFITS:</h2>  <p p style={{margin: 95}}>4765.35$</p>
    </div>  
    <h2>NET PROFIT:</h2>  <p style={{margin: 32}}>    4765.35$</p>        
    <br />
    <br />
    <h2>GROSS PROFIT:</h2>  <p>4765.35$</p>  
    <br />
    <br />
    <h2>MONTHLY:</h2>  <p style={{margin: 47}}>4765.35$</p>    
    </div>
);

const LogsRow = () => (
    <div className="Admin1LOGS" >
        <h2  style={{marginLeft: 47}}>3:46 PM 2/27/20</h2>  <p>Value</p>    <p>Value</p> <p>Value</p>  <p> Value </p> <p>Value</p> <p>Value</p> <h2 style={{marginLeft: 47}}>Value</h2>
    </div>
)

const LogsHead = (props) => (
    <div className="Admin1LOGS" style={{marginTop:20}}>
    <h2>{props.message}</h2><hr />
    <div  style={{marginLeft: 47}} >
    <h2 style={{marginRight: 55}}>Time</h2> <h2>{props.message2}</h2> <h2>{props.message2}</h2> <h2>{props.message2}</h2> <h2>{props.message2}</h2> <h2>{props.message2}</h2> <h2>{props.message2}</h2> <h2>Total</h2>
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

const Admin2Row = () => (
  <div className = 'Admin1' style={{marginTop:0}}>
  <input type="text" id="username" /> <input type="text" id="username" /> <input type="text" id="username" /><br />
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



    export {Loginbox, Header, Admin1,LogsRow,LogsHead, Admin2, Admin2Row}