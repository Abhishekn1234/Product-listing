const express=require("express");
const Listing=require("../models/Listing");
const router=express.Router();

router.get('/listings',async(req,res)=>{
    try{
          const sub=await Listing.find();
          res.json(sub);
          console.log("Fetched successfully");
    }catch(error){
        console.log(error);
    }
})
router.post('/listing', async (req, res) => {
    try {
        const { subcategory, productName } = req.body;

        const sub = new Listing({
            subcategory,
            productName
        });

        const s = await sub.save();
        console.log(s);
        res.json(s);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports=router;