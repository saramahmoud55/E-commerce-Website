import React from 'react';
import contentImage from '../../images/main-slide-img-3.png';
import './Content.css';
import men from '../../images/Men.jpeg';
import Women from '../../images/Women.jpg';
import jewelery from '../../images/Pinterest.jpg';
import jeweleryvedio from '../../images/vedios/Pinterest.gif'
import electronics from '../../images/electroics.jpg';
import menVedio from '../../images/vedios/men.gif';
import electronicVedio from '../../images/vedios/electronics.gif';
import womenVedio from '../../images/vedios/Women.gif'
import { useNavigate } from 'react-router-dom';


export default function Content() {
    const navigate = useNavigate();


    return (
        <section className="about" >
            <div className="card-container " >
                <div className='row carddiv'>

                    <div className="col-3  cards" >

                        <img src={men} className="card-img-top" onClick={() => navigate('/products', { state: "men's clothing" })} alt="..."
                            onMouseOver={e => e.currentTarget.src = menVedio} onMouseOut={e => e.currentTarget.src = men}
                        />
                        <h2 className='cardtitle' >Men's Clothing</h2>
                    </div>
                    <div className="col-3 cards" >
                        <img src={Women} className="card-img-top" onClick={() => navigate('/products', { state: "women's clothing" })} alt="..."
                            onMouseOver={e => e.currentTarget.src = womenVedio} onMouseOut={e => e.currentTarget.src = Women}
                        />
                        <h2 className='cardtitle'>Women's Clothing</h2>


                    </div>
                    <div className="col-3 cards" >
                        <img src={jewelery} className="card-img-top " onClick={() => navigate('/products', { state: "jewelery" })} alt="..."
                            onMouseOver={e => e.currentTarget.src = jeweleryvedio} onMouseOut={e => e.currentTarget.src = jewelery}
                        />
                        <h2 className='cardtitle'>Jewelery</h2>
                    </div>
                    <div className="col-3 cards">
                        <img src={electronics} className="card-img-top" onClick={() => navigate('/products', { state: "electronics" })} alt="..."
                            onMouseOver={e => e.currentTarget.src = electronicVedio} onMouseOut={e => e.currentTarget.src = electronics}
                        />
                        <h2 className='cardtitle'>Electronics</h2>

                    </div>

                </div>
                <div className="row aboutContent">
                    <div className="col-md-8 col-sm-8  " >
                        <div className="about-info ">

                            <h1>Red Carpet</h1>
                            <p>
                                GORGEOUS FASHION COLLECTION FOR THE AWESOME 2017 SUMMER SEASON OF THE CANNES FESTIVAL
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 about-image ">
                        <div >
                            <img src={contentImage} className="img-responsive" alt="contentImage" />
                        </div>
                    </div>
                </div>
              
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#212529" fill-opacity="1" d="M0,96L80,85.3C160,75,320,53,480,69.3C640,85,800,139,960,138.7C1120,139,1280,85,1360,58.7L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>        </section>
    )
}
