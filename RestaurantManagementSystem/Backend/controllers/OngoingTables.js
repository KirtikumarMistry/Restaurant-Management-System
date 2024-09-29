const Table=require('../models/Table')

const OngoingTable=async (req,res)=>{
    try{
        const tables=await Table.find({
            Status:true
            })
         if(!tables)
         {
            return res.status(404).json({
                success:false,
                message:"No Live Table",
                table:[]
            })
         }
         return res.status(200).json({
            success:true,
            message:"Tables fetch successfully",
            tables:tables
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