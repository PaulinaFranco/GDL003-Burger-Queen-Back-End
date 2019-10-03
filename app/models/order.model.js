const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    title: String,
    content: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Order', OrderSchema);