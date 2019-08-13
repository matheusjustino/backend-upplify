const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    cuisine: {
        type: String,
        required: true
    },
    count : {
        type: Number
    }
});

module.exports = model('Product', ProductSchema);