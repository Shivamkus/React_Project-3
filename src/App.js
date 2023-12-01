import React from "react";
import Card from "./Card";
import Scard from "./Scard";

function App(){



    return<div className="App-box " style={{display:'flex',  justifyContent:'space-around'}}>
  
   {Scard.map(function ncard(value , index){
    console.log(index);
    return(
    <Card 
    key = {value.id}
    image={value.image}
    info={value.info}
    title={value.title}
   description={value.description}
 
 />
    );
   
   })}
    </div>  
    
    
    
}

export default App;