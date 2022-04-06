const ProductController = require('../controllers/product.controller');

module.exports = function (app) {
  // GET : findAllProducts y findByID
    app.get('/products', ProductController.findAllProducts);
    app.get('/product/:id', ProductController.findById);
  // POST : Create product
    app.post('/product/new', ProductController.createProduct);
    
  // PUT : Update product
    app.put('/:id/edit', ProductController.updateProduct);
  
  // DELETE : Delete product
    app.delete("/product/:id/delete", ProductController.deleteProduct);
  }