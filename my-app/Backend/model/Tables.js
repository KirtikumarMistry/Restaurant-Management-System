const mongoose=require('mongoose');

const Tables=new  mongoose.Schema(
    {
        number:{
            type:Number,
            required:true
        },
        status:{
            type:Boolean,
            default:false
        }
    }
);

module.exports=mongoose.model("Tables", Tables)