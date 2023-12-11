const instance=require("../config/razorpayInstance")
const crypto =require("crypto")
const Payment=require("../models/Payment")
require("dotenv").config();


exports.checkout=async(req,res)=>{

    const options={
        amount:Number(req.body.price*100),
        currency:"INR"

    };
    const order=await instance.orders.create(options);
    res.status(200).json({
        success:true,
        order,
    });

};
exports.paymentVerification = async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

        console.log(razorpay_order_id);

        const body = razorpay_order_id + "|" + razorpay_payment_id;

        const generatedSignature = crypto
            .createHmac("sha256","KVje2gAK4efUQLSyaoRQ3OvK")
            .update(body.toString())
            .digest("hex");

        const isAuthentic = generatedSignature === razorpay_signature;

        if (isAuthentic) {
            // Store in the database (assuming Payment is a model with a create method)
            await Payment.create({
                razorpay_order_id,
                razorpay_payment_id,
                razorpay_signature,
            });

            // Redirect to success page
            res.redirect(
                `http://localhost:1234/paymentsuccess?reference=${razorpay_payment_id}`
            );
        } else {
            // Signature verification failed
            console.error("Signature verification failed");
            res.status(400).json({
                success: false,
                error: "Signature verification failed",
            });
        }
    } catch (error) {
        console.error("Error in payment verification:", error);
        res.status(500).json({
            success: false,
            error: "Internal Server Error",
        });
    }
};