const mongoose = require("mongoose")


const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        required:[true, "Name is required!"],
        minLength: [3, "Name must be at least 3 chars"],
        maxLength: [100000000, "Name can't be that long"]
    },

    price: {
        type: Number,
        required: [true, "Author is required"]
    },

    description: {
        type: String,
        required: [true, "Description is required!"],
        maxLength: [1000000, "Exceeded max number of characters for description"]
    }


}, {timestamps:true})


const Product = mongoose.model("Product", ProductSchema );

module.exports = Product;
