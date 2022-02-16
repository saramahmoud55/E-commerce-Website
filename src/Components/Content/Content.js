import React from 'react';
import contentImage from '../../images/shoes.jpg';
import './Content.css'
export default function Content() {
    return (
        <section className="about" >
          <div class="container" >
               <div class="row">
                   
                    <div className="col-md-8 col-sm-12 " >
                         <div className="about-info ">
                             
                              <div className="wow fadeInUp" >
                                   <h1>Red Carpet</h1>
                                   <p>
                                   GORGEOUS FASHION COLLECTION FOR THE AWESOME 2017 SUMMER SEASON OF THE CANNES FESTIVAL
                                   </p>
                              </div>
                         </div>
                    </div>
                    <div className="col-md-4 col-sm-12 about-image ">
                         <div >
                              <img src={contentImage} className="img-responsive" alt="contentImage"/>
                         </div>
                    </div>
               </div>
          </div>
     </section>
    )
}
