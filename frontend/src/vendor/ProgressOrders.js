import React from 'react';
import './Vendor1.css';
import Home from '../assets/hotdogcart.png';
import BottomMenu from './BottomMenu';
import {Link} from 'react-router-dom';


function ProgressOrders () {
   return(
      <div className="App1">
         <h1>What's Cooking</h1>
         <Link className="pic" to = "/customer/search">
            <img src={Home} alt = "home"/>   
         </Link>
         <p>No orders right now <br />  Your grill is getting cold</p>
         <BottomMenu />

      </div>
   )
}

export default ProgressOrders;