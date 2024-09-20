const mongoose=require('mongoose');

const Orders=new  mongoose.Schema(
    {
        Table_Number:{
            type:String,
            required:true,
        },
        Items_Ordered: [
            {
                Name: {
                    type: String,
                    required: true,
                },
                Quantity: {
                    type: Number,
                    required: true,
                },
                Price: {
                    type: Number,
                    required: true,
                },
            },
        ],
        Total_Amount: {
            type: Number,
            default: 0,
        },
        Total_Quantity: {
            type: Number,
            default: 0,
        },
        Sign_At:{
            type:Date,
            default: Date.now()
        },
    }
);

module.exports=mongoose.model("Orders", Orders);