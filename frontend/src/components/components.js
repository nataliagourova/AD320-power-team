import React from 'react';
import man from './index.jpg';




const Header = (props) => (
  <div>
    <h1 className ='box1'>{props.message}</h1>
  
  </div>
  );

  const TextBox = (props) => (
    <div className ='box2'>
    <p>{props.message}</p>
    <a href= "https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5_%D0%BE_%D0%BD%D0%B5%D0%BE%D0%B1%D1%8A%D1%8F%D1%81%D0%BD%D0%B8%D0%BC%D0%BE%D0%BC_%D0%B1%D0%BB%D0%B0%D0%B3%D0%BE%D1%81%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%B8%D0%B8">LINAKGE</a>
    </div>
  );

  const Pic = () => (
<img src={man} class = 'pic' alt = 'hi-five'/>
  );

  const Button = () => (
    <button type="button" onClick={Click}>Magic Button</button> 
  );

function Click() {
  const a = new Date();
  console.log(a);

  window.alert(a);
}

 
  

  
  
  export { Header , TextBox , Pic, Button}
 