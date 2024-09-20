const Tables = require('../model/Tables.js');

const AddTable=async(req, res) => {
    try
    {
        const {Number}=req.body;

        const alreadyexist=await Tables.findOne({Number : Number});

        if(alreadyexist)
        {
            return res.status(401).json({
                message: "Table Number Already Exists !!!"
            });
        }

        const addtable=await Tables.create({
            Number : Number,
        });

        res.status(201).json({
            message: "Table Added Successfully !",
            data: addtable,
        });
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

module.exports=AddTable;