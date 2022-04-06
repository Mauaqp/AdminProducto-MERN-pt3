import React, { useEffect, useState } from "react";
import axios from "axios";

import ProductForm from "../components/ProductForm";
import ProductsList from "../components/ProductsList";

const Main = () => {

  const [loaded, setLoaded] = useState(true);
  const [products, setProducts] = useState([]);

  //initialProduct que se envía a ProductForm
  const initialProduct = {
    productName: "",
    price: 0,
    description: ""
}

  useEffect(() => {
    axios.get("http://localhost:8000/products/").then((res) => {
      setProducts(res.data);
      setLoaded(true);
    });
  }, [products]);

  // const removeFromDom = (productId) => {
  //   setProducts(products.filter((product) => product._id != productId));
  // };

  const createProduct = async (product) => {
    axios
      .post("http://localhost:8000/product/new", product)
      .then(
        setProducts(product => [...products, product]),
        setLoaded(false)
      )
  }

  return (
    <div>
      {loaded && (

        <div>
          <h1>Product Manager</h1>
          <ProductForm initialProduct={initialProduct} onSubmitProp={createProduct}/>
          <hr />
          <ProductsList />
        </div>

      )}
    </div>
  );
};

export default Main;
