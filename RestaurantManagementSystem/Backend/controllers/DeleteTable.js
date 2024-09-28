const Item = require('../models/Item');
const Table=require('../models/Table')

const DeleteTable=async (req,res)=>{
    try{
        const id=req.params.id;
        console.log(id);
       const DeleteTable=await Table.findByIdAndDelete({_id:id})

       if(!DeleteTable)
       {
          return res.status(401).json({
            success:false,
            message:"Table not found"
          })
       }

      const Tables=await Table.find();
      const items = await Item.find()
      
       return res.status(200).json({
            success:true,
            message:`Table ${DeleteTable.Number} is Deleted`
        })       

    }catch(error)
    {
        return res.status(500).json({
            success:false,
            message:"Error While Deleting The Table"
        })
    }
}
module.exports=DeleteTable