const {collection}=require('../models/db')
const bcrypt=require('bcrypt')
const login = async (req, res) => {
    try {
      const {  email, password } = req.body
      const user=await collection.findOne({email})
      if (!user) {
        res.render('login', { 
            showerrorinemail: email !== "", 
          });
      }
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        res.render("Home",{
          Log:true
        })
      
      } else {
        res.render('login', { 
          email: '', 
          forgetPassword: false, 
          showerrorinemail: false, 
          showerrorinpass: true
      });
      }
    } catch (error) {
      console.log(error);
      console.error(error);
      res.status(500).json({
        success: false,
        message: "Internal Server Error"
      })
    }
  }
module.exports=login