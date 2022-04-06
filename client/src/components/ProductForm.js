import React, { useState, useEffect } from "react";
import axios from 'axios';

const ProductForm = (props) => {

  const {initialName, initialPrice, initialDescription, onSubmitProp} = props;

  const [productName, setProductName] = useState(initialName);
  const [price, setPrice] = useState(initialPrice);
  const [description, setDescription] = useState(initialDescription);

  // const [product, setProduct] = useState(props);


  // SE PUEDE REEMPLAZAR POR onSubmitHandler, pero necesita [product,SetProduct]
  // const handleCreateProduct = (e) => {
  //   e.preventDefault();
  //   onSubmitProp(product);
  //   setProduct();
  // }

  // const handleOnChange = (e) => {
  //   setProduct ({
  //     ...product,
  //     [e.target.name] : e.target.value
  //   })
  // }

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
            <form onSubmit={onSubmitHandler} >
                <div>
                    <label htmlFor="productName">Product Name</label>
                    <input onChange={(e) => setProductName(e.target.value)} type="text" name='productName' value={productName} />
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input onChange={(e) => setPrice(e.target.value)} type="number" name='price' value={price} />
                </div>
                <div>
                    <label  htmlFor="description">Description</label>
                    <input onChange={(e) => setDescription(e.target.value)} type="text" name='description' value={description} />
                </div>
                <button type='submit' className='btn btn-success'>Submit</button>
            </form>
        </div>
    </>
  );
}

export default ProductForm;