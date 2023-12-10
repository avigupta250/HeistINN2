const mongoose=require("mongoose");


const userSchema=new mongoose.Schema({
 
    firstName:{
        type:String,
        require:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    address:{
        street:{
            type:String
        },
        city:{
            type:String
        },
        pincode:{
            type:Number
        }
    },
   
})