const instance=require("../config/razorpayInstance")
const crypto =require("crypto")
const Payment=require("../models/Payment")
require("dotenv").config();


exports.checkout=async(req,res)=>{

    const options={
        amount:req.body.amount*1000,
        currency:"INR"

    };
    const order=await instance.orders.create(options);
    res.status(200).json({
        success:true,
        data:order,
    });

};


exports.paymentVerification =async(req,res)=>{
    const {razorpay_order_id,razorpay_payment_id,razorpay_signature}=req.body;


    const body=razorpay_order_id + "|" + razorpay_payment_id;

    const generatedSignature=crypto
       .createHmac("sha256",process.env.key_secret)
       .update(body.toString())
       .digest("hex");


       const isAuthentic=generatedSignature===razorpay_signature

       if(isAuthentic){

        // store in database
        await Payment.create({
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
        });

        res.redirect(
            `http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`
        )

       }else {
        res.status(400).json({
          success: false,
        });
      }

}
