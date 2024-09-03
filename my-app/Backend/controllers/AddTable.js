const Tables=require('../model/Tables.js');

const AddTable=async(req, res) => {
    try{
        const {number}=req.body;
        let table=await Tables.findOne({number : number});

        if(!table)
        {
            table= await Tables.create({number}); 
        }
        else
        {
            res.send("1");
        }

        res.send("0");
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