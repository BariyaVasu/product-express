const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    id:{type: Number, required: true},
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String },
    inStock: { type: Boolean, default: false },
});

module.exports = mongoose.model("Prodcut", productSchema);