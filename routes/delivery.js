const express=require("express");
const Delivery=require("../models/delivery");
const router=express.Router();


//REST 
//GET POST FOR GENERAL
router.route("")
.get(async (req,res)=>
{
    console.log("GET ALL");
    try{
        const deliveries=await Delivery.find();
        res.json(deliveries)
    }
    catch(err){
        res.status(500).json({error:err.message})
    }
})
.post(async (req,res)=>
{
    console.log("Post or add specific record");
        const delivery=new Delivery(
            {
                productName:req.body.productName,
                deliveryPlace:req.body.deliveryPlace
            }
        );
        try{
            const newDelivery=await delivery.save();
            res.status(201).json(newDelivery);
        }
        catch(err)
        {
            // 400 is for bad data 
            res.status(400).json({error:err.message});
        }
        
        
    

    
})
// GET PATCH DELETE FOR SPECIFICs
// before that we are going to create middleware as all require user from id 
// middleware
async function getDelivery(req,res,next)
{
    try{
        const delivery=await Delivery.findById(req.params.id);
        // this is how pass something to next function
        if(delivery===null)
        {
            return res.status(404).json({message:"Delivery Not Found"});
        }
        else
        {
            res.delivery=delivery;
        }
        next();
    }
    catch(err)
    {
        // return json object with status is more appropriate
        return res.status(500).json({message:err.message});
        //console.error("Get Delivery error"+err.message);


    }
}
router.route("/:id")
.get(getDelivery,(req,res)=>
{
    res.json(res.delivery);
    //
    console.log("GET specific record");
    
})
.patch(getDelivery,async (req,res)=>
{
    res.delivery.productName= req.body.productName;
    res.delivery.deliveryPlace= req.body.deliveryPlace;
    // observe we use patch instead of put 
    try{
        await res.delivery.save();
        res.json({message:"Delivery Updated"});
    }
    catch(err){
        res.status(400).json({message:err.message});
    }
    console.log("update specific record");
    
})
.delete(getDelivery,async (req,res)=>
{
    try{
        await res.delivery.remove();
        res.json({message:"Deleted Delivery"})
    }
    catch(err)
    {
        res.status(500).json({message:err.message})

    }
    console.log("Delete specific record");
    
})
module.exports=router;

// we are going to create model/delivery.js