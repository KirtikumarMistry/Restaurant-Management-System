const Item=require('../model/Item.js');

const AddItem=async(req, res) => {
    try
    {
        const {name, price}=req.body;
        let item=await Item.findOne({name : name});

        if(!item)
        {
            item= await Item.create({name, price}); 
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

module.exports=AddItem;