const TotalOrdered=require('../model/TotalOrdered.js');
const Tables =require('../model/Tables.js');
const ItemOrdered=require('../model/ItemOrdered.js');
const AdminData=require('../model/AdminData.js');

const Admin=async(req, res) => {
    try
    {
        const admindata=await AdminData.findOne({});

        const {tableNumber}=req.body;

        const tableitemordered=await ItemOrdered.findOne({Table_number : tableNumber});

        console.log(admindata.total_price);
        console.log(tableitemordered.Total_price);
        admindata.total_price += tableitemordered.Total_price;
        await admindata.save();

        const totalordered=await TotalOrdered.create({Ordered : tableitemordered, CheckedoutAt : Date.now()});
        console.log(totalordered);

        await ItemOrdered.findOneAndDelete({Table_number : tableNumber});

        const table=await Tables.findOneAndUpdate(
            {number : tableNumber},
            {status : false},
        )

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

module.exports=Admin;