const Table=require('../models/Table');
const Order=require('../models/Order');

const OngoingTable=async (req,res)=>{
    try{
        const orders=await Order.find({});
         if(!orders)
         {
            return res.status(404).json({
                success:false,
                message:"No Live Table",
                orders:[]
            })
         }
         return res.status(200).json({
            success:true,
            message:"Tables fetch successfully",
            orders:orders,
        })

 
    }catch(error)
    {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Error while fetching ongoing Tables"
        })
        
    }
}

module.exports=OngoingTable