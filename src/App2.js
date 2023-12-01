import React from "react";
import Header from "./Header";
import Card from "./Card";
import Scard from "./Scard";


const favSerise = 'netfilix';
if(favSerise === "netfilix"){
  return(
    <Card
    key = {value.id}
    image={value.image}
    info={value.info}
    title={value.title}
   description={value.description}
 
 />
    );
}else{

}

function App(){

//   function ncard(value, index, arr){
//     return (
//         <Card
//         image={value.image}
//         info={value.info}
//         title={value.title}
//        description={value.description}
     
//      />
//     );

//   }

    return <div className="App-box " style={{display:'flex',flexDirection:'column', justifyContent:'space-around'}}>
    
    <div className="App-box " style={{display:'flex', justifyContent:'space-around'}}>
  
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
    </div>
    
    
    
}

export default App;