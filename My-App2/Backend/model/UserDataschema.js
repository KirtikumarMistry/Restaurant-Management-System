const mongoose=require('mongoose');
// const nodemailer=require('nodemailer');

const account = new mongoose.Schema(
    {
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
        Accounttype:{
            type:String,
            default:"customer",
            enum:["manager","admin","customer"]
        }
    }
)

module.exports=mongoose.model("Account", account);