const Food = require('../models/food.model.js');

// Create and Save a new Food
exports.create = (req, res) => {
    // Validate request
    if(!req.body) {
        return res.status(400).send({
            message: "Food content can not be empty"
        });
    }

    // Create a Food
    const food = new Food({
        food: req.body.food || "Untitled Food", 
        price: req.body.price
    });

    // Save Food in the database
    food.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Food."
        });
    });
    
};






// Retrieve and return all foods from the database.
exports.findAll = (req, res) => {
    Food.find()
    .then(foods => {
        res.send(foods);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving food."
        });
    });
};



// Find a single food with a foodId
exports.findOne = (req, res) => {
    Food.findById(req.params.foodId)
    .then(food => {
        if(!food) {
            return res.status(404).send({
                message: "Food not found with id " + req.params.foodId
            });            
        }
        res.send(food);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Food not found with id " + req.params.foodId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving Food with id " + req.params.foodId
        });
    });
};



// Update a food identified by the foodId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Food content can not be empty"
        });
    }

    // Find food and update it with the request body
    Food.findByIdAndUpdate(req.params.foodId, {
        title: req.body.title || "Untitled Food",
        content: req.body.content
    }, {new: true})
    .then(food => {
        if(!food) {
            return res.status(404).send({
                message: "Food not found with id " + req.params.foodId
            });
        }
        res.send(food);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Food not found with id " + req.params.foodId
            });                
        }
        return res.status(500).send({
            message: "Error updating food with id " + req.params.foodId
        });
    });
};


// Delete a food with the specified foodId in the request
exports.delete = (req, res) => {
    Food.findByIdAndRemove(req.params.foodId)
    .then(food => {
        if(!food) {
            return res.status(404).send({
                message: "Food not found with id " + req.params.foodId
            });
        }
        res.send({message: "Food deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Food not found with id " + req.params.foodId
            });                
        }
        return res.status(500).send({
            message: "Could not delete food with id " + req.params.foodId
        });
    });
};