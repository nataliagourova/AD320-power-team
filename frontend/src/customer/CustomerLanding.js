
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

   //--- Google-maps-react import
      import GMap from './components/GoogleMaps';

//===================================================================

class CustomerLanding extends Component {
   render(){
      return(
         <div className="custHome">  
         <Container>
            <CustNav/>
            <GMap />
            <Row>
               <Col> Column 1 of 2</Col>
               <Col> Column 2 of 2</Col>
            </Row>
         </Container>
         </div>
      )
   }
}
export default CustomerLanding;






