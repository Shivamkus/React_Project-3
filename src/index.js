import React  from "react";
import ReactDOM  from "react-dom";
import App from "./App";
import Nav from "./Nav";
import Header from "./Header";
import Scard from "./Scard";
import Card from "./Card";
console.log(Scard[0].description);

ReactDOM.render(
<>

<App/>
</>,

    document.getElementById("root")
    
);
ReactDOM.render(
    <>
    <Header
    image="./images/header-image.png" 
    headerInfo="Unlimited Movies, TV Show and More."   
    headerPera="Watch anywhere cancel any time."
    p="Ready to watch? Enter your Email to create or restart your membership."
    ></Header>,
    </>,
    document.getElementById("header")
);

ReactDOM.render(
    <>
    <Nav></Nav>
    </>,
    document.getElementById("nav")
);

