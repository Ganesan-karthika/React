import React, {  useState } from 'react';
import './navbar.css'
import { Link} from 'react-router-dom'
import { FaShoppingCart, FaUser } from "react-icons/fa";
import {FaShoppingcart} from "react-icons/fa"
 

const NavbarComponent = ({isAuthenticated}) => {
  
    const [menu,SetMenu]=useState("");
    
    const username = localStorage.getItem('username');
   
  return (
    <>
 {  isAuthenticated ? (<div className='nav_bar'>
    <div className="nav_container">
        <div className="nav_left">
           <div className='brand'>
           <div  >
         
           </div>
            <p className="name">TastyFoods</p>
            </div>
            <ul className="nav_menu">
                    <li onClick={()=>{SetMenu("shop")}}><Link style={{textDecoration:"none" ,color:'black'}}  
                    to={"about"}>About</Link> {menu==="shop"?<hr />:null} </li>
                    <li onClick={()=>{SetMenu("mens")}}><Link style={{textDecoration:"none",color:'black'}} 
                    to={"/south"}>SouthIndian</Link>{menu==="mens"?<hr />:null}</li>
                    <li onClick={()=>{SetMenu("womens")}}><Link style={{textDecoration:"none",color:'black'}} 
                    to={"/north"}>NorthIndian</Link> {menu==="womens"?<hr />:null} </li>
                    <li onClick={()=>{SetMenu("kids")}}><Link style={{textDecoration:"none",color:'black'}} 
                    to={"/chinese"}>Chinese</Link>  {menu==="kids"?<hr />:null}</li>  
                    <li onClick={()=>{SetMenu("content")}}><Link style={{textDecoration:"none",color:'black'}} 
                    to={"content"}>ContentUs</Link>  {menu==="kids"?<hr />:null}</li>                   
                                  
                 </ul>
           </div>
        <div className='right_nav'>
            <div className="user">
            <span><FaUser/></span>
              <p>{username}</p>
              
          
            </div>
          
           
        </div>
    </div>
    
    
    
    </div>): null}
    </>
  )
}

export default NavbarComponent;