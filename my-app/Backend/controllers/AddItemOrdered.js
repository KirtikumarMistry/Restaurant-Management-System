const Tables=require('../model/Tables.js');
const Item=require('../model/Item.js');
const ItemOrdered=require('../model/ItemOrdered');

const AddItemOrdered=async(req, res) => {
    try
    {
        const {tablenumber, itemname}=req.body;

        const table = await Tables.findOneAndUpdate(
            {number : tablenumber},
            {status : true}
        );

        if(!table)
        {
            console.log("Table not found");
            return res.status(404).json({message : "Table not found"});
        }

        let price=0;
        let count=0;
        await Promise.all(
            itemname.map(async (it) => {
                console.log(it);
                const item = await Item.findOne({name : it.name});
                count=count+it.count;
                price=price+item.price *it.count;
                
                return it;
            })
        )

        let tableorder = await ItemOrdered.findOne({Table_number : tablenumber});

        if(!tableorder)
        {
            tableorder=await ItemOrdered.create({
                Table_number : tablenumber,
                Item_name : itemname,
                Total_price : price,
                Total_Item_Ordered: count
            })
            console.log(tableorder);
        }
        else{
            let it=tableorder.Item_name;
            it.push(...itemname);
            tableorder.Total_price += price;
            tableorder.Total_Item_Ordered +=count;
            await tableorder.save();
            console.log(tableorder);
        }

        res.send(
            "0"
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
}

module.exports=AddItemOrdered;