const Order=require('../model/Orders');
const AdminData=async (req,res)=>{
    try{
         const data=await Order.find({})
         let sum=0;
         data.map((Item)=>{
            return sum+=Item.Total_Amount
         })
         let Items={}
        //  data.map((Item)=>{
        //     return Item.Items_Ordered.map((Food_item)=>{
        //         // const Food_name=Food_item.Name
        //        return Items={
        //         ...Items,
        //         Food_item.Name:[...Food_name,Food_item.Quantity]
        //        }             
        //     })
        //  })
         console.log(Items);
         
         return res.status(200).json({
            success:true,
            Total_Amount:sum,
            data:data,
            Items:Items
         })
    }catch(error)
    {
        return res.status(501).json({
            success:false,
            message:"Internal server Eror"
        })
    }
}
module.exports=AdminData