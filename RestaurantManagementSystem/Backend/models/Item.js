const mongoose=require("mongoose");

const Item= new mongoose.Schema(
    {
        Name:{
            type:String,
            require:true,
        },
        Description:{
            type:String,
            require:true,
        },
        Price:{
            type:Number,
            require:true,
        },
        Image:{
            type:String,
            require:true,
        },
    }
)

module.exports=mongoose.model("Item", Item);