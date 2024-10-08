const AdminData = require('../model/AdminData.js');

const GetAdminData=async(req, res) => {
    try{
        const admindata = await AdminData.findOne({});

        if(!admindata)
        {
            return res.status(404).json({message: "Admin Data not found"});
        }
        
        let revenue=admindata.total_price;
        console.log(revenue);
        
        res.json({revenue: revenue});

    }
    catch(err)
    {
        console.error(err);
        res.status(500).json({
            data:"error occurred",
            message:err.message,
        });
    }
}

module.exports=GetAdminData;