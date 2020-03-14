//======================= CUSTOMER LANDING PAGE =====================
   //--- React import
   import React, {Component} from 'react';
   //--- CSS
      import './Customer.css';

   //--- Component import
      import CustNav from './components/CustomerNav.js';
   //--- BootStrap import
      import 'bootstrap/dist/css/bootstrap.min.css';
      import { Container,Row,Col} from 'react-bootstrap';
//===================================================================

class CustMenuOrder extends Component {
   render(){
      return(
         <div className="custMenuOrder">
            <Container>
               <CustNav/>
               <h1>Menu or Order Page</h1>
            </Container>
         </div>

      )
   }
}

export default CustMenuOrder;