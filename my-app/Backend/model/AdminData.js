const mongoose=require('mongoose');

const AdminData= new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        total_items:{
            type:Number,
            default: 0
        },
        total_items_delivered:{
            type:Number,
            default: 0
        },
        items_delivered:{
            type:Array,
            default: 0
        },
        total_price:{
            type:Number,
            default: 0
        }
    }
);

module.exports=mongoose.model("AdminData", AdminData);