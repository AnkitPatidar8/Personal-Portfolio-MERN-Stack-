const mongoose =require("mongoose")

const ContectSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  }, 
  email:{
    type:String,
    required:true
  }, 
  subject:{
    type:String,
    required:true
  }, 
  mobile:{
    type:Number,
    required:false
  }, 
   message:{
    type:String,
    required:true
  }, 
  createdAt: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Contact', ContectSchema)