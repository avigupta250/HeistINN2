const express=require("express");

const {checkout} =require("../controllers/paymentController");

const router=express.Router();


router.post("/checkout",checkout)


// export default router;

module.exports=router