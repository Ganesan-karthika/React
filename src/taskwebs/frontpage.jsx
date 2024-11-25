import React from "react";
import Card from "./card";
import "./card.css";
import watch4 from "./images/watch4.jpg";
import watch5 from "./images/watch5.jpg";
import watch6 from "./images/watch6.jpg";
import watch7 from "./images/watch7.jpg";
import watch8 from "./images/watch8.jpeg";
import watch9 from "./images/watch9.jpg";

function MainPage(){
      return(
        <>
        <h1 className="heading">Watch Gallery</h1>
        <div class="cardcomp">
        <Card img={watch4}/>
        <Card img={watch5}/>
        <Card img={watch6}/>
        <Card img={watch7}/>
        <Card img={watch8}/>
        <Card img={watch9}/>
        </div>
        </>
      )
}
export default MainPage