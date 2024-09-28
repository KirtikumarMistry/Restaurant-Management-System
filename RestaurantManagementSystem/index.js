const express = require("express");
const app = express();
const path = require("path")
const ejs = require("ejs");
const cors = require('cors');

require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join('Frontend', 'public')));
const { v4: uuidv4 } = require('uuid');

const dbConnection = require('./Backend/config/database');
dbConnection();

app.use(express.static(path.join('Frontend', 'assets')));
const {collection,orderdetcoll} = require("./Backend/models/db");

app.set("view engine","ejs")
app.set("views", path.join('Frontend', 'views'));
app.use(express.urlencoded({extended:false}))

const port=process.env.PORT || 4000;

const Router=require('./Backend/routers/route');
app.use("/", Router);

app.listen(port , () => {
    console.log(`Server is running on port ${port}`);
});

app.post("/login",async(req,res)=>{
   
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

app.get("/signup",(req,res)=>{
    res.render("signup")
})

app.post("/signup",async(req,res)=>{
        const newuser = {
        name : req.body.name,
         email : req.body.email,
         password : req.body.password,
         confirmpassword : req.body.confirmpassword
    
        }
        if(collection.findOne({email:req.body.email}) == true)
        {
            res.send("email already exists");
        }
        else if (collection.find({password:req.body.password}) == true)
        {
            res.send("passs taken")
        }
        else
        {
            await collection.insertMany([newuser])
            res.render("customer")
        }
});
app.get("/manager",(req,res)=>{
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

app.post("/orderplaced",async(req,res)=>{
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

app.post("/ordercompleted",async(req,res)=>{

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
