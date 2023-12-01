import React from "react";
import "./index.css"
function Card(props){

  return (
    <div className="cards">
    <div className="card">
       
    <div class="row">
    <div className="col-sm-3">
      <div className="card">
        <div className="card-body">
        <div className="card-image">
     <img src={props.image} alt="this is an image" target="blank"></img>
     </div>
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <a href="#" className="btn btn-primary">watch now</a>
        </div>
      </div>
    </div>
  </div>
    </div>
  </div>
  );
  

}
export default Card;


