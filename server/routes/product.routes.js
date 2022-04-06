const ProductController = require('../controllers/product.controller');

module.exports = function (app) {
  // GET : findAllProducts y findByID
    app.get('/products', ProductController.findAllProducts);
    app.get('/product/:id', ProductController.findById);
  // POST : Create product
    app.post('/product/new', ProductController.createProduct);
    
    app.put('/products/:id/edit', ProductController.updateProduct);
    app.delete("/products/:id/delete", ProductController.deleteProduct);
  }