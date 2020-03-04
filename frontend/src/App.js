import React from 'react';

import Landing   from  './Landing.js';
import Vendor    from  './vendor/Vendor.js';

import Vendor1   from  './vendor/Vendor1.js';


import Customer  from  './customer/Customer.js';
import Search    from  './customer/Search.js';
import ClickPin  from  './customer/ClickPin.js';
import MenuOrder from  './customer/CustMenuOrder.js';
import CheckOut  from  './customer/CheckOut.js';
import {Login, Admin1Page, Admin1Vendor, Admin1Admin, Admin1Customer, Admin1Equipment, Admin1Promotion, Admin2Page} from './admin/Admin';




//      {specific object import,___ ,___ }
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';


function App() {
  return (
    <Router>
      
        <Switch>

        <div>
          <Route path="/"    exact component = {Landing} className="App"  />
          <Route path="/admin"     component = {Login}    /> 
          <Route path="/vendor"    component = {Vendor}  className="App"  />
          
          <Route path="/customer"  exact    component = {Customer} className="App" />
          <Route path="/customer/search"    component = {Search}  className="App"/>
          <Route path="/customer/clickPin"  component = {ClickPin} className="App" />
          <Route path="/customer/menuOrder" component = {MenuOrder} className="App" />
          <Route path="/customer/checkout"  component = {CheckOut}  className="App"/>
         
          
          <Route path="/Admin1" component= {Admin1Page} />
          <Route path="/Admin1Vendor" component= {Admin1Vendor} />
          <Route path="/Admin1Admin" component= {Admin1Admin} />
          <Route path="/Admin1Customer" component= {Admin1Customer} />
          <Route path="/Admin1Equipment" component= {Admin1Equipment} />
          <Route path="/Admin1Promotion" component= {Admin1Promotion} />
          <Route path="/Admin2" component= {Admin2Page} />
          

          <Route path="/"    exact component = {Landing}  className="App" />
          <Route path="/admin"     component = {Admin}   className="App" /> 
          <Route path="/vendor"  exact  component = {Vendor} className="App"   />
          <Route path="/newOrders"   component = {Vendor1}  className="App"  />
          <Route path="/customer"  exact    component = {Customer} className="App" />
          <Route path="/customer/search"    component = {Search} className="App"/>
          <Route path="/customer/clickPin"  component = {ClickPin} className="App"/>
          <Route path="/customer/menuOrder" component = {MenuOrder} className="App"/>
          <Route path="/customer/checkout"  component = {CheckOut} className="App"/>
          </div>

        </Switch>      
      
    </Router>

  );
}
 
export default App;
