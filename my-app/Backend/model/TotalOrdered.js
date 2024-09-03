const mongoose=require('mongoose');

const TotalOrdered= new mongoose.Schema(
    {
        Ordered:{
            type: Object,
            ref: 'Item-Ordered',
        },
        CheckedoutAt:{
            type:Date,
            default: Date.now()
        }
    }
);

module.exports=mongoose.model("Total-Order", TotalOrdered);