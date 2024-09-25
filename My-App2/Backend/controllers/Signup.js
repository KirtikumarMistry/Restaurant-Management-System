const Account=require('../model/UserDataschema')
const signup = async(req, res) => {
    try {
        const {password, email, name,confirmpassword, Accounttype} = req.body;
        const AlreadyExist=await Account.findOne({email:email})
         
        if(AlreadyExist)
        {
            return res.status(400).json({
                success:false,
                error: "Username already exist" });
        }
        console.log(confirmpassword);       
         if(!(confirmpassword == password))
         {   
             return res.status(406).json({
                success:false,
                error: "Password does not match"
             })
         }
        try{
             const data=await Account.create({name,password,email, Accounttype});
             console.log(data);
             
             res.status(200).json({
                 id:data._id,
                 success: true,
                 message: 'Signed Up successfully',
             });
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