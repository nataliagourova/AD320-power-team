
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
      import { Button,Container,Row,Col,Navbar, Nav, Form, FormControl } from 'react-bootstrap';

   //--- Google-maps-react import
      import GMap from './components/GoogleMaps';

//===================================================================

class CustomerLanding extends React.Component {
   render(){
      return(
         <Container>
            <div className="custHome">  

                  <Navbar collapseOnSelect expand="md" bg="light" variant="light" collapseOnSelect expand="lg">
                  
                     <Navbar.Brand  href="/">
                        <img src={Logo} 
                             width='50' 
                             alt = "Logo"
                             className="d-inline-block align-top"></img>
                        <h5 className="wwText">Wheelie Wiener</h5>
                     </Navbar.Brand>

                     <Navbar.Toggle aria-controls="responsive-navbar-nav"/>

                     <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                           <Nav.Link href="/">                    Home  </Nav.Link>
                           <Nav.Link href="/customer/menuOrder">  Order </Nav.Link>
                           <Nav.Link href="/customer/menuOrder">  Menu  </Nav.Link>
                        </Nav>

                        <Form inline>
                           <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                           <Button variant="outline-primary" >Search</Button>
                        </Form>
                     </Navbar.Collapse>
                     

                  </Navbar>

                  <GMap />

                  <Row>
                     <Col> Column 1 of 2</Col>
                     <Col> Column 2 of 2</Col>
                  </Row>
               {/* </header> */}

            </div>
            
         </Container>
      )
   }
}
export default CustomerLanding;






