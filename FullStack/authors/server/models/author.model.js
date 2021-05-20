const mongoose = require("mongoose")


const AuthorSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true, "Name is required!"],
        minLength: [3, "Name must be at least 3 chars"],
        maxLength: [100000000, "Name can't be that long"]
    }

}, {timestamps:true})


const Author = mongoose.model("Author", AuthorSchema );

module.exports = Author;
