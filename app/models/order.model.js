const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    order: String,
    content: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Order', OrderSchema);