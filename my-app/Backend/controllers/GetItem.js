const Item =require('../model/Item.js');

const GetItem=async(req, res) => {
    try
    {
        const item = await Item.find({});
        let menu =[];
        item.map((it) => {
            menu.push({name : it.name, price: it.price});
            return it;
        })
        console.log(menu);
        res.send(
                menu
        );
    }
    catch(err)
    {
        console.error(err);
        res.status(500).json({
            data:"error occurred",
            message:err.message,
        });
    }
};

module.exports=GetItem;