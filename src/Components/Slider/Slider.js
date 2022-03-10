import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Image1 from "../../images/slide1.jpg";
import Image2 from "../../images/slide2.jpg";
import Image3 from "../../images/slide3.jpg";
import Image4 from "../../images/slide4.jpg";
import './slidercss.css';
import { useNavigate } from "react-router-dom";

const ImageSlideshow = () => {
const navigate=useNavigate();
  return (
    <>
      <div className="slide-container">
        <Fade>
          {/**slide1 */}
          <div className="each-fade">
            <div className="carousel-item active slide">
              <div className="carousel-caption d-none d-md-block content1 ">
                
                <h1 >The Beaty festival</h1>
                <h3>Skincare ,Makeup & more...</h3>
                <button className="btn1" onClick={()=>navigate('/products')} >Shop Now<span></span><span></span><span></span><span></span></button>
               
              </div>
              <img className="img" src={Image1} alt="Shopping " />
            </div>
          </div>
          {/**slide2 */}

          <div className="each-fade">
            <div className="carousel-item active slide">
              <div className="carousel-caption d-none d-md-block content2">
                <h1>Choose a gift</h1>
                <h2>that says it all<span><i className="fa-solid fa-heart"></i></span></h2>
                <h3>Show...Don't tell</h3>
                <button className="btn2" onClick={()=>navigate('/products')}>Shop Now<span></span><span></span><span></span><span></span></button>

              </div>
              <img className="img" src={Image2} alt="Shopping " />
            </div>
          </div>
          {/**slide3 */}

          <div className="each-fade">
            <div className="carousel-item active slide">
              <div className="carousel-caption d-none d-md-block content3">
                <h1>Free Shipping Nationwide</h1>
                <h4>on RED Carpet Express products <span><i className="fa-solid fa-truck"></i></span></h4>
                <button className="btn3" onClick={()=>navigate('/products')}>Shop Now<span></span><span></span><span></span><span></span></button>

              </div>
              <img className="img" src={Image3} alt="Shopping " />
            </div>
          </div>
          {/**slide4 */}

          <div className="each-fade">
            <div className="carousel-item active slide">
              <div className="carousel-caption d-none d-md-block content4">
                <h1>NOW OR NEVER</h1>
                <h2>Up to 80%</h2>
                <button className="btn4" onClick={()=>navigate('/products')}>Shop Now<span></span><span></span><span></span><span></span></button>

              </div>
              <img className="img" src={Image4} alt="Shopping " />
            </div>
          </div>

        </Fade>
      </div>
    </>
  );
};
export default ImageSlideshow;