require("dotenv").config(); 
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI, { 
}).then(() => console.log("Connected to MongoDB Atlas"))
  .catch(err => console.error("MongoDB connection error:", err));
  // console.log(process.env.MONGODB_URI); 

const userSchema=mongoose.Schema({
    name:{
      type:String
    },
    email:{
      type:String,
    },
    image:{
      type:String,
    },
    contact:{
      type:Number,
    },
    gender:{
      type:String,
    },
    age:{
      type:Number,
    }
})
module.exports=mongoose.model("user",userSchema);
