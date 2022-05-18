import React from 'react';
import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Link,useNavigate } from 'react-router-dom';
import Cartimage from '../../images/Cart.png';
import {deleteItem,decreaseItem,addItem,clearCart,getTotal} from '../../Redux/CartReducer';
import './cart.css';
export default function Cart() {
  const navigate = useNavigate();
  
  const cart = useSelector((state) => state);
const cartTotal =useSelector((state)=>state.cartTotalQuantity)
  const dispatch = useDispatch();
useEffect(()=>{dispatch(getTotal())},[cart]);
  const deleteItemToCart =(cartItem)=>{
    dispatch(deleteItem(cartItem));
  }
  const decreaseItemFromCart=(cartItem)=>{
    dispatch(decreaseItem(cartItem))
  }
  const increaseItemForCart=(cartItem)=>{
    dispatch(addItem(cartItem));
  }
  const clear =()=>{
    dispatch(clearCart());
  }
  return (

    <div className='cart-container'>
      {cart.cartItems.length === 0 ? (
        <div className='cart-empty'>
      <img src={Cartimage} alt="cartimage" className='Cartimage' />
          <div className='start-shopping'>
            <Link to="/products" >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
              </svg>
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (<div>
        <div className='titles'>
          <h3 className='product-title'>Product</h3>
          <h3 className='price'>Price</h3>
          <h3 className='quantity'>Quantity</h3>
          <h3 className='total'>Total</h3>

        </div>
        <div>
          {cart.cartItems?.map(cartItem => (
            <div className='cart-item' key={cartItem.id}>
              <div className='cart-product'>
                <img src={cartItem.image} alt={cartItem.title} />
                <div>
                  <h3>{cartItem.title}</h3>
                  <p>{cartItem.category}</p>
                  <button onClick={()=>deleteItemToCart(cartItem)}>Romove</button>
                </div>
              </div>
              <div className='cart-product-price'>${cartItem.price}</div>
              <div className='cart-product-quantity'>
                <button onClick={()=>decreaseItemFromCart(cartItem)}>-</button>
                <div className='count'>{cartItem.cartTotalQuantity}</div>
                <button onClick={()=>increaseItemForCart(cartItem)}>+</button>

              </div>
              <div className='cart-product-total-price'>
                ${cartItem.price * cartItem.cartTotalQuantity}
              </div>
            </div>
          ))}
        </div>
        <div className='cart-summary'>
          <button className='clear-cart' onClick={()=>clear()}>Clear Cart</button>
          <div className='cart-checkout'>
            <div className='subtotal'>
              <span>Subtotal</span>
              <span className='amount'>${cartTotal}</span>
            </div>
            <p>Taxes and shipping calculated at checkout</p>
            <button onClick={()=>navigate('/login')}>Check out</button>
            <div className='continue-shopping'>
              <Link to="/products" >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                </svg>
                <span>continue Shopping</span>
              </Link>
            </div>

          </div>
        </div>
      </div>
      )}
    </div>

  )
}
