//======================= CUSTOMER LANDING PAGE =====================
   //--- React import
   import React, {Component} from 'react';
   //--- CSS
      import './Customer.css';

   //--- Component import
      import CustNav from './components/CustomerNav.js';
      import menuData from '../data/menuData';
      import MenuItem from '../vendor/MenuItem'

   //--- BootStrap import
      import 'bootstrap/dist/css/bootstrap.min.css';
      import { Container,Row,Col} from 'react-bootstrap';
//===================================================================

class CustMenuOrder extends Component {
   
   render(){

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
         <div className="custMenuOrder">
            <Container>
               <CustNav/>
               <h1>Menu or Order Page</h1>
               {menuItemComponents}
            </Container>

         </div>

      )
   }
}

export default CustMenuOrder;