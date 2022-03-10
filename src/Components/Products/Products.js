import React, { useEffect, useState } from 'react'
import "../Products/Products.css";
import { Link, useLocation } from 'react-router-dom';
export default function Products() {
    const{state} = useLocation();
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;
    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const res = await fetch("https://fakestoreapi.com/products");
            const response = await res.json();
            if (componentMounted) {
                setData(response);
                setLoading(false);
            }
            return () => {
                componentMounted = false;
            }

        }
        getProducts();
    }
        , [])

        useEffect(() => {
            console.log("state: ", state)
            if (state) {
                filterProduct(state)
            }
            else {
                setFilter(data);
            }
        }, [data])
    

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
    const filterProduct = (choosedCatergory) => {
        const updatedList = data.filter((item) => item.category === choosedCatergory);
        console.log("updatedList: ", updatedList)
        setFilter(updatedList);
    }
    const ShowProducts = () => {
        return (
            <>
               <div className="col-12 mb-5" >
                        <h1 className="display-6 fw-bolder text=center">Latest Products</h1>
                        <hr />
                    </div>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>All</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")} >Men</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>Women</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>Jewelery</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>Electronics</button>

                </div>
                {filter.map((Product) => {
                    return (
                        <React.Fragment key={Product.id}>
                            <div className='col-md-3 mb-3 productitem'>
                                <div className="card h-100 text-center p-4"  >
                                    <img src={Product.image} className="card-img-top" alt={Product.title} height="250px" />
                                    <div className="card-body">
                                        <h5 className="card-title mb-0">{Product.title.substring(0, 12)}</h5>
                                        <p className="card-text lead fw-bold">${Product.price}</p>
                                        <Link to={`/products/${Product.id}`}  className="btn btn-outline-dark">Buy Now</Link>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
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