
//======================= CUSTOMER LANDING PAGE =====================
   //--- React import
      import React from 'react';
      import {Link} from 'react-router-dom';

   //--- CSS
      import './Customer.css';

   //--- Component import
      import CustNav from './components/CustomerNav.js';
   //--- BootStrap import
      import 'bootstrap/dist/css/bootstrap.min.css';
      import { Button,Container,Row,Col,Navbar, Nav, Form, FormControl } from 'react-bootstrap';

   //--- Google-maps-react import
      import GMap from './components/GoogleMaps';

//===================================================================

class CustomerLanding extends React.Component {
   render(){
      return(
         <Container>
            <div className="custHome">  
                  <CustNav/>
                  <GMap />
                  <Row>
                     <Col> Column 1 of 2</Col>
                     <Col> Column 2 of 2</Col>
                  </Row>
            </div>
         </Container>
      )
   }
}
export default CustomerLanding;






