//parth pass=parth123
//kirti pass=kirti123
const Account = require("../model/UserDataschema");
const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await Account.findOne({ email });
        if (!user) {
            return res.json({
                success: false,
                message: "username does not exit",
                id: 1
            })
        }

        if (password === user.password) {
            return res.json({
                id: user._id,
                success: true,
                message: "Login successfully",
                data: user,
                Accounttype: user.Accounttype
            })

        } else {
            return res.json({
                success: false,
                message: "Password incorrect",
                 data:user
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

module.exports = login