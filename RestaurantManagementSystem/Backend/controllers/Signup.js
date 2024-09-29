const {collection}=require('../models/db')
const bcrypt=require('bcrypt')
const signup = async(req, res) => {
    try {
        const {password, email, name,confirmpassword, contactNumber} = req.body;
        const AlreadyExist=await collection.findOne({email})
         
        if(AlreadyExist)
        {
            return res.status(400).json({
                success:false,
                error: "Username already exist" });
        }
         if(!(confirmpassword == password))
         {
             return res.status(406).json({
                success:false,
                error: "Password does not match"
             })
         }
        let hashpassword
        try{
             hashpassword= await bcrypt.hash(password,10);
             const data=await collection.create({name,password:hashpassword,email,contactNumber});
            //  res.status(200).json({
            //      id:data._id,
            //      success: true,
            //      message: 'Signed Up successfully',
            //  });
             
            res.status(200).render("Home",{
                Log:true,               
            })
        }
        catch(error)
        {
            return res.status(406).json({
                success:false,
                error: "Internal server error"
             })
        }
    }
    catch(err)
    {
        console.log(err);
        res.status(400).json({
            success: false,
            message: 'Something went wrong',
    });
    }
}

module.exports=signup;