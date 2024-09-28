const Item=require('../models/Item')

const DeleteItem= async (req,res)=>{
    try{
       const id=req.params.itemId;

       const DeleteItem=await Item.findByIdAndDelete(id);

       if(!DeleteItem){
          return res.status(404).json({
            success:false,
            message:"Item not Found"
          })
       }
       return res.status(200).json({
        success:true,
        message:`${DeleteItem.Name} is Deleted Successfully`
      })

    }catch(error)
    {
        return res.status(500).json({
            success:false,
            message:"Error while Deleting the Item"
          })
    }
}

module.exports=DeleteItem