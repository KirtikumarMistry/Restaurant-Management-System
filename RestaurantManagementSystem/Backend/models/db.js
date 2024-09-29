const mongoose = require("mongoose")

const Userdet = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    contactNumber:{
        type:String,
        required:true
    },
    AccountType:{
        type:String,
        default:"User",
        enum:["User","Admin"]
    }

})

const orderdet = new mongoose.Schema({
    orderDetails:{
        type:String,
        required:true
    },
    pickupTime:{
        type:String,
        required:true
    },
    orderid:{
        type:String,
        required:true
    },
    status:{
        type:String,
        
    }
})


const collection = new mongoose.model("Collection1",Userdet)
const orderdetcoll = new mongoose.model("orderdetcoll",orderdet)
module.exports={collection,orderdetcoll}


