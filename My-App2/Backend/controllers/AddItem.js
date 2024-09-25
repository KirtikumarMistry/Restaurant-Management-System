const Items=require('../model/Items.js');

const AddItem=async(req, res) => {
    try
    {
        const {Name, Description, Price, Image} = req.body;
        const alreadyexist=await Items.findOne({Name:  Name});

        if(alreadyexist)
        {
            return res.status(401).json({
                message: "Item Name Already Exists !!!"
            });
        }

        const additem=await Items.create({
            Name: Name,
            Description: Description,
            Price: Price,
            Image: Image,
        });

        res.status(201).json({
            message: "Item Added Successfully !",
            data: additem,
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

module.exports=AddItem;