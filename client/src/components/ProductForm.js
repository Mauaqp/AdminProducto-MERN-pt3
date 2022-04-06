import React, { useState, useEffect } from "react";

import axios from 'axios';

const ProductForm = (props) => {

  const {initialName, initialPrice, initialDescription, onSubmitProp} = props;

  const [productName, setProductName] = useState(initialName);
  const [price, setPrice] = useState(initialPrice);
  const [description, setDescription] = useState(initialDescription);

  const [product, setProduct] = useState([]);

  const handleCreateProduct = (e) => {
    e.preventDefault();
    onSubmitProp(product);
    setProduct();
  }

  const handleOnChange = (e) => {
    setProduct ({
      ...product,
      [e.target.name] : e.target.value
    })
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmitProp({productName, price, description});
    setProductName("")
    setPrice("")
    setDescription("")
  }

  return (
    <>
        <div>
            <form onSubmit={handleCreateProduct} >
                <div>
                    <label htmlFor="productName">Product Name</label>
                    <input onChange={handleOnChange} type="text" name='productName' value={product.productName} />
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input onChange={handleOnChange} type="number" name='price' value={product.price} />
                </div>
                <div>
                    <label  htmlFor="description">Description</label>
                    <input onChange={handleOnChange} type="text" name='description' value={product.description} />
                </div>
                <button type='submit' className='btn btn-success'>Submit</button>
            </form>
        </div>
    </>
  );
}

export default ProductForm;