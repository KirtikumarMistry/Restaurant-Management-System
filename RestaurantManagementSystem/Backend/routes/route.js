const express=require('express')
const router=express.Router()
const signup=require('../controllers/Signup')
const {collection}=require("../models/db")
router.get("/",(req,res)=>{
    res.render('login', { 
        email: '', 
        forgetPassword: false, 
        showerrorinemail: false, 
        showerrorinpass: false
      });
});

router.post("/login",async(req,res)=>{
   
    const email1 = req.body.email
    
    const user = await collection.findOne({email : req.body.email})
   
    if(email1=="admin@gmail.com")
    {
      
        res.send("admin interface")
    }
    else if (email1 == "manager@gmail.com")
    {
       
        res.redirect("manager")
    }
    else if(user)
    {
        
        const getpass = req.body.password === user.password;

        if(getpass)
        {
            
            res.render("customer")
        }
        else
        {
            
            res.send("User does not exist please signup")
        }
    }
   
})
router.get('/signup', (req, res) => {
    res.render('signup', {
      userdata: { name: '', email: '', password: '', confirmpassword: '' , contactNumber:''},
      data: { success: false, message: '' }
    });
  });
router.post("/signup",signup);
router.get("/manager",(req,res)=>{
    const data=[]
    res.render("manager",{data})
})

async function fetchall() {
    const documents = await orderdetcoll.find({})
   
    const doclist = [];
    documents.forEach(doc=>{
        doclist.push(doc)
    })
    return doclist
    
}
router.post("/orderplaced",async(req,res)=>{
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

})

router.post("/ordercompleted",async(req,res)=>{

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
    
})
   
    

module.exports=router