const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productName: {
        type: String,
        require : true
    },
    price : {
        type: Number,
        require: true
    },
    description : {type: String}
}, {timestamps: true});

module.exports.Product = mongoose.model('Product', ProductSchema);