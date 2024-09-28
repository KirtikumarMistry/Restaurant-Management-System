const FoodMenu = async(req, res) => {
    try
    {
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