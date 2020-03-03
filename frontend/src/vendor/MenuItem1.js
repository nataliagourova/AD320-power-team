import React from 'react';
import MenuItemButton from './MenuItemButton';
import CustomerDetails from './CustomerDetails';
import './MenuItem1.css';

class MenuItem1 extends React.Component {
  
  render() {
      var hotdog = this.props.hotdog;
      return(
         <div className="Menu-Item">
            <table className="Table">
               <tbody>
                  <tr>
                     <td className ="td1"><input type="checkbox" defaultChecked={hotdog.available}/></td>
                     <td className ="td2">
                  {/* ================ Name ============ */}
                     <h3 style={{textDecoration: !hotdog.available && "line-through", color: !hotdog.available && "#808080"}}>
                        {hotdog.name}
                     </h3>
                  {/* ================ desc ============ */}
                     <p style={{textDecoration: !hotdog.available && "line-through",color: !hotdog.available && "#808080"}}>
                        {hotdog.desc}
                     </p>   
                  {/* ================ price ============ */}
                     <p style={{textDecoration: !hotdog.available && "line-through",color: !hotdog.available && "#808080"}}>
                        {hotdog.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}
                     </p> 
               </td>
               <td className = "td3">
                  {/* ================ picture ============ */}
                     <img src={hotdog.pic} alt="menuPic"/> 
               </td>
				 <td>
					<CustomerDetails customerId={hotdog.customerId} />
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