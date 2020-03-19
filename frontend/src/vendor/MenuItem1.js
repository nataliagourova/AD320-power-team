import React from 'react';
import MenuItemButton from './MenuItemButton';
import CustomerDetails from './CustomerDetails';
import './MenuItem1.css';

class MenuItem1 extends React.Component {
  
  render() {
      var hotdog = this.props.hotdog;
      return(
         <div className="Menu-Item1">
            <table className="Table1">
               <tbody>
                  <tr>
                     <td>
					      <CustomerDetails customerId={hotdog.customerId} />
				         </td>

                     <td className ="td21">
                  {/* ================ Name ============ */}
                     <h3 style={{textDecoration: !hotdog.available && "line-through", color: !hotdog.available && "#808080"}}>
                        {hotdog.name}
                     </h3>
  
                  {/* ================ price ============ */}
                     <p style={{textDecoration: !hotdog.available && "line-through",color: !hotdog.available && "#808080"}}>
                        {hotdog.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}
                     </p> 
               </td>
               <td className = "td31">
                  {/* ================ picture ============ */}
                     <img src={hotdog.pic} alt="menuPic"/> 
               </td>
			   
                     <td>
                        <MenuItemButton text="Accept" onClick={this.accept}/>
                        <MenuItemButton text="Reject" onClick={this.reject}/>
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      );
   }
   accept = () => {
      alert("ACCEPTED!!!!! " + this.props.hotdog.name + ":\n Please charge $" + this.props.hotdog.price);
   }
   reject = () => {
      alert("REJECTED!!!!!!!!!!! " + this.props.hotdog.name + "\n Hey, mark this as unavailable");
   }

}

export default MenuItem1;