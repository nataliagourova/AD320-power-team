import React from 'react';
import './VendorOrders.css';
import MenuItem1 from './MenuItem1';
import VendorInfo from './VendorInfo';
import menuData1 from "../data/menuData1.js"

import logo from '../assets/hotdogcart.png'



class VendorOrders extends React.Component {
   render() {
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
            <div className = "VendorOrder-Bg2">
               <div className="Vendor2"> 
                  <header className="V-header2">
                     <img src={logo} alt="logo" />
                     <h1>New Orders</h1>
                     <VendorInfo vendorCartId={this.props.vendorCartId} />
                  </header>
                  
                  
                  {menuItemComponents}         
               </div>
            </div>
         );
   }
}

export default VendorOrders;




