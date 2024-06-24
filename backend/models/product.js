const mongoose = require("mongoose");
const { type } = require("os");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter name "],
    trim: true
  },
  price: {
    type: Number,
    required: [true, "Please enter price"]
  },
  description: {
    type: String,
    required: [true, "Please enter a description"]
  },
  images: 
    {
      public_id: {
        type: String,
        required: true
      },
      url: {
        type: String,
        required: true
      },
    },
  
  quantity : {
    type: Number , 
    required : true 
  } , 
  createdAt : {
    type : Date , 
    default : Date.now
  }
});


module.exports = mongoose.model("Product" , productSchema)