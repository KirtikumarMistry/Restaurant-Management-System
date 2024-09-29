const Table=require('../models/Table')
const Orders=require('../models/Order')
const EndTable=async (req,res)=>{
    try{
        const {id}=req.body
        const table=await Table.findByIdAndUpdate(id,{Status:false},{new:true})
        if(!table)
        {
            return res.status(404).json({
                success:false,
                message:"Table is not End"
            })
        }
        const OrderDelete=await Orders.findOneAndDelete({Table_Number:table.Number})

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