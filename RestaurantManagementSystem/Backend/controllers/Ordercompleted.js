const orderdetcoll=require('../models/db')

const ordercompleted=async(req,res)=>{

    try {
    const backorderid = req.body.sentorderid
    const order = await orderdetcoll.findOne({orderid:backorderid});
    console.log(order);
    if(!order)
    {
        return res.status(404).json({success:false,message: 'order does not exist'});
    }
    else{
        const updatedorder = await orderdetcoll.findOneAndUpdate(
            { orderid: backorderid },  // Query to find the order
            { $set: { status: "Completed" } },  // Update the status to 'Completed'
            { returnDocument: 'after' }  // Return the updated document after the update
        );
    }
    // 'updatedorder.value' holds the updated document
    
    if (!updatedorder.value) {
        return res.status(404).json({success:false, message: 'Order not found', orderid: backorderid });
    }
    
    return res.status(200).json({ success:true,message: 'Order marked as completed', orderid: backorderid });
    
    } catch (error) {
      return res.status(500).send({success:false, message: 'Error updating order', error: error.message });
    }
    
}
module.exports=ordercompleted