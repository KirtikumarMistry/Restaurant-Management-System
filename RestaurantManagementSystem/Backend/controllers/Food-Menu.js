const Table=require('../models/Table');

const FoodMenu = async(req, res) => {
    try
    {
        const reqoriginalurl=req.originalUrl.match(/Food-Menu(\d+)/);

        const tableNum=reqoriginalurl[1];
        
        const table=await Table.findOne({Number : tableNum});

        if(!table)
        {
            return res.render('404');
        }
        
        res.render('Food-Menu');        
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

module.exports=FoodMenu;