import React from 'react';
import './VendorOrders.css';
import Home from '../assets/hotdogcart.png';

import {Link} from 'react-router-dom';


function CompletedOrders () {
   return(
      <div className="In-Progress">
         <h1>Completed Orders</h1>
         <Link className="pic" to = "/customer/search">
            <img src={Home} alt = "home"/>   
         </Link>

      </div>
   )
}

export default CompletedOrders;