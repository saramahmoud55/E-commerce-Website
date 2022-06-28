import React from 'react'
import { deleteFromFav } from '../../Redux/CartReducer';
import {useDispatch } from 'react-redux'
import './../Cart/cart.css'
export default function Favorite({cart}) {
    const dispatch = useDispatch();

    const deletedFavItem = (favItem) => {
        dispatch(deleteFromFav(favItem))
      }
  return (
    <div>
        <div>
              <div className="col-12 "  >
                <h3 className="text=center">Favorite Items</h3>
                <hr />
              </div>

              <div className='titles'>
                <h3 className='product-title'>Product</h3>
                <h3 className='quantity'>Rate</h3>
                <h3 className='total'>Price</h3>
              </div>
              <div>
                {cart.favedItems?.map(favItem => (
                  <div className='cart-item' key={favItem.id}>
                    <div className='cart-product'>
                      <img src={favItem.image} alt={favItem.title} />
                      <div>
                        <h3>{favItem.title}</h3>
                        <p>{favItem.category}</p>
                        <button onClick={() => deletedFavItem(favItem)}>Romove</button>

                      </div>
                    </div>
                    <div className='cart-product-price'>
                    {Array.from(Array(5).keys()).map((index) =>
                                index < favItem.rating.rate ? (
                                    <span className="fa fa-star checked"></span>
                                ) : (
                                    <span className="fa-regular fa-star"></span>
                                )
                            )}
                    </div>

                    <div className='cart-product-total-price'>
                      ${favItem.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>
    </div>
  )
}
