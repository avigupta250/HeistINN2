const mongoose= require("mongoose");
require("dotenv").config();


const connectDB=()=>{
    mongoose.connect(process.env.MONGODB_URL,{
        // useNewUrlParser:true,
        // useUnifiedTopology:true
    }).then(()=>{
        console.log("DB Connect Successfully")
    }).catch((error)=>{
        console.log("Error in Connecting DB")
    })
}

        module.exports=connectDB;