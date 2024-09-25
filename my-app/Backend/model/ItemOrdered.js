const mongoose=require('mongoose');

const ItemOrderedSchema= new mongoose.Schema(
    {
        Table_number:{
            type:String,
            required:true
        },
        Item_name:{
            type:Array,
            required:true
        },
        Total_price:{
            type:Number,
            required:true,
            default: 0
        },
        Total_Item_Ordered:{
            type:Number,
            default: 0
        },
        SignAt:{
            type:Date,
            default: Date.now()
        },
        checkout:{
            type:Boolean,
            default:false
        }
    }
);

module.exports=mongoose.model("Item-Ordered", ItemOrderedSchema);