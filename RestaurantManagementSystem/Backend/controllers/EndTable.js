const Table=require('../models/Table')
const Orders=require('../models/Order');
const Order = require('../models/Order');
const EndTable=async (req,res)=>{
    try{
        const {id}=req.body;
        console.log(id);
        const OrderDelete=await Orders.findById(id);
        const table=await Table.findOneAndUpdate({Number:OrderDelete.Table_Number},{Status:false},{new:true});
        await Orders.findOneAndDelete({_id : id}); 
        if(!table)
        {
            return res.status(404).json({
                success:false,
                message:"Table is not End"
            })
        }
        if(!OrderDelete)
            {
                return res.status(404).json({
                    success:false,
                    message:"Order is not End"
                })
            }

        return res.status(200).json({
            success:true,
            message:"Table is End Successfully"
        })

    }catch(error)
    {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Error while Updating Table,Please try again"
        })        
    }
}

module.exports=EndTable