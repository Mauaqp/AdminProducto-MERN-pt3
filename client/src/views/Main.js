import React, { useEffect, useState } from "react";
import axios from "axios";

import ProductForm from "../components/ProductForm";
import ProductsList from "../components/ProductsList";

const Main = () => {

  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

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
          <ProductForm onSubmitProp={createProduct}/>
          <hr />
          <ProductsList />
        </div>

      )}
    </div>
  );
};

export default Main;
