import React from 'react';
import './Vendor1.css';
import Home from '../assets/hotdogcart.png';
import acceptedOrders from '../data/acceptedOrders';
import BottomMenu from './BottomMenu';
import {Link} from 'react-router-dom';
import WhatsAccepted from './WhatsAccepted';

class ProgressOrders extends React.Component {

   render() {

   const OrdersComponents = acceptedOrders.map( 
      (accepted) => {
         return(<WhatsAccepted
                  key={accepted.id}
                  order = {accepted} 
               />
         )
      }
   )
   return(
      <div className="ProgressOrders-Container">
         <h1>What's Cooking</h1>
         <Link className="ProgressOrders-MainPic" to = "/customer/search">
            <img src={Home} alt = "home"/>   
         </Link>
         <p>No orders right now <br />  Your grill is getting cold</p>
         <h1>OR</h1>
         {OrdersComponents}
         <BottomMenu />

      </div>
   )
}
}

export default ProgressOrders;