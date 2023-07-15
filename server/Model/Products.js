const mongoose=require("mongoose");

const products=new mongoose.Schema({
    name:String,
    price:Number,
    disc:String,
    img:String
})
const ProductData = mongoose.model("Product", products);
module.exports={ProductData}