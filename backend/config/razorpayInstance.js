
const Razorpay=require("razorpay");
require("dotenv").config();


const instance=new Razorpay({
    key_id:process.env.key_id,
    key_secret:process.env.key_secret
})

module.exports=instance