import React from "react";
import './Navbar.css';
import logo from '../../images/logo.png';
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    
    <Link to="/home" className="navbar-brand"><img src={logo} alt="logo" className="logo"/><span>Red Carpet</span></Link>
  
    <div className="collapse navbar-collapse" >
      <ul className="navbar-nav me-auto mb-2 mx-auto mb-lg-0">
        <li className="nav-item">
         
        <Link to="/home" className="nav-link active">Home</Link>
        </li>
        <li className="nav-item">
        <Link to='/products'  className="nav-link ">Products</Link>
          
        </li>
        <li className="nav-item">
        <Link to="/aboutus" className="nav-link ">About us</Link>
        </li>
      </ul>
      <ul className="navbar-nav  mx-40 mb-2 mb-lg-0">
 
        <li className="nav-item">
          
          <a className="nav-link" href="#"><span className="shoppingcart"><i className="fa-solid fa-cart-plus"><span className="cartCount">0</span></i></span></a>
        </li>
     
      </ul>
    </div>
  </div>
</nav>

      

)
}

