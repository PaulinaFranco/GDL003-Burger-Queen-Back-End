module.exports = (app) => {
    const foods = require('../controllers/food.controller.js');

    // Create a new Food
    app.post('/foods', foods.create);

    // Retrieve all Foods
    app.get('/foods', foods.findAll);

    // Retrieve a single Food with foodId
    app.get('/foods/:foodId', foods.findOne);

    // Update a Food with foodId
    app.put('/foods/:foodId', foods.update);

    // Delete a Food with foodId
    app.delete('/foods/:foodId', foods.delete);
}