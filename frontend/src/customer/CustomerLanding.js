
//======================= CUSTOMER LANDING PAGE =====================
   //--- React import
      import React from 'react';
      import {Link} from 'react-router-dom';

   //--- CSS
      import './Customer.css';

   //--- Image import
      import Logo from '../assets/hotdogcart.png';

   //--- BootStrap import
      import 'bootstrap/dist/css/bootstrap.min.css';
      import { Button,Container,Row,Col,Navbar, Nav } from 'react-bootstrap';

   //--- Google-maps-react import
      import GMap from './components/GoogleMaps';

//===================================================================

class CustomerLanding extends React.Component {
   render(){
      return(
         // <div style={ styleCustLanding }>
         <Container>
            <div className="custHome">
                           
               <header> 
                  <Navbar>
                     <img src={Logo} style={{width: '5%'}} alt = "Logo"/>
                     <Nav>
                        Search
                     </Nav>
                     <Link className="pic" to = "/customer/search">
                        Search Bar
                     </Link>
                  </Navbar>
                  <GMap />

                  <Row>
                     <Col> Column 1 of 2</Col>
                     <Col> Column 2 of 2</Col>
                  </Row>
               </header>

            </div>
            
         </Container>
      )
   }
}
export default CustomerLanding;






