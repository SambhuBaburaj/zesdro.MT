const mongoose=require("mongoose");
const { ProductData } = require("./Products");

// user schema
const User_Schema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    isBlocked:Number,
    date:Date
  });
  const user_data = mongoose.model("user_data", User_Schema);



  const Cart_Schema=new mongoose.Schema({
  
    
      ItemId:{ type: mongoose.ObjectId, ref: ProductData },
      Quantity: { type: Number, default: 1 }
    
  
    })
    const CartData=mongoose.model("CartData",Cart_Schema)
    
    module.exports = {CartData,user_data}