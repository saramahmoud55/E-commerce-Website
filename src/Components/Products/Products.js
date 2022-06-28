import React, { Fragment, useEffect, useState } from 'react'
import "../Products/Products.css";
import { Link, useLocation } from 'react-router-dom';
export default function Products({loading,filteredProduct}) {
   
    // useEffect(() => {
    //     console.log("state: ", state)
    //     if (state) {
    //         filterProduct(state)
    //     }
    //     else {
    //         setFilter(data);
    //     }
    // }, [data])

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
    
    const ShowProducts = () => {
        return (
            <>
                {filteredProduct.map((Product) => {
                    return (
                        <Fragment key={Product.id}>
                            <div className=' col-md-3 col-sm-6  productitem d-flex  justify-content-center mb-3' >
                                <div className="card  text-center p-4 w-100"  >
                                    <img src={Product.image} className="card-img-top" alt={Product.title} height="250px" />
                                    <div className="card-body">
                                        <h5 className="card-title mb-0">{Product.title.substring(0, 12)}</h5>
                                        <p className="card-text lead fw-bold">${Product.price}</p>
                                        <Link to={`/products/${Product.id}`} className="btn btn-outline-dark">Buy Now</Link>
                                    </div>
                                </div>
                            </div>
                        </Fragment>
                    )
                })}
            </>
        )
    }
    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="row justify-content-center">
                        {loading ? <Loading /> : <ShowProducts />}
                    </div>
                </div>
            </div>


        </div>
    )

}