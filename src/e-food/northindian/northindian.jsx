import React, { useState, useEffect} from 'react';
import './northindian.css';
import { FaStar, FaRupeeSign } from 'react-icons/fa';
import foodData from '../southindian'; 


export const NorthIndian=()=>{
  const [productList, setProductList] = useState([]);
 
  useEffect(() => {
    const offerProducts = foodData.filter(item => item.category === 'north');
    console.log(offerProducts)
    setProductList(offerProducts);
  }, []);

  return(
    <div>
      <div className="head">
      
      <p>NorthIndian  Foods Collections</p>
      
      </div>
    <div className="product">
      {productList.map((item,index) => (
        <div className='cards' key={index}>
          <img src={item.image} alt={item.name} />
          <p className='Pname'>{item.name}</p>
          <span className='rating'>{item.ratings}<FaStar /><p> Ratings</p></span>
          <div className='Pr_price'>
            <p><span><FaRupeeSign/></span>{item.offerprice}</p>
           
            <s><span><FaRupeeSign/></span>{item.orginalPrize}</s>
          </div>
          <div className="cart">
            <button className='cart_btn' >Order Now</button>
          </div>
          </div>
      ))}
    </div>
  </div>
  )
}