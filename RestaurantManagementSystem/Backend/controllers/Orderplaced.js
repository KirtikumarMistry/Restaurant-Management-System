const orderdetcoll=require('../models/db');
const ordercompleted = require('./ordercompleted');
async function fetchall() {
    const documents = await orderdetcoll.find({})
   
    const doclist = [];
    documents.forEach(doc=>{
        doclist.push(doc)
    })
    return doclist
    
}
const orderplaced=async(req,res)=>{
    const orderid = uuidv4();
    const data = {
        orderDetails : req.body.orderDetails,
        pickupTime : req.body.pickupTime,
        orderid:orderid,
        status:"Incomplete"
    }
    
   const item=await orderdetcoll.create(data);
    const doclist = await fetchall();
   
   console.log(item);
   console.log(doclist)
    res.render("manager",{data:doclist})
    console.log("data to db")
}
module.exports=ordercompleted