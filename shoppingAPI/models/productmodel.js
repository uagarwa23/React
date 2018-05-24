let mongoose = require("mongoose")

let productSchema = mongoose.Schema({
    name: String,
    price: Number
})

module.exports = mongoose.model("cln_products", productSchema);