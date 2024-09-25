import React from 'react'
function FunctionProps(props) {
  const fruits = ["Apple","Mango","Banana","Cherry"]
    return (
      <>
      {
      fruits.map((fruit) => (
        <div key={fruit}>
          {fruit}
        </div>
      ))
      }
      {/* <div>
         <h1>{props.name}</h1>
         {props.name.map(a =>
         <h1>{a}</h1> */}
   
        </>
    );
  }
 
export default FunctionProps;