import React from "react";
import "./index.css";


function Header(props){
  return (
    <header className="header">
      <img src={props.image} alt="this is an image"/>

      <div className="header-info ">
        <div className="header-infos">
        <h1>{props.headerInfo}</h1>
        <h3>{props.headerPera}</h3>
        <p>{props.p}</p>
        <input type="email" placeholder="enter your email account" name="email"></input>
        <button><a href="#">Get Started </a></button>
        </div>
      </div>




  
  </header>
  );
}
export default Header;