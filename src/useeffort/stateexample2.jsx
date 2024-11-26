import {useState,useEffect} from "react";
function StateExample2(){
      const[user,setUser]=useState('React')
      useEffect(()=>{setTimeout(()=>{
        console.log("hello")
      },3000)})
      const changeName=()=>{
        setUser('JS')
      
 }
    
      
      return(
        <>
        
        <h3>{user}</h3>
        <button onClick ={changeName}>changename</button>
        </>
      )
}
export default StateExample2