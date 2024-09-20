const AdminData = require('../model/AdminData.js');
const Item = require('../model/Item.js');
const Tables=require('../model/Tables.js');

const AddAdminData=async(req, res) => {
    try{
        const {name}=req.body;

        const admindata=await AdminData.create({name : name});
        res.status(201).json({admindata});
    }
    catch(err)
    {
        console.error(err);
        res.status(500).json({
            data:"error occurred",
            message:err.message,
        });
    }
}

module.exports=AddAdminData;