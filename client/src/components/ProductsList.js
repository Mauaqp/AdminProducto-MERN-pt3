import React, { useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import DeleteButton from './DeleteButton';

const ProductsList = () => {

    const [products, setProducts] = useState([]);

    // GET ALL PRODUCTS
    const getAllProducts = async () => {
        const response = await axios.get("http://localhost:8000/products")
        setProducts(response.data);
    }

    useEffect(() => {
        getAllProducts();
    }, []);

    // post Delete
    const successCallBack = (productId) => {
        setProducts(products.filter(product => product._id !== productId))
    }
    

    return (

        <div>
            <h3>All Products:</h3>
            {
            products.map((product,index) =>
                <div key={index}>
                    <Link to={`/${product._id}`}><p>{product.productName}</p></Link>
                    <DeleteButton productId={product._id} successCallBack={() => successCallBack(product._id)}></DeleteButton>
                </div>
                )
            }
        </div>
    )


}

export default ProductsList;