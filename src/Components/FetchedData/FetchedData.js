import React, { useEffect, useState } from 'react'
import Filters from '../Filters/Filters';
import Products from '../Products/Products';

export default function FetchedData() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    let componentMounted = true;

    const getProducts = async () => {
        setLoading(true);
        const res = await fetch("https://fakestoreapi.com/products");
        const response = await res.json();
        if (componentMounted) {
            setData(response);
            setLoading(false);
        }
    }
    useEffect(() => {

        getProducts();

    }
        , [])
  return (
    <div>
        <Filters   data={data} loading={loading}/>
    </div>
  )
}
