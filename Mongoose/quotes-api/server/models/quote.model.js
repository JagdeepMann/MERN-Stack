const mongoose=require('mongoose');

const QuoteSchema=new mongoose.Schema({
    content: {
        type:String,
        required: [true, "Content is required"],
        minLength: [3, "Quote must be 3 char long"],
        maxLength: [1000, "its supposed to be a Quote"]

    },
    author: {
        type:String
        // can add validations like above
    },

    quotedOn: {
        type: Date
    }


}, {timestamps:true}) //auto generates created_at and updated_at fields

const Quote = mongoose.model("Quote", QuoteSchema); // Quote is the name of the model

module.exports=Quote; 