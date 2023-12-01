import React from "react";
import "./nav.css"

function Nav(){
    return (
      
    <nav class="navbar container">
        <a href="#" class="logo"><img src="./images/logo.png"></img> </a>

        <input type="checkbox" id="toggler"/>
        <label for="toggler">
            <i class="fa fa-bars"></i>
        </label>
        <div class="menu">
            <ul class="list">
                <li><a href="#"> Home</a></li>
                <li><a href="#">Movie</a></li>
                <li><a href="#">Web serise</a></li>
                <li><a href="#">Tv show</a></li>
                <li><a><button>sign in</button></a></li>
            </ul>
        </div>
        
    </nav>
    
        
        );
}



export default Nav;