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
    confirmpassword:{
        type:String,
        required:true
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


