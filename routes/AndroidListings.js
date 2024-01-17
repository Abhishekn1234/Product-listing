const express=require("express");
const Listing=require("../models/Android and ios");
const router=express.Router();

router.get('/listingphones',async(req,res)=>{
    try{
          const sub=await Listing.find();
          res.json(sub);
          console.log("Fetched successfully");
    }catch(error){
        console.log(error);
    }
})
module.exports=router;