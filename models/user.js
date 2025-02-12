const mongoose = require("mongoose");
require("dotenv").config(); 
mongoose.connect(process.env.MONGODB_URI, { 
}).then(() => console.log("Connected to MongoDB Atlas"))
  .catch(err => console.error("MongoDB connection error:", err));
  console.log(process.env.MONGODB_URI); 

const userSchema=mongoose.Schema({
    name:String,
    email:String,
    image:String,
    contact:Number,
    gender:String,
    age:Number
})
module.exports=mongoose.model("user",userSchema);
