const Item=require('../model/Item.js');
const Admin=require('../model/AdminData.js');
const AdminData = require('../model/AdminData.js');

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
            return res.send("1");
        }

        item=await Item.find({});
        const admindata=await AdminData.find({});

        let items=[];
        item.map((it) => {
            items.push({name : it.name, price : it.price, count : 0 , revenue : 0});
            return it;
        });
        console.log(items);

        await AdminData.updateMany({}, { $set: { items_delivered: items } });
        const result = await AdminData.find({});
        console.log(result);
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