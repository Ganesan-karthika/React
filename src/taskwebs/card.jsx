import React from "react";
import "./card.css";
function Card(props){
    console.log(props);
    return(
      <>
      <div className="card">
        <img src={props.img} alt="" />
        <h3>Watch collection</h3>
      </div>
      </>
    )
}
export default Card
