const mongoose = require('mongoose');

const FoodSchema = mongoose.Schema({
    food: String,
    price: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Food', FoodSchema);