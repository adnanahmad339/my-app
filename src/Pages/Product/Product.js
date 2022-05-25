import React, { useState } from 'react';
import { addProduct } from '../../redux/cartRedux'
import { Add,  Remove } from "@material-ui/icons";
import Announcement from "../../Components/Announcement/Announcement";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Newsletter from "../../Components/NewLetter/Newsletter";
import './Product.css'

import { useDispatch } from 'react-redux'

 
const Product = () => {
 
 const[product,setProduct]=useState({});

 const[quantity,setQuantity]=useState(1);

const dispatch=useDispatch(); 

 const handleQuantity=(type)=>{
   if(type==="dec")
{quantity>1 && setQuantity(quantity-1)
  }
  else
  {
  setQuantity(quantity+1)
  }
 } 

const handleClick=()=>{
  dispatch(addProduct({...product,quantity}) )
}

  return (
    <div className="containerProductPage">
  


      <Announcement />

      <Navbar quantity={quantity}/>
      <div className="wrapperProductPage">
        <div className="imageContainerProductPage">
          <img src="https://i.ibb.co/S6qMxwr/jean.jpg" className='imageProductPage' />
        </div>
        <div className="infoProductPage">
          <div className='titleProductPage'>Denim Jumpsuit</div>
          <div className='descProductPage'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </div>
          <div className='priceProductpPage'>$ 20</div>
          <div className='filterContainerProductPage'>
            <div className='filterProductPage' Filter>
              <div className="filterTitleProductPage">Color</div>
              <div className='filterColorProductPage' color="black" />
              <div className='filterColorProductPage' color="darkblue" />
              <div className='filterColorProductPage' color="gray" />
            </div>
            <div className="filterProductPage">
              <div className='filterTitleProductPage'>Size</div>
              <div className='filterSizeProductPage'>
                <select>
                  <option className='filterTitleProductPage'>XS</option>
                  <option className='filterTitleProductPage'>S</option>
                  <option className='filterTitleProductPage'>M</option>
                  <option className='filterTitleProductPage'>L</option>
                  <option className='filterTitleProductPage'>XL</option>

                </select>
              </div>
            </div>
          </div>
          <div className='addContainerProductPage'>
            <div className='amountContainerProductPage'>
              <Remove onClick={()=>handleQuantity("dec")} />
              <div className='amountProductPage'>{quantity}</div>
              <Add onClick={()=>handleQuantity("inc")} />
            </div>
            <button className='buttonProductPage' style={{ width: "300px", marginRight:"-30px", textAlign: "center", fontSize: "10px" }} onClick={handleClick} >ADD TO CART</button>
          </div>
        </div>

      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Product;