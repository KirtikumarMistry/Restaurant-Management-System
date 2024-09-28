const Userdet=require('../models/db')
const bcrypt=require('bcrypt')
const login = async (req, res) => {
    try {
      const {  email, password } = req.body
      const user = await Account.findOne({ email });
      if (!user) {
        res.render('login', { 
            showerrorinemail: email !== "", 
          });
      }
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        if (user.username == '22ce056' || user.username == "22ce066") {
          return res.json({
            id: user._id,
            success: true,
            message: "Login successfully",
            admin: true,
            status: true,
            data: user,
          })
        }
        else {
          return res.json({
            data: user,
            id: user._id,
            success: true,
            message: "Login successfully",
            admin: false,
            status: user.status
          })
        }
      } else {
        return res.json({
          success: false,
          message: "Password incorrect",
          id: 0
        })
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