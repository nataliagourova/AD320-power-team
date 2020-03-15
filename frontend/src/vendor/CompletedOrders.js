import React from 'react';
import './VendorOrders.css';
import closedOrders from '../data/closedOrders';
import OrdersDisplay from './OrdersDisplay';
import Home from '../assets/hotdogcart.png';
import BottomMenu from './BottomMenu';
import {Link} from 'react-router-dom';


class CompletedOrders extends React.Component {

      render() {
         const OrdersComponents = closedOrders.map( 
            (petya) => {
               return(<OrdersDisplay
                        key={petya.id}
                        order = {petya} 
                     />
               )
            }
         )
   return(
      <div className="CompletedOrders-Container" >
         
         <div className="CompletedOrders-Header">
            <Link className="CompletedOrders-HeaderPic" to = "/customer/search">
               <img src={Home} alt = "home"/>   
            </Link>
            <h1>Completed Orders</h1>
         </div>
         {OrdersComponents}
         <BottomMenu />

      </div>
   )
}
}

export default CompletedOrders;