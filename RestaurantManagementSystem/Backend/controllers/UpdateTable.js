const Table=require('../models/Table')

const UpdatedTable=async (req,res)=>{
    try{  
        const id=req.params.tableId;
        const {Number}=req.body;
        const OldTable=await Table.findById({_id:id})
        const alreadyexistTable=await Table.findOne({Number:Number});     
        if(alreadyexistTable)
        {   
            return res.json({
                success:true,
                message:`Table ${alreadyexistTable.Number} alreadyExists`
            }) 
        }
        const table=await Table.findByIdAndUpdate({_id:id},{Number:Number},{new:true})
        if(!table)
        {
            return res.status(404).json({
                success:true,
                message:"Table not Found"
            })  
        }
        return res.status(200).json({
            success:true,
            message:`Table ${OldTable.Number} updated to ${table.Number}` 
        }) 

    }catch(error)
    {
        return res.status(500).json({
            success:false,
            message:"Error while Updating the Table"
        })
    }
}

module.exports=UpdatedTable