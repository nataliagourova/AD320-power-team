import React from 'react';
import './VendorOrders.css';
import MenuItem1 from './MenuItem1';
import menuData1 from "../data/menuData1.js"

import logo from '../assets/hotdogcart.png'



function VendorOrders () {
   //Arrow function version
  //jokesData.map(joke => <Joke question={joke.question} punchLine={joke.punchLine} />)

                        // mapping essentially extracting json data and
                        // place it in the array
  const menuItemComponents = menuData1.map( 
      (hotdog) => {
         return(<MenuItem1
                  key={hotdog.id} //always needed, otherwise there will be a console log error,it  has to be unique
                  hotdog = {hotdog} 
               />
         )
      }
   ) 
   return(
      //vendor will show the paper list
      <div className = "VendorOrder-Bg">
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




