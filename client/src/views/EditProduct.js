import { useHistory } from 'react-router-dom';
import axios from 'axios';
import React, {useEffect, useState} from 'react';

import ProductForm from '../components/ProductForm';
import DeleteButton from '../components/DeleteButton';


const EditProduct = (props) => {

    // USO DE useHistory
    let history = useHistory();

    const {productId} = props.match.params;
    const [loaded, setLoaded] = useState(false);
    
    // initialProduct para rellenar
    const initialProduct = {
        productName: "",
        price: 0,
        description: ""
    }

    // STATE
    const [product, setProduct] = useState(initialProduct);



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

    // Para renderizar y obtener getProductById al momento de cargar
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
                {loaded && (
                <div>
                    <ProductForm initialProduct={product} onSubmitProp={updateProduct} />
                </div>
                )}
            <div>
                <DeleteButton productId={product._id} successCallBack={() => props.history.push("/")}>Delete</DeleteButton>
            </div>

        </div>
    )

}

export default EditProduct;
