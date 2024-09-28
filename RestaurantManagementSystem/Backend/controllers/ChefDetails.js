const ChefDeatils = async(req, res) => {
    try
    {
        res.render('ChefDetails');        
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

module.exports=ChefDeatils;