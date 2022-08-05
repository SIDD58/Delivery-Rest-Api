const mongoose=require("mongoose");

const deliverySchema= new mongoose.Schema(
    {
        productName:{
            type:String,
            required:true

        },
        deliveryPlace:{
            type:String,
            required:true

        },
        deliveryDate:{
            type:Date,
            required:true,
            default:Date.now()+ 10 * 24 * 60 * 60 * 1000
        }

    }
);

module.exports=mongoose.model("Delivery",deliverySchema);