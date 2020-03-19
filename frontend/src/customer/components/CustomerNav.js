
//======================= CUSTOMER NAV =====================
//--- React import
import React from 'react';

//--- CSS
   import '../Customer.css';

//--- Image import
   import Logo from '../../assets/hotdogcart.png';

//--- BootStrap import
   import 'bootstrap/dist/css/bootstrap.min.css';
   import { Button,Container,Navbar, Nav, Form, FormControl } from 'react-bootstrap';

//===================================================================
class CustomerNav extends React.Component {
render(){
   const styleh5 = {
      color: '#f4511e',
      margin: '5px 0 0 0',
      fontWeight: 'bold'
   }
   return(
      <Container>
         <div>  
            <Navbar collapseOnSelect expand="md" bg="light" variant="light" collapseOnSelect expand="lg">
            
               <Navbar.Brand style={{textAlign:"center"}} href="/">
                  <img src={Logo} 
                        width='50' 
                        alt = "Logo"
                        className="d-inline-block align-top" 
                        />
                  <h5 style={styleh5}>Wheelie Wiener</h5>
               </Navbar.Brand>

               <Navbar.Toggle aria-controls="responsive-navbar-nav"/>

               <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto">
                     <Nav.Link href="/customer">            Map      </Nav.Link>
                     <Nav.Link href="/customer/menuOrder">  Order    </Nav.Link>
                     <Nav.Link href="/customer/menuOrder">  Menu     </Nav.Link>
                     <Nav.Link href="/customer/checkout">   Checkout </Nav.Link>
                  </Nav>

                  <Form inline>
                     <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                     <Button variant="outline-primary" >Search</Button>
                  </Form>
               </Navbar.Collapse>               
            </Navbar>

         </div>
         
      </Container>
   )
}
}
export default CustomerNav;






