import { useHistory } from 'react-router-dom';
import axios from 'axios';
import React, {useEffect, useState} from 'react';

import ProductForm from '../components/ProductForm';


const EditProduct = (props) => {

    // USO DE useHistory
    let history = useHistory();

    const {productId} = props.match.params;
    const [loaded, setLoaded] = useState(false);
    
    // STATE
    const [product, setProduct] = useState("");


    // GET PRODUCT
    const getProductById = async (productId) =>{
        try {
            const response = await axios.get(`http://localhost:8000/product/${productId}`)
            console.log("getProductById Funciona");
            console.log("Response: ", response);
            setProduct(response.data)
            setLoaded(true)
        } catch (error) {
            console.log("Error", {error});
        }
    }

    useEffect (() => {
        getProductById(productId)
    }, []);

    // UPDATE
    const updateProduct = async (product) =>{
        setLoaded(false);
        axios.put(`http://localhost:8000/${productId}/edit`, product)
        .then ((res) => console.log(res))
        .then(() => history.push("/"));
    };

    return (
        <div>
            <h1>Update</h1>
                <div>
                    {console.log(product.price)}
                    {console.log(product.productName)}
                </div>
                {loaded && (
                <div>
                    <ProductForm initialName={product.productName} initialPrice= {product.price} initialDescription={product.description} onSubmitProp={updateProduct} />
                </div>
                )}


        </div>
    )

}

export default EditProduct;
