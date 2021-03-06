import React, { useState } from "react";
import { useSelector } from 'react-redux';
import './Navbar.css';
import logo from '../../images/logo.png';
import Login from "../Login/Login";
import { Link, useNavigate } from "react-router-dom";


export default function Navbar() {
  const cartAmount = useSelector((state) => state.cartTotalAmount);
  const favItemAmount = useSelector((state) => state.favQuantity);
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  const toggleModal = () => {
    setModal(!modal);
  };


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">

        <Link to="/" className="navbar-brand"><img src={logo} alt="logo" className="logo" /><span>Red Carpet</span></Link>

        <div className="collapse navbar-collapse" >
          <ul className="navbar-nav me-auto mb-2 mx-auto mb-lg-0">
            <li className="nav-item">

              <Link to="/" className="nav-link active">Home</Link>
            </li>
            <li className="nav-item">
              <Link to='/products' className="nav-link ">Products</Link>

            </li>
            <li className="nav-item">
              <Link to="/aboutus" className="nav-link ">About us</Link>
            </li>
          </ul>
          <ul className="navbar-nav  mx-40 mb-2 mb-lg-0">
            <li className="nav-item">
              <span onClick={toggleModal} className="btnlogin">Login</span>
              {modal && <Login handleClose={toggleModal} />}
            </li>
            <li className="nav-item">

              <div class="cart" onClick={() => navigate('/cart')} >
                <span class="count">{cartAmount}</span>
                <i className="fa-solid fa-cart-plus"></i>
              </div>
            </li>
            <li>
              <div class="cart" onClick={() => navigate('/cart')} >
                <span class="count">{favItemAmount}</span>
                <i class="fa-solid fa-heart"></i>
              </div>
            </li>
 

          </ul>
        </div>
      </div>
    </nav>



  )
}

