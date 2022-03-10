import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import '../Products/Products.css';
import { addItem } from '../../Redux/CartReducer';
export default function Product() {
  
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id} `);
      setProduct(await response.json());
      setLoading(false);
    }
    getProduct();
  }, [id]);
  {/**Loading */}
  const Loading = () => {
    return (
      <>
        <div className="loading">
          <span className="one"></span>
          <span className="two"></span>
          <span className="three"></span>
          <span className="four"></span>
        </div>
      </>
    )
  }
    {/**Show Products */}
    
  const ShowProducts = () => {
    const navigate=useNavigate();
    const dispatch = useDispatch();
    
    const addItemToCart =(product)=>{
      dispatch(addItem(product));
    }
    
    return (
      <>
      <div className='col-md-6'>
        <img src={product.image} alt={product.title} height="400px" width="400px"/>
      </div>
      <div className='col-md-6'>
        <h4 className='text-uppercase text-black-50'>{product.category}</h4>
        <h1 className='display-5'>{product.title}</h1>
        <p className='lead fw-bolder'>
          Rating {product.rating && product.rating.rate}
          <i className='fa fa-star'></i>
        </p>
        <h3 className='display-6 fw-bold my-4'>${product.price} </h3>
        <p className='lead '>{product.description}</p>
        <button className='btn btn-outline-dark px-4 py-2' onClick={()=>addItemToCart(product)}>Add to Cart</button>
        <button className='btn btn-dark ms-2 px-3 py-2' onClick={()=>navigate('/cart')}>Go to Cart</button>
      </div>
      </>
    )
  }

  return (
    <div>


      <div className="container my-5 py-5">
        <div className="row py-4">

          <div className="row justify-content-center">
            {loading ? <Loading /> : <ShowProducts />}
          </div>
        </div>
      </div>
    </div>
  )
}
 