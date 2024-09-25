const ItemOrdered=require('../model/ItemOrdered');

const GetItemOrdered=async(req, res) => {
    try
    {
        const number=req.params.number;
        console.log(number);
        
        const tableitemordered=await ItemOrdered.find({Table_number : number});
        console.log(tableitemordered);

        const itemordered = tableitemordered[0].Item_name;
        console.log(itemordered);

        res.send(itemordered);
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

module.exports=GetItemOrdered;