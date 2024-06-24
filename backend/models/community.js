const mongoose = require ("mongoose");

const communitySchema = new mongoose.Schema({
  name :{
    type : String , 
    
  } , 
  contact :{
    type : String ,
  } ,
  content :{
    type: String ,
  } , 
  image :{
    type: String
  } , 
  createdAt : {
    type : Date , 
    default : Date.now
  }
});

module.exports = mongoose.model("community" , communitySchema)

