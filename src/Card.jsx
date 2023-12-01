// import React from "react";
// import "./index.css"
// function Card(props){

//   return (
//     <div className="cards row">
//     <div className="card ">
       
//        <div className="card-image">
//        <img src={props.image} alt="this is an image" target="blank"></img>
//        </div>
//        <div className="card info">
//         <h4>{props.info}</h4>
//        </div>
//        <div className="card-title"><h2>{props.title}</h2></div>
//        <div className="card-description"><h5>{props.description}</h5></div>
//        <button>watch now</button>
//     </div>
//   </div>



//   );
  

// }
// export default Card;


import React from "react";
import "./index.css"
function Card(props){

  return ([
   
    <div className="grand-parents">
    <div className="parents">

      <div className="child">
   <div className="img">
     <img src={props.image} alt="this is a image"></img>
   </div>
   <div className="info">
     <h2>{props.title}</h2>
   <h3>{props.description}</h3>
        <p>{props.info}</p>
   </div>
      </div>
      
</div>
</div>


   ] );
  

}
export default Card;


