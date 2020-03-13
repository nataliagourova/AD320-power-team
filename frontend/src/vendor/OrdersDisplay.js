import React from 'react';
import MenuItemButton from './MenuItemButton';
import CustomerDetails from './CustomerDetails';
import customerData from '../data/customerData';
import './OrdersDisplay.css';

class OrdersDisplay extends React.Component {
  
  render() {
      var order = this.props.order;

      return(
         <div className="nMenu-Item">
           <table >
               <tbody className="nTable">
                  <tr>
                  <td>
                        <CustomerDetails customerId={order.customerId} />   
                 </td>	
                  <td>
                     <h3>
                        {order.name}
                     </h3>
                  </td>  
                    <td className = "ntd3">
                    <p>
                            <img className="OrderDisplay-OrderPic" src={order.pic} alt="menuPic"/>                         
                    </p> 
                    </td>
                     <td className = "ntd4">
                        <p>
                           <MenuItemButton text="PAID" onClick={this.paid}/>
                        </p>
                     </td>
                  </tr>
               </tbody>
           </table>
         </div>
      );
   }
   paid = () => {
      const customerId = this.props.order.customerId;
      const orderName = this.props.order.name;
      var customer = customerData[this.props.order.customerId];
      const custName = customer.name;
      const alertString = "Customer " +custName+" id No. "+ customerId + " served\n" + " Order  of "+ orderName + " Paid and Closed";
      alert(alertString);
   }
}

export default OrdersDisplay;