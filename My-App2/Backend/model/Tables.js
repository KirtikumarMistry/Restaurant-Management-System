const mongoose=require('mongoose');

const Tables=new  mongoose.Schema(
    {
        Number:{
            type:String,
            required:true
        },
        Total_Revenue:{
            type:Number,
            default: 0
        },
        Status:{
            type:Boolean,
            default:false
        }
    }
);

module.exports=mongoose.model("Tables", Tables)