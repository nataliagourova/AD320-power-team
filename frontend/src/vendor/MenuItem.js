import React from 'react';
import './MenuItem.css';
import samplePic from '../assets/m1.jpg';

function MenuItem(props) {
   return(
      <div className="Menu-Item">
         <table className="Table">
            <tr>
               <td className ="td1"><input type="checkbox" defaultChecked={props.hotdog.available}/></td>
               <td className ="td2">
                  {/* ================ Name ============ */}
                     <h3 style={{textDecoration: !props.hotdog.available && "line-through", color: !props.hotdog.available && "#808080"}}>
                        {props.hotdog.name}
                     </h3>
                  {/* ================ desc ============ */}
                     <p style={{textDecoration: !props.hotdog.available && "line-through",color: !props.hotdog.available && "#808080"}}>
                        {props.hotdog.desc}
                     </p>   
                  {/* ================ price ============ */}
                     <p style={{textDecoration: !props.hotdog.available && "line-through",color: !props.hotdog.available && "#808080"}}>
                        {props.hotdog.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}
                     </p> 
               </td>
               <td className = "td3">
                  {/* ================ picture ============ */}
                     <img src={samplePic} alt="menuPic"/>   
               </td>
            </tr>
         </table>
            

         
            
         
         
         

      </div>
   );
}

export default MenuItem;