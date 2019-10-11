var cors = require('cors')
module.exports = (app) => {
    const products = require('../controllers/product.controller.js/index.js');
    app.use(cors({credentials: true,}));
    // Create a new Product
    app.post('/', products.create);

    // Retrieve all Products
    app.get('/products', products.findAll);

    // Retrieve a single product with productId
    app.get('/products/:productId', products.findOne);

    // Update a product with productId
    app.put('/products/:productId', products.update);

    // Delete a product with productId
    app.delete('/products/:productId', products.delete);
}