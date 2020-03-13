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

class CheckOut extends Component {
   render(){
      return(
         <div className="checkOut">
            <Container>
               <CustNav/>
               <h1>CheckOut Page</h1>
            </Container>
         </div>

      )
   }
}

export default CheckOut;