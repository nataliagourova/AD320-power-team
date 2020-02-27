import React from 'react';
import './VendorOrders.css';
import MenuItem from './MenuItem';
import menuData from "../data/menuData"

import logo from '../assets/hotdogcart.png'



function VendorOrders () {
   //Arrow fucntion version
  //jokesData.map(joke => <Joke question={joke.question} punchLine={joke.punchLine} />)

                        // mapping essentially extracting json data and
                        // place it in the array
  const menuItemComponents = menuData.map( 
      (hotdog) => {
         return(<MenuItem
                  key={hotdog.id} //always needed else there will be console log error.. has to be unique
                  hotdog = {hotdog} 
               />
         )
      }
   ) 
   return(
      //vendor will show the paper list
      <div className = "Bg">
         <div className="Vendor"> 
            <header className="V-header">
               <img src={logo} alt="logo" />
               <h1>New Orders</h1>
            </header>
            
            
            {menuItemComponents}         
         </div>
      </div>
   )
}

export default VendorOrders;




