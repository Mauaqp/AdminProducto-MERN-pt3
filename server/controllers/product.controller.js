const {Product} = require('../models/product.model');
const {response} = require("express");

//Crear producto
module.exports.createProduct = (request, response) => {

    // request.body is form body
    const { productName, price, description } = request.body;
  
    Product.create({
      productName,
      price,
      description,
    })
    .then((product) => response.json(product))
    .catch((err) => response.json(err));
  }

  // Encontrar TODOS los productos
  module.exports.findAllProducts = (request, response) => {
    Product.find()
    .then(products => response.json(products))
    .catch(err => response.json(err))
  }
  
  // Encontrar producto por ID
  module.exports.findById = (request, response) => {
    Product.findById(request.params.id)
    .then(product => response.json(product))
    .catch(err => response.json(err))
  }
  
  // UPDATE product por ID
  module.exports.updateProduct = (request, response) => {
    Product.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
      .then(updatedProduct => response.json(updatedProduct))
      .catch(err => response.json(err))
  }
  
  // DELETE
  module.exports.deleteProduct = (request, response) => {
    Product.findOneAndDelete({ _id: request.params.id })
      .then(deleteConfirmation => response.json(deleteConfirmation))
      .catch(err => response.json(err))
  }