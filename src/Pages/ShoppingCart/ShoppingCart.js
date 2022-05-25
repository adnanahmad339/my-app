import React from 'react';
import './ShoppingCart.css'
// import { Add, Remove } from "@material-ui/icons";
import Announcement from "../../Components/Announcement/Announcement";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";

import { useSelector } from 'react-redux';

const Cart = () => {
  const cart = useSelector((state) => state.cart)


  return (
    <div className="containerCart" >
      <Announcement />
      <Navbar />


      <div className="wrapperCart">
        <div className="titleCart">YOUR BAG</div>
        <div className="topCart">
          <div className="topButtonCart">CONTINUE SHOPPING</div>
          <div className="tppTextsCart">
            <div className='topTextCart'>Shopping Bag({cart.quantity})</div>
            <div className='topTextCart'>Your Wishlist (0)</div>
          </div>
          <div className='topButtonCart' type="filled">CHECKOUT NOW</div>
        </div>

        <div className="bottomCart">
          <div className='infoCart'>
            {cart.products.map((product) => (
              <div className='productCart'>
                <div className='productDetailCart'>
                  < img src={product.img} className='imageCart' />
                  <div className='detailsCart'>
                    <div className='productNameCart'>
                      <b>Product:</b>{product.title}
                    </div>
                    <div className='productIDCart'>
                      <b>ID:</b> {product._id}
                    </div>
                    <div className='productColorCart' color={product.color} />
                    <div className="productSizeCrat">
                      <b>Size:</b> {product.size}
                    </div>
                  </div>
                </div>
                <div className="priceDetailCart">
                  <div className='productAmountContainerCart'>
                    <div className='addCart' Add />
                    <div className='productAmountCart'>{product.quantity}</div>
                    <div className='removeCart' Remove />
                  </div>
                  <div className='productPriceCart'>{product.price * product.quantity}</div>
                </div>
              </div>




            ))}
            <hr className='hrCart' />

          </div>

          <div className='summaryCart'>
            <div className='summaryTitleCart'>ORDER SUMMARY</div>
            <div className='summaryItemCart'>
              <div className='summaryItemTextCart'>Subtotal</div>
              <div className='summaryItemPriceCart'>${cart.total}</div>
            </div>
            <div className='summaryItemCart'>
              <div className='summaryItemTextCart'>Estimated Shipping</div>
              <div className='summaryItemPriceCart'>$ 5.90</div>
            </div>
            <div className='summaryItemCart'>
              <div className='summaryItemTextCart'>Shipping Discount</div>
              <div className='summaryItemPriceCart'>$ -5.90</div>
            </div>
            <div className='summaryItemCart' type="total">
              <div className='summaryItemTextCart'>Total</div>
              <div className='summaryItemPriceCart'>{cart.total}</div>
            </div>
            <button className='buttonCart'>CHECKOUT NOW</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;